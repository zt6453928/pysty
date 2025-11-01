/**
 * 测试代码执行功能
 * 验证 Piston API 集成是否正常工作
 */

const PISTON_API_URL = 'https://emkc.org/api/v2/piston';

// 测试代码示例
const testCodes = [
  {
    name: '基础输出测试',
    code: 'print("Hello, Python!")',
    expectedOutput: 'Hello, Python!',
  },
  {
    name: '数学运算测试',
    code: 'result = 10 + 5\nprint(result)',
    expectedOutput: '15',
  },
  {
    name: '变量测试',
    code: 'name = "Python"\nage = 30\nprint(f"我是{name}，{age}岁")',
    expectedOutput: '我是Python，30岁',
  },
  {
    name: '函数测试',
    code: 'def add(a, b):\n    return a + b\nresult = add(3, 5)\nprint(f"3 + 5 = {result}")',
    expectedOutput: '3 + 5 = 8',
  },
  {
    name: '列表测试',
    code: 'numbers = [1, 2, 3, 4, 5]\nprint(f"总和: {sum(numbers)}")\nprint(f"平均: {sum(numbers)/len(numbers)}")',
    expectedOutput: '总和: 15',
  },
  {
    name: '错误处理测试',
    code: 'x = 10 / 0',
    expectError: true,
  },
];

async function executePythonCode(code: string) {
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
      }),
    });

    if (!response.ok) {
      throw new Error(`API 错误: ${response.statusText}`);
    }

    const result = await response.json();
    
    return {
      stdout: result.run?.stdout || '',
      stderr: result.run?.stderr || '',
      code: result.run?.code || 0,
      success: !result.run?.stderr && result.run?.code === 0,
    };
  } catch (error) {
    console.error('执行错误:', error);
    throw error;
  }
}

async function runTests() {
  console.log('🧪 开始测试 Python 代码执行功能...\n');
  console.log('='.repeat(70));
  
  let passedTests = 0;
  let failedTests = 0;

  for (const test of testCodes) {
    console.log(`\n📝 测试: ${test.name}`);
    console.log('代码:');
    console.log(test.code.split('\n').map(line => '  ' + line).join('\n'));
    console.log('');

    try {
      const result = await executePythonCode(test.code);

      if (test.expectError) {
        // 期望有错误
        if (result.stderr) {
          console.log('✅ 测试通过（正确捕获错误）');
          console.log('错误信息:', result.stderr.split('\n')[0]);
          passedTests++;
        } else {
          console.log('❌ 测试失败（应该有错误但没有）');
          failedTests++;
        }
      } else {
        // 期望成功执行
        if (result.success) {
          console.log('✅ 测试通过');
          console.log('输出:', result.stdout.trim());
          
          if (test.expectedOutput && result.stdout.includes(test.expectedOutput)) {
            console.log('✓ 输出匹配预期');
          }
          passedTests++;
        } else {
          console.log('❌ 测试失败');
          console.log('错误:', result.stderr);
          failedTests++;
        }
      }
    } catch (error) {
      console.log('❌ 测试失败（异常）');
      console.log('异常:', (error as Error).message);
      failedTests++;
    }

    console.log('-'.repeat(70));
  }

  console.log('\n' + '='.repeat(70));
  console.log('\n📊 测试结果汇总:\n');
  console.log(`   ✅ 通过: ${passedTests} 个`);
  console.log(`   ❌ 失败: ${failedTests} 个`);
  console.log(`   📈 成功率: ${((passedTests / testCodes.length) * 100).toFixed(1)}%`);
  
  if (failedTests === 0) {
    console.log('\n🎉 所有测试通过！代码执行功能正常！');
  } else {
    console.log('\n⚠️  部分测试失败，请检查配置');
  }
  
  console.log('\n' + '='.repeat(70));
}

// 运行测试
runTests().catch(error => {
  console.error('测试运行失败:', error);
  process.exit(1);
});

