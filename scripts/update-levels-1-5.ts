import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { join } from 'path';

const sql = neon(process.env.DATABASE_URL!);

async function updateLevels() {
  console.log('🔄 正在更新 Day 1-5 的完整内容...\n');

  for (let day = 1; day <= 5; day++) {
    try {
      // 读取原文档内容
      const filePath = join(process.cwd(), 'pyword', `Day${day}.md`);
      const content = readFileSync(filePath, 'utf-8');

      // 更新数据库
      await sql`
        UPDATE levels
        SET content = ${content}
        WHERE level_number = ${day}
      `;

      console.log(`✅ Day ${day} 内容已更新`);
    } catch (error) {
      console.error(`❌ Day ${day} 更新失败:`, error);
    }
  }

  console.log('\n🎉 所有内容更新完成！');
}

updateLevels().catch(console.error);

