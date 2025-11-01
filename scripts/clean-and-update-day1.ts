import { neon } from '@neondatabase/serverless';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const sql = neon(process.env.DATABASE_URL!);

async function cleanAndUpdateDay1() {
  console.log('🔄 清理并更新 Day 1 内容...\n');

  try {
    // 读取原始文件
    const filePath = join(process.cwd(), 'pyword', 'Day1.md');
    let content = readFileSync(filePath, 'utf-8');

    // 清理内容
    console.log('📝 清理 HTML 标签和格式...');
    
    // 移除开头的目录表格（因为它包含相对链接，不适合显示）
    content = content.replace(/# 🐍 30 天 Python\n\n\|[\s\S]*?\n\n🧡🧡🧡 快乐编码 🧡🧡🧡[\s\S]*?<\/div>\n\n/m, '');
    
    // 移除HTML div标签但保留内容
    content = content.replace(/<div align="center">\s*/g, '');
    content = content.replace(/<\/div>\s*/g, '\n');
    
    // 移除HTML标签（img, a等）但保留链接文字
    content = content.replace(/<a class="header-badge"[^>]*>[\s\S]*?<\/a>/g, '');
    content = content.replace(/<sub>[\s\S]*?<\/sub>/g, '');
    content = content.replace(/<small>[\s\S]*?<\/small>/g, '');
    
    // 修复图片链接 - 改为GitHub raw链接
    const baseImageUrl = 'https://raw.githubusercontent.com/Asabeneh/30-Days-Of-Python/master';
    
    // 修复相对路径的图片
    content = content.replace(/!\[(.*?)\]\(\.\.\/(.*?)\)/g, (match, alt, path) => {
      return `![${alt}](${baseImageUrl}/${path})`;
    });
    
    content = content.replace(/!\[(.*?)\]\(\.\/(.*?)\)/g, (match, alt, path) => {
      return `![${alt}](${baseImageUrl}/Chinese/${path})`;
    });
    
    // 移除PayPal链接等
    content = content.replace(/<div>[\s\S]*?paypal[\s\S]*?<\/div>/gi, '');
    
    // 移除导航链接（因为是相对链接）
    content = content.replace(/\[第 \d+ 天 >>\]\(\.\/.*?\)/g, '');
    content = content.replace(/\[<< 第 ?\d+ ?天\]\(\.\/.*?\)/g, '');
    content = content.replace(/\[第 ?\d+ ?天\]\(\.\/.*?\)/g, '');
    
    // 清理多余的空行
    content = content.replace(/\n{3,}/g, '\n\n');
    
    // 添加标题
    content = `# 🐍 第 1 天 - Python 入门

> 欢迎来到 Python 魔法学院！这是你 30 天 Python 学习之旅的第一天。

${content}`;

    // 保存清理后的文件（可选）
    // writeFileSync(join(process.cwd(), 'pyword', 'Day1-cleaned.md'), content);

    // 更新数据库
    console.log('💾 更新数据库...');
    await sql`
      UPDATE levels
      SET content = ${content},
          description = '欢迎来到Python魔法学院！学习Python基础、环境设置、数据类型等核心概念。'
      WHERE level_number = 1
    `;

    console.log('✅ Day 1 内容已清理并更新！');
    console.log(`📊 内容长度: ${content.length} 字符`);

  } catch (error) {
    console.error('❌ 更新失败:', error);
    throw error;
  }
}

cleanAndUpdateDay1().catch(console.error);

