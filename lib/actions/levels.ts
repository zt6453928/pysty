'use server';

import { sql } from '@/lib/db';

export async function getAllLevels() {
  try {
    // 只返回列表页需要的字段，减少数据传输
    const levels = await sql`
      SELECT 
        id, 
        level_number, 
        title, 
        description, 
        magic_points, 
        unlock_requirement
      FROM levels 
      ORDER BY level_number ASC
    `;
    return levels;
  } catch (error) {
    console.error('获取关卡失败:', error);
    return [];
  }
}

export async function getLevelByNumber(levelNumber: number) {
  try {
    const levels = await sql`
      SELECT * FROM levels WHERE level_number = ${levelNumber}
    `;
    return levels[0] || null;
  } catch (error) {
    console.error('获取关卡失败:', error);
    return null;
  }
}

export async function getExercisesByLevel(levelId: number) {
  try {
    const exercises = await sql`
      SELECT * FROM exercises WHERE level_id = ${levelId} ORDER BY order_index ASC
    `;
    return exercises;
  } catch (error) {
    console.error('获取练习题失败:', error);
    return [];
  }
}

export async function getUserProgress(userId: string, levelId: number) {
  try {
    const progress = await sql`
      SELECT * FROM user_progress WHERE user_id = ${userId} AND level_id = ${levelId}
    `;
    return progress[0] || null;
  } catch (error) {
    console.error('获取用户进度失败:', error);
    return null;
  }
}

