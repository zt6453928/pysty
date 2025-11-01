'use server';

import { sql } from '@/lib/db';
import type { Achievement, UserAchievement, UserStats } from '@/lib/db';

/**
 * 获取所有成就
 */
export async function getAllAchievements(): Promise<Achievement[]> {
  try {
    const achievements = await sql`
      SELECT * FROM achievements ORDER BY category, requirement_value ASC
    `;
    return achievements as Achievement[];
  } catch (error) {
    console.error('获取成就失败:', error);
    return [];
  }
}

/**
 * 获取用户已解锁的成就
 */
export async function getUserAchievements(userId: string): Promise<UserAchievement[]> {
  try {
    const userAchievements = await sql`
      SELECT 
        ua.*,
        a.key,
        a.title,
        a.description,
        a.icon,
        a.category,
        a.requirement_type,
        a.requirement_value,
        a.points,
        a.rarity
      FROM user_achievements ua
      JOIN achievements a ON ua.achievement_id = a.id
      WHERE ua.user_id = ${userId}
      ORDER BY ua.unlocked_at DESC
    `;
    return userAchievements as any[];
  } catch (error) {
    console.error('获取用户成就失败:', error);
    return [];
  }
}

/**
 * 获取用户统计信息
 */
export async function getUserStats(userId: string): Promise<UserStats | null> {
  try {
    const stats = await sql`
      SELECT * FROM user_stats WHERE user_id = ${userId}
    `;
    if (stats.length === 0) {
      // 创建新的统计记录
      const newStats = await sql`
        INSERT INTO user_stats (user_id)
        VALUES (${userId})
        RETURNING *
      `;
      return newStats[0] as UserStats;
    }
    return stats[0] as UserStats;
  } catch (error) {
    console.error('获取用户统计失败:', error);
    return null;
  }
}

/**
 * 更新用户统计信息
 */
export async function updateUserStats(
  userId: string,
  updates: Partial<UserStats>
): Promise<boolean> {
  try {
    // 构建动态更新查询
    const updateFields = Object.entries(updates)
      .filter(([key]) => key !== 'id' && key !== 'user_id' && key !== 'created_at')
      .map(([key]) => key);

    if (updateFields.length === 0) return false;

    // 根据需要更新的字段构建查询
    if ('current_streak' in updates && 'longest_streak' in updates && 'last_activity_date' in updates) {
      await sql`
        UPDATE user_stats
        SET 
          current_streak = ${updates.current_streak},
          longest_streak = ${updates.longest_streak},
          last_activity_date = ${updates.last_activity_date},
          updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ${userId}
      `;
    } else if ('total_exercises_completed' in updates) {
      await sql`
        UPDATE user_stats
        SET 
          total_exercises_completed = ${updates.total_exercises_completed},
          updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ${userId}
      `;
    } else if ('total_levels_completed' in updates) {
      await sql`
        UPDATE user_stats
        SET 
          total_levels_completed = ${updates.total_levels_completed},
          updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ${userId}
      `;
    }

    return true;
  } catch (error) {
    console.error('更新用户统计失败:', error);
    return false;
  }
}

/**
 * 解锁成就
 */
export async function unlockAchievement(
  userId: string,
  achievementKey: string
): Promise<{ success: boolean; achievement?: Achievement; isNew?: boolean }> {
  try {
    // 获取成就信息
    const achievements = await sql`
      SELECT * FROM achievements WHERE key = ${achievementKey}
    `;
    
    if (achievements.length === 0) {
      return { success: false };
    }

    const achievement = achievements[0] as Achievement;

    // 检查是否已解锁
    const existing = await sql`
      SELECT * FROM user_achievements 
      WHERE user_id = ${userId} AND achievement_id = ${achievement.id}
    `;

    if (existing.length > 0) {
      return { success: true, achievement, isNew: false };
    }

    // 解锁成就
    await sql`
      INSERT INTO user_achievements (user_id, achievement_id)
      VALUES (${userId}, ${achievement.id})
    `;

    // 增加用户的魔法点数
    await sql`
      UPDATE user_rewards
      SET total_magic_points = total_magic_points + ${achievement.points}
      WHERE user_id = ${userId}
    `;

    return { success: true, achievement, isNew: true };
  } catch (error) {
    console.error('解锁成就失败:', error);
    return { success: false };
  }
}

/**
 * 检查并授予成就
 */
