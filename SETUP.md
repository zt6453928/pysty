# Python魔法学院 - 设置指南

## 快速开始

### 1. 配置环境变量

复制 `.env.local.example` 为 `.env.local`：
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

然后编辑 `.env.local` 文件，填入你的Neon数据库连接字符串：
\`\`\`env
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
\`\`\`

### 2. 初始化数据库

数据库表结构已经在首次连接时自动创建。现在运行脚本来初始化30天的学习内容：

\`\`\`bash
# 方式1：使用npm脚本
export DATABASE_URL="your-database-url"
npm run init-db

# 方式2：直接运行
export DATABASE_URL="your-database-url"
npx tsx scripts/init-levels.ts
\`\`\`

看到以下输出表示成功：
\`\`\`
🎉 所有关卡数据初始化完成！
总共创建了 30 个关卡
\`\`\`

### 3. 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

访问 http://localhost:3000 即可开始使用！

## 数据库结构

项目使用以下数据表：

1. **levels** - 存储30个学习关卡
2. **exercises** - 存储每个关卡的练习题
3. **user_progress** - 跟踪用户的关卡完成进度
4. **user_rewards** - 存储用户的魔法点数和成就
5. **user_exercise_submissions** - 保存用户的代码提交记录

## 功能说明

### 已实现功能 ✅

- ✅ 30天完整的Python学习内容（基于30 Days of Python项目）
- ✅ 魔法学院主题的精美UI设计
- ✅ Monaco代码编辑器集成
- ✅ 关卡系统和进度追踪
- ✅ 魔法点数奖励系统
- ✅ 响应式设计
- ✅ 关卡锁定/解锁机制

### 待完善功能 🚧

- 🚧系统
- 🚧 学习统计图表
- 🚧 代码分享功能 真实的Python代码执行（需要安全的后端执行环境）
- 🚧 用户认证系统（Stack Auth已准备，需配置）
- 🚧 成就徽章

## 开发说明

### 添加新关卡

编辑 `scripts/init-levels.ts` 文件，添加新的关卡数据，然后重新运行初始化脚本。

### 修改主题

所有主题颜色和样式都在 `app/globals.css` 中定义，你可以自定义：
- 主色调：\`--primary\`
- 魔法光效：\`--magic-glow\`
- 背景渐变
- 动画效果

### API路由

- \`/api/levels\` - 获取所有关卡
- \`/api/levels/[id]\` - 获取特定关卡详情
- \`/api/exercises/run\` - 运行代码（当前为模拟）
- \`/api/progress\` - 用户进度管理

## 部署

### Vercel部署（推荐）

1. 将项目推送到GitHub
2. 在Vercel导入项目
3. 添加环境变量 \`DATABASE_URL\`
4. 部署完成后，需要手动运行一次初始化脚本来创建关卡数据

\`\`\`bash
# 在本地运行，指向生产数据库
export DATABASE_URL="production-database-url"
npm run init-db
\`\`\`

## 故障排除

### 问题：关卡数据没有显示

**解决方案**：确保已经运行了数据库初始化脚本
\`\`\`bash
export DATABASE_URL="your-database-url"
npm run init-db
\`\`\`

### 问题：代码执行没有实际运行

**说明**：当前版本的代码执行是模拟的，实际项目中需要：
1. 使用Docker容器隔离执行Python代码
2. 或使用云函数（如AWS Lambda、Cloudflare Workers等）
3. 实现安全的代码执行沙箱

### 问题：Monaco编辑器不显示

**解决方案**：Monaco编辑器需要客户端JavaScript，确保：
1. 组件使用了 \`'use client'\` 指令
2. 浏览器JavaScript已启用

## 技术支持

如有问题，请：
1. 查看控制台错误信息
2. 检查数据库连接是否正常
3. 确认所有环境变量已正确配置

## 许可

基于 30 Days of Python 项目创建，感谢原作者 Asabeneh 的贡献。

