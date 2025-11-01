#!/bin/bash

echo "🎯 开始初始化成就系统数据库..."
echo ""

# 检查 DATABASE_URL
if [ -z "$DATABASE_URL" ]; then
    echo "❌ 错误: DATABASE_URL 环境变量未设置"
    echo ""
    echo "请先设置 DATABASE_URL:"
    echo "export DATABASE_URL='your-neon-database-url'"
    exit 1
fi

echo "✅ DATABASE_URL 已设置"
echo ""

# 运行初始化脚本
echo "📝 正在创建成就系统表和数据..."
npx tsx scripts/init-achievements.ts

echo ""
echo "✨ 完成！你可以现在访问 http://localhost:3000/achievements 查看成就系统"
