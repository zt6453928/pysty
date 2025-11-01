import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId, exerciseId, code, passed, score } = await request.json();

    if (!userId || !exerciseId) {
      return NextResponse.json({ error: '缺少必需参数' }, { status: 400 });
    }

    // 保存或更新练习题提交记录
    await sql`
      INSERT INTO user_exercise_submissions (user_id, exercise_id, code, passed, score)
      VALUES (${userId}, ${exerciseId}, ${code}, ${passed}, ${score})
      ON CONFLICT (user_id, exercise_id) 
      DO UPDATE SET 
        code = ${code},
        passed = ${passed},
        score = ${score},
        submitted_at = CURRENT_TIMESTAMP
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('保存练习题提交失败:', error);
    return NextResponse.json(
      { error: '保存失败：' + (error as Error).message },
      { status: 500 }
    );
  }
}

// 获取用户的练习题完成记录
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const levelId = searchParams.get('levelId');

    if (!userId) {
      return NextResponse.json({ error: '缺少userId参数' }, { status: 400 });
    }

    let submissions;
    
    if (levelId) {
      // 获取指定关卡的练习题完成记录
      submissions = await sql`
        SELECT ues.* 
        FROM user_exercise_submissions ues
        JOIN exercises e ON ues.exercise_id = e.id
        WHERE ues.user_id = ${userId} AND e.level_id = ${levelId}
      `;
    } else {
      // 获取所有练习题完成记录
      submissions = await sql`
        SELECT * FROM user_exercise_submissions
        WHERE user_id = ${userId}
      `;
    }

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('获取练习题记录失败:', error);
    return NextResponse.json(
      { error: '获取失败：' + (error as Error).message },
      { status: 500 }
    );
  }
}

