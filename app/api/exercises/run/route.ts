import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { recordExerciseCompletion, checkSpecialAchievements } from '@/lib/actions/achievements';

// Piston API 配置
const PISTON_API_URL = 'https://emkc.org/api/v2/piston';

// 执行 Python 代码
async function executePythonCode(code: string): Promise<{ stdout: string; stderr: string; success: boolean }> {
  try {
    const response = await fetch(`${PISTON_API_URL}/execute`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: 'python',
        version: '3.10.0',
        files: [
          {
            name: 'main.py',
            content: code,
          },
        ],
        stdin: '',
        args: [],
        compile_timeout: 10000,
        run_timeout: 3000,
        compile_memory_limit: -1,
        run_memory_limit: -1,
      }),
    });

    if (!response.ok) {
      throw new Error(`Piston API 错误: ${response.statusText}`);
    }

    const result = await response.json();
    
    return {
      stdout: result.run?.stdout || '',
      stderr: result.run?.stderr || '',
      success: !result.run?.stderr && result.run?.code === 0,
    };
  } catch (error) {
    console.error('代码执行错误:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { exerciseId, code, userId } = await request.json();

    // 获取练习题信息
    const exercises = await sql`
      SELECT * FROM exercises WHERE id = ${exerciseId}
    `;

    if (exercises.length === 0) {
      return NextResponse.json({ error: '练习题不存在' }, { status: 404 });
    }

    const exercise = exercises[0];
    const testCases = exercise.test_cases || [];

    // 代码验证
    if (!code || code.trim().length === 0) {
      return NextResponse.json({
        passed: false,
        output: '❌ 代码不能为空',
        score: 0,
      });
    }

    let passed = true;
    let output = '';
    let score = 0;

    try {
      // 使用 Piston API 执行真实的 Python 代码
      const result = await executePythonCode(code);

      // 如果有标准错误输出，说明代码有问题
      if (result.stderr) {
        passed = false;
        output = '❌ 代码执行错误：\n\n';
        output += result.stderr;
        output += '\n\n💡 提示：检查你的代码语法和逻辑';
        score = 0;
      } else {
        // 代码执行成功
        passed = true;
        output = '✅ 代码执行成功！\n\n';
        output += '📤 输出结果：\n';
        output += result.stdout || '(无输出)';
        
        // 如果有测试用例，进行验证
        if (testCases.length > 0) {
          output += '\n\n🧪 测试用例验证：\n';
          let passedTests = 0;
          
          for (const testCase of testCases) {
            // 这里可以根据测试用例进行更复杂的验证
            // 目前简化为检查输出是否包含期望的内容
            const expectedOutput = testCase.expectedOutput || '';
            const testPassed = result.stdout.includes(expectedOutput);
        
            if (testPassed) {
              output += `✓ ${testCase.name || '测试'}: 通过\n`;
              passedTests++;
        } else {
              output += `✗ ${testCase.name || '测试'}: 失败\n`;
          passed = false;
        }
      }

          score = Math.round((passedTests / testCases.length) * exercise.points);
        } else {
          // 没有测试用例，代码能运行就给满分
        score = exercise.points;
          output += '\n\n🎉 练习完成！获得 ' + score + ' 魔法点数！';
        }

        // 如果用户ID存在且练习通过，记录成就
        if (userId && passed && score > 0) {
          try {
            await recordExerciseCompletion(userId);
            
            // 检查特殊成就
            const hour = new Date().getHours();
            if (hour >= 23 || hour < 6) {
              await checkSpecialAchievements(userId, 'night_owl');
            }
            if (hour >= 4 && hour < 6) {
              await checkSpecialAchievements(userId, 'early_bird');
            }
          } catch (achievementError) {
            console.error('记录成就失败:', achievementError);
            // 不影响主流程
          }
        }
      }

    } catch (error) {
      passed = false;
      output = '❌ 代码执行服务错误：\n\n';
      output += (error as Error).message;
      output += '\n\n💡 提示：请稍后重试，或检查网络连接';
      score = 0;
    }

    return NextResponse.json({
      passed,
      output,
      score,
    });

  } catch (error) {
    return NextResponse.json(
      { error: '服务器错误：' + (error as Error).message },
      { status: 500 }
    );
  }
}

