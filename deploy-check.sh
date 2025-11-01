#!/bin/bash

# 部署前检查脚本
# 使用方法: ./deploy-check.sh

echo "🔍 开始部署前检查..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# 检查1: Node.js版本
echo "1️⃣ 检查 Node.js 版本..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 18 ]; then
    echo -e "${GREEN}✓${NC} Node.js 版本: $(node -v) (>= 18)"
else
    echo -e "${RED}✗${NC} Node.js 版本过低: $(node -v)"
    echo "   需要 Node.js 18+"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 检查2: 依赖安装
echo "2️⃣ 检查依赖..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules 存在"
else
    echo -e "${YELLOW}⚠${NC} node_modules 不存在，正在安装..."
    npm install
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# 检查3: 构建测试
echo "3️⃣ 测试构建..."
if npm run build > /tmp/build.log 2>&1; then
    echo -e "${GREEN}✓${NC} 构建成功"
    rm -rf .next  # 清理本地构建
else
    echo -e "${RED}✗${NC} 构建失败！查看错误:"
    tail -n 20 /tmp/build.log
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 检查4: 环境变量
echo "4️⃣ 检查环境变量..."
if [ -f ".env.local" ]; then
    echo -e "${GREEN}✓${NC} .env.local 存在"
    
    if grep -q "DATABASE_URL" .env.local; then
        echo -e "${GREEN}✓${NC} DATABASE_URL 已配置"
    else
        echo -e "${YELLOW}⚠${NC} DATABASE_URL 未配置"
        WARNINGS=$((WARNINGS + 1))
    fi
    
    if grep -q "NEXT_PUBLIC_STACK" .env.local; then
        echo -e "${GREEN}✓${NC} Stack Auth 已配置"
    else
        echo -e "${YELLOW}⚠${NC} Stack Auth 未配置（可选）"
    fi
else
    echo -e "${YELLOW}⚠${NC} .env.local 不存在"
    echo "   这是正常的，部署时在Vercel配置环境变量"
fi
echo ""

# 检查5: .gitignore
echo "5️⃣ 检查 .gitignore..."
if grep -q ".env" .gitignore; then
    echo -e "${GREEN}✓${NC} .env 已忽略（安全）"
else
    echo -e "${RED}✗${NC} .env 未添加到 .gitignore"
    ERRORS=$((ERRORS + 1))
fi

if grep -q "node_modules" .gitignore; then
    echo -e "${GREEN}✓${NC} node_modules 已忽略"
else
    echo -e "${RED}✗${NC} node_modules 未忽略"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 检查6: Git状态
echo "6️⃣ 检查 Git 状态..."
if git rev-parse --git-dir > /dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Git 仓库已初始化"
    
    if git remote | grep -q "origin"; then
        echo -e "${GREEN}✓${NC} 远程仓库已配置"
        echo "   远程: $(git remote get-url origin)"
    else
        echo -e "${YELLOW}⚠${NC} 未配置远程仓库"
        echo "   需要先在GitHub创建仓库并添加remote"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "${RED}✗${NC} 未初始化 Git"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 检查7: 必要文件
echo "7️⃣ 检查必要文件..."
FILES=("package.json" "next.config.ts" "tsconfig.json" "app/layout.tsx" "app/page.tsx")
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file 缺失"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# 总结
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ 检查通过！准备部署${NC}"
    echo ""
    echo "📋 下一步:"
    echo "1. 推送代码到 GitHub: git push origin main"
    echo "2. 访问 Vercel: https://vercel.com"
    echo "3. 导入项目并配置环境变量"
    echo "4. 点击 Deploy"
    echo ""
    echo "🎉 预计10分钟后你的网站就上线了！"
else
    echo -e "${RED}❌ 发现 $ERRORS 个错误，请修复后再部署${NC}"
fi

if [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}⚠️  有 $WARNINGS 个警告（可忽略）${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

exit $ERRORS

