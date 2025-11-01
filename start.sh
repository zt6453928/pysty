#!/bin/bash

echo "🧙‍♂️ 启动Python魔法学院..."
echo ""

# 检查.env.local文件
if [ ! -f .env.local ]; then
    echo "⚠️  未找到.env.local文件"
    echo "📝 正在创建.env.local文件..."
    cat > .env.local << 'EOF'
DATABASE_URL="postgresql://neondb_owner:npg_zXcVnS18GyKr@ep-wispy-morning-aheax5ya-pooler.c-3.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require"
EOF
    echo "✅ .env.local文件已创建"
    echo ""
fi

# 检查node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
    echo ""
fi

# 停止已有的进程
echo "🛑 停止旧的服务器进程..."
pkill -f "next dev" 2>/dev/null
sleep 2

# 启动开发服务器
echo "🚀 启动开发服务器..."
echo ""
echo "📍 访问地址: http://localhost:3000"
echo "📍 学习中心: http://localhost:3000/dashboard"
echo ""
echo "按 Ctrl+C 停止服务器"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

npm run dev

