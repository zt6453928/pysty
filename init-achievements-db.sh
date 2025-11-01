#!/bin/bash

# 成就系统数据库初始化脚本
# 使用方法: ./init-achievements-db.sh

echo "🎯 开始初始化成就系统数据库..."
echo ""

# 检查 DATABASE_URL
if [ -z "$DATABASE_URL" ]; then
    echo "❌ 错误: DATABASE_URL 环境变量未设置"
    echo ""
    echo "请按以下步骤操作:"
    echo "1. 从 Neon 控制台复制你的数据库连接字符串"
    echo "2. 运行: export DATABASE_URL='your-neon-database-url'"
    echo "3. 重新运行此脚本: ./init-achievements-db.sh"
    exit 1
fi

echo "✅ DATABASE_URL 已设置"
echo "📊 数据库: ${DATABASE_URL:0:50}..."
echo ""

# 检查 Node.js 和依赖
if ! command -v node &> /dev/null; then
    echo "❌ 错误: Node.js 未安装"
    exit 1
fi

echo "📦 检查依赖..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules 不存在，正在安装依赖..."
    npm install
fi

echo ""
echo "🚀 运行初始化脚本..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 运行初始化脚本
npx tsx scripts/init-achievements.ts

EXIT_CODE=$?

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $EXIT_CODE -eq 0 ]; then
    echo "🎉 成就系统初始化成功！"
    echo ""
    echo "📋 接下来的步骤:"
    echo "1. 启动应用: npm run dev"
    echo "2. 访问成就页面: http://localhost:3000/achievements"
    echo "3. 开始学习并收集成就！"
    echo ""
    echo "📚 查看文档:"
    echo "- 使用说明: cat 成就系统使用说明.md"
    echo "- 快速启动: cat ACHIEVEMENT_QUICKSTART.md"
else
    echo "❌ 初始化失败，退出码: $EXIT_CODE"
    echo ""
    echo "💡 故障排除:"
    echo "1. 检查 DATABASE_URL 是否正确"
    echo "2. 确认数据库连接正常"
    echo "3. 查看上方错误信息"
    echo "4. 如需帮助，查看文档或提交 Issue"
fi

exit $EXIT_CODE

