import { NextRequest, NextResponse } from 'next/server';
import { getAllAchievements, getUserAchievements, getUserStats } from '@/lib/actions/achievements';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      // 返回所有成就
      const achievements = await getAllAchievements();
      return NextResponse.json({ achievements });
    }

    // 返回用户成就信息
    const [allAchievements, userAchievements, userStats] = await Promise.all([
      getAllAchievements(),
      getUserAchievements(userId),
      getUserStats(userId),
    ]);

    // 计算成就进度
    const achievementsWithProgress = allAchievements.map((achievement) => {
      const unlocked = userAchievements.find((ua) => ua.achievement_id === achievement.id);
      
      let progress = 0;
      if (userStats) {
        switch (achievement.requirement_type) {
          case 'levels_completed':
            progress = Math.min(
              (userStats.total_levels_completed / achievement.requirement_value) * 100,
              100
            );
            break;
          case 'exercises_completed':
            progress = Math.min(
              (userStats.total_exercises_completed / achievement.requirement_value) * 100,
              100
            );
            break;
          case 'streak_days':
            progress = Math.min(
              (userStats.current_streak / achievement.requirement_value) * 100,
              100
            );
            break;
          case 'total_points':
            // 需要从其他地方获取总积分
            progress = 0;
            break;
          default:
            progress = unlocked ? 100 : 0;
        }
      }

      return {
        ...achievement,
        unlocked: !!unlocked,
        unlocked_at: unlocked?.unlocked_at || null,
        progress: Math.round(progress),
      };
    });

    return NextResponse.json({
      achievements: achievementsWithProgress,
      stats: userStats,
      unlockedCount: userAchievements.length,
      totalCount: allAchievements.length,
    });
  } catch (error) {
    console.error('获取成就失败:', error);
    return NextResponse.json({ error: '获取成就失败' }, { status: 500 });
  }
}

