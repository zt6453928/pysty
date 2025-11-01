# 🚀 快速启动指南

## 5分钟启动Python魔法学院

### 步骤 1: 克隆项目（如果还没有）

\`\`\`bash
cd /Users/enithz/Desktop/pysty
\`\`\`

### 步骤 2: 安装依赖

\`\`\`bash
npm install
\`\`\`

### 步骤 3: 配置数据库

数据库已经配置好了！URL已在代码中。

如果你想使用自己的数据库，创建 \`.env.local\` 文件：

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

然后编辑 \`.env.local\`，填入你的数据库URL。

### 步骤 4: 初始化关卡数据（如果还没有）

\`\`\`bash
export DATABASE_URL="postgresql://neondb_owner:npg_zXcVnS18GyKr@ep-wispy-morning-aheax5ya-pooler.c-3.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require"

npm run init-db
\`\`\`

你应该看到：
\`\`\`
🎉 所有关卡数据初始化完成！
总共创建了 30 个关卡
\`\`\`

### 步骤 5: 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

### 步骤 6: 打开浏览器

访问: **http://localhost:3000**

## 🎮 开始学习

1. **首页** - 了解Python魔法学院
2. **点击"开始魔法之旅"** - 进入学习中心
3. **选择关卡** - 从第01天开始
4. **学习内容** - 阅读每天的学习材料
5. **完成练习** - 在代码编辑器中编写代码
6. **运行代码** - 点击"运行代码"按钮测试
7. **获得奖励** - 完成练习获得魔法点数
8. **继续前进** - 解锁下一关卡

## 🎯 主要功能

### 学习中心 (/dashboard)
- 查看所有30个关卡
- 追踪学习进度
- 查看魔法点数和成就

### 关卡页面 (/levels/[1-30])
- 学习当天的Python知识
- 完成练习题
- 运行和测试代码
- 获得即时反馈

### 首页 (/)
- 项目介绍
- 学习路径预览
- 功能特性展示

## 📊 当前状态

✅ **已完成**
- 30天完整课程内容
- 魔法学院主题UI
- 在线代码编辑器
- 关卡系统
- 进度追踪
- 奖励系统

⚠️ **注意事项**
- 代码执行是模拟的（实际项目需要Python运行环境）
- 当前使用演示用户（demo-user）
- 认证系统可选配置

## 🛠️ 常用命令

\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 初始化数据库
npm run init-db

# 构建生产版本
npm run build

# 启动生产服务器
npm start
\`\`\`

## 📱 访问地址

- **开发环境**: http://localhost:3000
- **首页**: http://localhost:3000
- **学习中心**: http://localhost:3000/dashboard
- **第一关**: http://localhost:3000/levels/1

## 🎨 项目特色

- 🎮 游戏化学习体验
- 💜 精美的魔法主题UI
- 💻 实时代码编辑器
- 📈 进度追踪
- 🏆 奖励系统
- 📚 30天系统课程

## 🐛 遇到问题？

### 端口被占用
\`\`\`bash
# 使用其他端口
npm run dev -- -p 3001
\`\`\`

### 数据库连接失败
- 检查 DATABASE_URL 是否正确
- 确保网络连接正常
- 验证Neon数据库是否可访问

### 关卡数据未显示
\`\`\`bash
# 重新初始化数据
export DATABASE_URL="your-database-url"
npm run init-db
\`\`\`

### 其他问题
查看以下文档：
- [README.md](README.md) - 完整文档
- [SETUP.md](SETUP.md) - 详细设置指南
- [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) - 项目概览

## 💡 提示

1. **首次访问**建议从第01天开始，循序渐进
2. **认真阅读**每天的学习内容，理解概念
3. **动手实践**在代码编辑器中编写代码
4. **多次尝试**不要害怕出错，编程需要实践
5. **持之以恒**坚持30天，你会看到进步

## 🎓 学习建议

- 每天花30-60分钟学习
- 完成所有练习题
- 尝试修改和扩展代码
- 记录学习笔记
- 遇到问题主动搜索和研究

## 🌟 开始你的Python魔法之旅吧！

准备好了吗？让我们开始学习Python魔法！

\`\`\`bash
npm run dev
\`\`\`

**祝你学习愉快！** 🎉✨🐍

---

*Python魔法学院 - 让学习变得有趣*

