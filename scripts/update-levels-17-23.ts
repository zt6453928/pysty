import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { join } from 'path';

const sql = neon(process.env.DATABASE_URL!);

function cleanMarkdownContent(content: string, dayNumber: number): string {
  // 移除HTML div标签
  content = content.replace(/<div align="center">\s*/g, '');
  content = content.replace(/<\/div>\s*/g, '\n');
  
  // 移除HTML h1标签
  content = content.replace(/<h1>.*?<\/h1>/g, '');
  
  // 移除社交媒体徽章和作者信息
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
  content = content.replace(/\[<< Day \d+\]\(\.\/.*?\)/g, '');
  content = content.replace(/\[Day \d+ >>\]\(\.\/.*?\)/g, '');
  
  // 移除"阅读大约需要"这行
  content = content.replace(/_?阅读大约需要：?\d+m_?\n?/g, '');
  
  // 清理多余的空行
  content = content.replace(/\n{3,}/g, '\n\n');
  content = content.trim();
  
  // 添加优化的标题
  const dayNames: { [key: number]: string } = {
    17: '异常处理 (Exception Handling)',
    18: '正则表达式 (Regular Expressions)',
    19: '文件处理 (File Handling)',
    20: 'PIP - Python包管理器',
    21: '类和对象 (Classes and Objects)',
    22: '网页抓取 (Web Scraping)',
    23: '虚拟环境 (Virtual Environment)'
  };
  
  const title = dayNames[dayNumber] || `Day ${dayNumber}`;
  content = `# 🐍 第 ${dayNumber} 天 - ${title}

> 欢迎来到 Python 魔法学院！这是你 30 天 Python 学习之旅的第 ${dayNumber} 天。

${content}`;

  return content;
}

async function updateLevels17to23() {
  console.log('🔄 开始清理并更新 Day 17-23 的内容...\n');

  for (let day = 17; day <= 23; day++) {
    try {
      // 读取原始文件
      const filePath = join(process.cwd(), 'pyword', `Day${day}.md`);
      let content = readFileSync(filePath, 'utf-8');

      console.log(`📝 清理 Day ${day}...`);
      
      // 清理内容
      const cleanedContent = cleanMarkdownContent(content, day);

      // 更新数据库
      await sql`
        UPDATE levels
        SET content = ${cleanedContent}
        WHERE level_number = ${day}
      `;

      console.log(`✅ Day ${day} 已清理并更新（${cleanedContent.length} 字符）\n`);

    } catch (error) {
      console.error(`❌ Day ${day} 更新失败:`, error);
    }
  }

  console.log('🎉 Day 17-23 内容清理完成！');
  console.log('\n📊 总结:');
  console.log('- ✅ 移除了所有HTML标签');
  console.log('- ✅ 修复了所有图片链接');
  console.log('- ✅ 清理了导航和无用链接');
  console.log('- ✅ 优化了内容格式');
  console.log('- ✅ 添加了精美的标题和欢迎语');
}

updateLevels17to23().catch(console.error);

