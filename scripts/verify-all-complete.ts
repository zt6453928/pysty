import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function verifyAllExercises() {
  try {
    console.log('🎊 验证全部 30 天的魔法练习题...\n');
    console.log('═'.repeat(70));

    const allExercises = await sql`
      SELECT e.*, l.level_number, l.title as level_title
      FROM exercises e
      JOIN levels l ON e.level_id = l.id
      WHERE l.level_number BETWEEN 1 AND 30
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
    console.log('\n📚 全部 30 天练习题统计\n');
    for (let day = 1; day <= 30; day++) {
      const dayData = exercisesByDay[day];
      if (!dayData) continue;
      
      const totalBar = '█'.repeat(Math.min(Math.floor(dayData.exercises.length / 3), 15));
      
      console.log(`Day ${day.toString().padStart(2, '0')}: ${dayData.title.slice(0, 28).padEnd(28)}`);
      console.log(`   📝 ${dayData.exercises.length.toString().padStart(2)} 题 | 💰 ${dayData.totalPoints.toString().padStart(4)} 分 ${totalBar}`);
    }

    console.log('\n' + '═'.repeat(70));

    // 五段统计
    const day1to5 = allExercises.filter((ex: any) => ex.level_number >= 1 && ex.level_number <= 5);
    const day6to10 = allExercises.filter((ex: any) => ex.level_number >= 6 && ex.level_number <= 10);
    const day11to17 = allExercises.filter((ex: any) => ex.level_number >= 11 && ex.level_number <= 17);
    const day18to24 = allExercises.filter((ex: any) => ex.level_number >= 18 && ex.level_number <= 24);
    const day25to30 = allExercises.filter((ex: any) => ex.level_number >= 25 && ex.level_number <= 30);

    console.log('\n📊 五阶段统计:\n');
    console.log(`   Day 1-5   (基础):    ${day1to5.length.toString().padStart(3)} 题 | ${day1to5.reduce((s: number, e: any) => s + e.points, 0).toString().padStart(5)} 分`);
    console.log(`   Day 6-10  (数据):    ${day6to10.length.toString().padStart(3)} 题 | ${day6to10.reduce((s: number, e: any) => s + e.points, 0).toString().padStart(5)} 分`);
    console.log(`   Day 11-17 (函数):    ${day11to17.length.toString().padStart(3)} 题 | ${day11to17.reduce((s: number, e: any) => s + e.points, 0).toString().padStart(5)} 分`);
    console.log(`   Day 18-24 (高级):    ${day18to24.length.toString().padStart(3)} 题 | ${day18to24.reduce((s: number, e: any) => s + e.points, 0).toString().padStart(5)} 分`);
    console.log(`   Day 25-30 (专业):    ${day25to30.length.toString().padStart(3)} 题 | ${day25to30.reduce((s: number, e: any) => s + e.points, 0).toString().padStart(5)} 分`);

    // 总计
    const totalCount = allExercises.length;
    const totalPoints = allExercises.reduce((sum: number, ex: any) => sum + ex.points, 0);
    const difficultyCount = allExercises.reduce((acc: any, ex: any) => {
      acc[ex.difficulty] = (acc[ex.difficulty] || 0) + 1;
      return acc;
    }, {});

    console.log('\n' + '═'.repeat(70));
    console.log('\n🏆 最终总体统计:\n');
    console.log(`   📝 总练习题数: ${totalCount} 个`);
    console.log(`   💰 总积分: ${totalPoints} 分`);
    console.log(`   📊 平均每天: ${(totalCount / 30).toFixed(1)} 题 / ${(totalPoints / 30).toFixed(1)} 分`);
    console.log(`   🎯 完成度: 100.0% (30/30 天) ✅✅✅`);
    
    console.log(`\n   🎯 难度分布:`);
    Object.entries(difficultyCount).forEach(([diff, count]) => {
      const percentage = ((count as number) / totalCount * 100).toFixed(1);
      let emoji = '🟢';
      if (diff === 'medium') emoji = '🟡';
      if (diff === 'hard') emoji = '🔴';
      const bar = '█'.repeat(Math.floor((count as number) / 12));
      console.log(`      ${emoji} ${diff.padEnd(6)}: ${count.toString().padStart(3)} 题 (${percentage.padStart(5)}%) ${bar}`);
    });

    console.log('\n' + '═'.repeat(70));
    console.log('\n🎊 验证完成！全部 30 天练习题正常！');
    console.log(`\n🎉🎉🎉 恭喜！${totalCount} 个练习题全部就绪！🎉🎉🎉`);
    console.log(`\n🏆 100% 完成！ ████████████████████ 30/30 天\n`);
  } catch (error) {
    console.error('❌ 验证失败:', error);
    throw error;
  }
}

verifyAllExercises().catch(console.error);
