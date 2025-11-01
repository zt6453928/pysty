import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { recordLevelCompletion } from '@/lib/actions/achievements';

// 获取用户进度
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: '需要用户ID' }, { status: 400 });
    }

    // 获取用户奖励信息
    const rewards = await sql`
      SELECT * FROM user_rewards WHERE user_id = ${userId}
    `;

    let userReward = rewards[0];

    // 如果用户没有奖励记录，创建一个
    if (!userReward) {
      const newReward = await sql`
        INSERT INTO user_rewards (user_id, total_magic_points, current_level)
        VALUES (${userId}, 0, 1)
        RETURNING *
      `;
      userReward = newReward[0];
    }

    // 获取用户的关卡进度
    const progress = await sql`
      SELECT up.*, l.title, l.level_number, l.magic_points
      FROM user_progress up
      JOIN levels l ON up.level_id = l.id
      WHERE up.user_id = ${userId}
      ORDER BY l.level_number
    `;

    // 获取用户解锁的成就数量
    const achievementCount = await sql`
      SELECT COUNT(*) as count FROM user_achievements
      WHERE user_id = ${userId}
    `;

    // 将成就数量添加到 reward 对象中
    const rewardWithAchievements = {
      ...userReward,
      achievementCount: parseInt(achievementCount[0]?.count || '0')
    };

    return NextResponse.json({
      reward: rewardWithAchievements,
      progress,
    });

  } catch (error) {
    return NextResponse.json(
      { error: '服务器错误：' + (error as Error).message },
      { status: 500 }
    );
  }
}

// 更新用户进度
export async function POST(request: NextRequest) {
  try {
    const { userId, levelId, completed, score } = await request.json();

    if (!userId || !levelId) {
      return NextResponse.json({ error: '缺少必要参数' }, { status: 400 });
    }

    // 更新或创建进度记录
    const result = await sql`
      INSERT INTO user_progress (user_id, level_id, completed, score, completed_at)
      VALUES (${userId}, ${levelId}, ${completed}, ${score}, ${completed ? new Date().toISOString() : null})
      ON CONFLICT (user_id, level_id)
      DO UPDATE SET
        completed = ${completed},
        score = ${score},
        completed_at = ${completed ? new Date().toISOString() : null}
      RETURNING *
    `;

    // 如果完成了关卡，更新用户奖励
    if (completed) {
      const level = await sql`SELECT magic_points FROM levels WHERE id = ${levelId}`;
      const magicPoints = level[0]?.magic_points || 0;

      await sql`
        UPDATE user_rewards
        SET
          total_magic_points = total_magic_points + ${magicPoints},
          current_level = GREATEST(current_level, ${levelId}),
          updated_at = NOW()
        WHERE user_id = ${userId}
      `;

      // 触发关卡完成成就检查
      try {
        await recordLevelCompletion(userId);
      } catch (achievementError) {
        console.error('记录关卡完成成就失败:', achievementError);
        // 不影响主流程
      }
    }

    return NextResponse.json({ success: true, progress: result[0] });

  } catch (error) {
    return NextResponse.json(
      { error: '服务器错误：' + (error as Error).message },
      { status: 500 }
    );
  }
}

