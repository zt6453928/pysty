import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function verifyExercises() {
  try {
    console.log('🔍 验证 Day 1-5 的练习题...\n');

    for (let day = 1; day <= 5; day++) {
      // 获取关卡信息
      const [level] = await sql`
        SELECT id, level_number, title 
        FROM levels 
        WHERE level_number = ${day}
      `;

      if (!level) {
        console.log(`❌ Day ${day} 关卡不存在`);
        continue;
      }

      // 获取练习题
      const exercises = await sql`
        SELECT id, title, difficulty, points
        FROM exercises 
        WHERE level_id = ${level.id}
        ORDER BY order_index ASC
      `;

      // 统计难度分布
      const difficultyCount = exercises.reduce((acc: any, ex: any) => {
        acc[ex.difficulty] = (acc[ex.difficulty] || 0) + 1;
        return acc;
      }, {});

      // 计算总积分
      const totalPoints = exercises.reduce((sum: number, ex: any) => sum + ex.points, 0);

      console.log(`📘 Day ${day}: ${level.title}`);
      console.log(`   总练习题: ${exercises.length} 个`);
      console.log(`   难度分布:`);
      Object.entries(difficultyCount).forEach(([diff, count]) => {
        console.log(`     - ${diff}: ${count} 题`);
      });
      console.log(`   总积分: ${totalPoints} 分`);
      
      // 显示前3个练习题标题
      console.log(`   前3个练习题:`);
      exercises.slice(0, 3).forEach((ex: any, idx: number) => {
        console.log(`     ${idx + 1}. ${ex.title} (${ex.difficulty}, ${ex.points}分)`);
      });
      console.log('');
    }

    // 总计统计
    const allExercises = await sql`
      SELECT e.*, l.level_number
      FROM exercises e
      JOIN levels l ON e.level_id = l.id
      WHERE l.level_number BETWEEN 1 AND 5
    `;

    const totalDifficultyCount = allExercises.reduce((acc: any, ex: any) => {
      acc[ex.difficulty] = (acc[ex.difficulty] || 0) + 1;
      return acc;
    }, {});

    const grandTotal = allExercises.reduce((sum: number, ex: any) => sum + ex.points, 0);

    console.log('📊 总体统计:');
    console.log(`   总练习题数: ${allExercises.length} 个`);
    console.log(`   难度分布:`);
    Object.entries(totalDifficultyCount).forEach(([diff, count]) => {
      const percentage = ((count as number) / allExercises.length * 100).toFixed(1);
      console.log(`     - ${diff}: ${count} 题 (${percentage}%)`);
    });
    console.log(`   总积分: ${grandTotal} 分`);
    console.log(`   平均每天: ${(allExercises.length / 5).toFixed(1)} 个练习题`);

    console.log('\n✅ 验证完成！');
  } catch (error) {
    console.error('❌ 验证失败:', error);
    throw error;
  }
}

verifyExercises().catch(console.error);

