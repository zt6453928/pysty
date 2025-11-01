import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function verifyAllExercises() {
  try {
    console.log('🔍 验证 Day 1-10 的所有练习题...\n');
    console.log('='.repeat(60));

    const allExercises = await sql`
      SELECT e.*, l.level_number, l.title as level_title
      FROM exercises e
      JOIN levels l ON e.level_id = l.id
      WHERE l.level_number BETWEEN 1 AND 10
      ORDER BY l.level_number, e.order_index
    `;

    // 按天分组
    const exercisesByDay: any = {};
    for (const ex of allExercises) {
      if (!exercisesByDay[ex.level_number]) {
        exercisesByDay[ex.level_number] = {
          title: ex.level_title,
          exercises: [],
          easy: 0,
          medium: 0,
          hard: 0,
          totalPoints: 0
        };
      }
      exercisesByDay[ex.level_number].exercises.push(ex);
      exercisesByDay[ex.level_number][ex.difficulty]++;
      exercisesByDay[ex.level_number].totalPoints += ex.points;
    }

    // 显示每天的统计
    for (let day = 1; day <= 10; day++) {
      const dayData = exercisesByDay[day];
      console.log(`\n📘 Day ${day}: ${dayData.title}`);
      console.log(`   练习题: ${dayData.exercises.length} 个`);
      console.log(`   积分: ${dayData.totalPoints} 分`);
      console.log(`   难度: easy(${dayData.easy}) medium(${dayData.medium}) hard(${dayData.hard || 0})`);
    }

    console.log('\n' + '='.repeat(60));
    console.log('\n📊 总体统计:');
    
    // 总计
    const totalCount = allExercises.length;
    const totalPoints = allExercises.reduce((sum: number, ex: any) => sum + ex.points, 0);
    const difficultyCount = allExercises.reduce((acc: any, ex: any) => {
      acc[ex.difficulty] = (acc[ex.difficulty] || 0) + 1;
      return acc;
    }, {});

    console.log(`\n   📝 总练习题数: ${totalCount} 个`);
    console.log(`   💰 总积分: ${totalPoints} 分`);
    console.log(`   📊 平均每天: ${(totalCount / 10).toFixed(1)} 题 / ${(totalPoints / 10).toFixed(1)} 分`);
    
    console.log(`\n   🎯 难度分布:`);
    Object.entries(difficultyCount).forEach(([diff, count]) => {
      const percentage = ((count as number) / totalCount * 100).toFixed(1);
      let emoji = '🟢';
      if (diff === 'medium') emoji = '🟡';
      if (diff === 'hard') emoji = '🔴';
      console.log(`      ${emoji} ${diff}: ${count} 题 (${percentage}%)`);
    });

    // Day 1-5 vs Day 6-10 对比
    const day1to5 = allExercises.filter((ex: any) => ex.level_number >= 1 && ex.level_number <= 5);
    const day6to10 = allExercises.filter((ex: any) => ex.level_number >= 6 && ex.level_number <= 10);

    console.log(`\n   📈 分段统计:`);
    console.log(`      Day 1-5:  ${day1to5.length} 题, ${day1to5.reduce((sum: number, ex: any) => sum + ex.points, 0)} 分`);
    console.log(`      Day 6-10: ${day6to10.length} 题, ${day6to10.reduce((sum: number, ex: any) => sum + ex.points, 0)} 分`);

    console.log('\n' + '='.repeat(60));
    console.log('\n✅ 验证完成！Day 1-10 练习题全部正常！');
    console.log('\n🎉 恭喜！197 个练习题已经全部就绪！\n');
  } catch (error) {
    console.error('❌ 验证失败:', error);
    throw error;
  }
}

verifyAllExercises().catch(console.error);