export async function checkAndGrantAchievements(userId: string): Promise<Achievement[]> {
  try {
    const newAchievements: Achievement[] = [];

    // 获取用户统计
    const stats = await getUserStats(userId);
    if (!stats) return [];

    // 获取用户进度
    const userProgress = await sql`
      SELECT * FROM user_progress WHERE user_id = ${userId}
    `;

    const userReward = await sql`
      SELECT * FROM user_rewards WHERE user_id = ${userId}
    `;

    const completedLevels = userProgress.filter((p: any) => p.completed).length;
    const totalPoints = userReward[0]?.total_magic_points || 0;

    // 获取所有成就
    const allAchievements = await getAllAchievements();

    // 获取已解锁的成就
    const unlockedAchievements = await getUserAchievements(userId);
    const unlockedIds = new Set(unlockedAchievements.map((ua) => ua.achievement_id));

    for (const achievement of allAchievements) {
      // 跳过已解锁的成就
      if (unlockedIds.has(achievement.id)) continue;

      let shouldUnlock = false;

      switch (achievement.requirement_type) {
        case 'levels_completed':
          shouldUnlock = completedLevels >= achievement.requirement_value;
          break;
        case 'total_points':
          shouldUnlock = totalPoints >= achievement.requirement_value;
          break;
        case 'exercises_completed':
          shouldUnlock = stats.total_exercises_completed >= achievement.requirement_value;
          break;
        case 'streak_days':
          shouldUnlock = stats.current_streak >= achievement.requirement_value;
          break;
        // special 类型的成就需要特殊处理
        default:
          break;
      }

      if (shouldUnlock) {
        const result = await unlockAchievement(userId, achievement.key);
        if (result.success && result.isNew && result.achievement) {
          newAchievements.push(result.achievement);
        }
      }
    }

    return newAchievements;
  } catch (error) {
    console.error('检查成就失败:', error);
    return [];
  }
}

/**
 * 更新用户活动（用于连续学习统计）
 */
export async function updateUserActivity(userId: string): Promise<void> {
  try {
    const stats = await getUserStats(userId);
    if (!stats) return;

    const today = new Date().toISOString().split('T')[0];
    const lastActivity = stats.last_activity_date
      ? new Date(stats.last_activity_date).toISOString().split('T')[0]
      : null;

    if (lastActivity === today) {
      // 今天已经活动过了
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    let newStreak = 1;
    if (lastActivity === yesterdayStr) {
      // 连续学习
      newStreak = stats.current_streak + 1;
    }

    const longestStreak = Math.max(newStreak, stats.longest_streak);

    await sql`
      UPDATE user_stats
      SET 
        current_streak = ${newStreak},
        longest_streak = ${longestStreak},
        last_activity_date = ${today},
        updated_at = CURRENT_TIMESTAMP
      WHERE user_id = ${userId}
    `;

    // 检查连续学习成就
    await checkAndGrantAchievements(userId);
  } catch (error) {
    console.error('更新用户活动失败:', error);
  }
}

/**
 * 记录练习题完成
 */
export async function recordExerciseCompletion(userId: string): Promise<void> {
  try {
    await sql`
      UPDATE user_stats
      SET 
        total_exercises_completed = total_exercises_completed + 1,
        updated_at = CURRENT_TIMESTAMP
      WHERE user_id = ${userId}
    `;

    // 更新活动时间
    await updateUserActivity(userId);

    // 检查成就
    await checkAndGrantAchievements(userId);
  } catch (error) {
    console.error('记录练习题完成失败:', error);
  }
}

/**
 * 记录关卡完成
 */
export async function recordLevelCompletion(userId: string): Promise<void> {
  try {
    await sql`
      UPDATE user_stats
      SET 
        total_levels_completed = total_levels_completed + 1,
        updated_at = CURRENT_TIMESTAMP
      WHERE user_id = ${userId}
    `;

    // 更新活动时间
    await updateUserActivity(userId);

    // 检查成就
    await checkAndGrantAchievements(userId);
  } catch (error) {
    console.error('记录关卡完成失败:', error);
  }
}

/**
 * 检查特殊成就
 */
export async function checkSpecialAchievements(
  userId: string,
  type: 'night_owl' | 'early_bird' | 'speed_runner' | 'perfectionist' | 'first_blood' | 'comeback'
): Promise<Achievement | null> {
  try {
    const result = await unlockAchievement(userId, type);
    return result.isNew ? result.achievement || null : null;
  } catch (error) {
    console.error('检查特殊成就失败:', error);
    return null;
  }
}

