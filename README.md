# 🧙‍♂️ Python魔法学院

一个游戏化的Python学习平台，通过30天的关卡挑战，让学习Python变得有趣而有效！

## ✨ 特性

- 🎮 **游戏化学习**: 30个关卡，完成挑战获得魔法点数
- 💻 **在线代码编辑器**: 内置Monaco编辑器，直接在浏览器中编写和运行Python代码
- 🐍 **真实代码执行**: 集成 Piston API，真实的 Python 3.10 环境执行代码
- 🔐 **用户认证系统**: Stack Auth 集成，独立的学习进度追踪 ⭐ NEW!
- 👤 **个人学习中心**: 每个用户拥有独立的进度和成就系统 ⭐ NEW!
- 🏆 **成就系统**: 25个成就，4种稀有度，自动解锁机制 ⭐ NEW!
- 🔒 **安全沙箱**: 沙箱隔离执行，保证安全可靠
- 🎨 **魔法学院主题**: 精美的紫色魔法主题UI设计
- 📊 **进度追踪**: 实时追踪学习进度和成就
- 🎁 **奖励系统**: 完成关卡获得魔法点数和成就徽章
- 📚 **完整内容**: 基于30 Days of Python项目的中文学习内容
- 🧪 **319个练习题**: 完整的练习题体系，从基础到高级

## 🚀 快速开始

### 前置要求

- Node.js 18+
- npm 或 yarn
- Neon数据库账号

### 安装

1. 克隆仓库
\`\`\`bash
git clone <your-repo-url>
cd pysty
\`\`\`

2. 安装依赖
\`\`\`bash
npm install
\`\`\`

3. 配置环境变量

创建 \`.env.local\` 文件：
\`\`\`env
# 数据库连接
DATABASE_URL="your-neon-database-url"

# Stack Auth 认证配置（可选）
NEXT_PUBLIC_STACK_PROJECT_ID="your-stack-project-id"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your-stack-client-key"
STACK_SECRET_SERVER_KEY="your-stack-secret-key"
\`\`\`

> 💡 **提示**: 不配置 Stack Auth 环境变量也可以使用应用，将自动启用 Demo 模式

4. 初始化数据库

数据库表已经自动创建。运行以下命令初始化30天的关卡数据：
\`\`\`bash
export DATABASE_URL="your-database-url"
npx tsx scripts/init-levels.ts
\`\`\`

5. 启动开发服务器
\`\`\`bash
npm run dev
\`\`\`

访问 [http://localhost:3000](http://localhost:3000) 开始你的Python魔法之旅！

## 📖 项目结构

\`\`\`
pysty/
├── app/                      # Next.js App Router
│   ├── api/                  # API路由
│   │   ├── exercises/        # 练习题相关API
│   │   ├── levels/           # 关卡相关API
│   │   └── progress/         # 进度相关API
│   ├── dashboard/            # 学习中心页面
│   ├── levels/[id]/          # 关卡详情页面
│   ├── layout.tsx            # 全局布局
│   ├── page.tsx              # 首页
│   └── globals.css           # 全局样式
├── components/               # React组件
│   ├── CodeEditor.tsx        # 代码编辑器组件
│   ├── LevelCard.tsx         # 关卡卡片组件
│   ├── MagicCard.tsx         # 魔法卡片组件
│   └── ProgressHeader.tsx    # 进度头部组件
├── lib/                      # 工具函数和配置
│   ├── actions/              # Server Actions
│   └── db.ts                 # 数据库配置
├── scripts/                  # 脚本文件
│   └── init-levels.ts        # 初始化关卡数据脚本
└── public/                   # 静态资源
\`\`\`

## 🐍 代码执行环境 ⭐ NEW!

### 真实 Python 代码执行
Python 魔法学院现已集成**真实的 Python 3.10 代码执行环境**！

#### 功能特点
- ✅ **真实执行**: 使用 Piston API 在沙箱中执行真实 Python 代码
- ⚡ **即时反馈**: 1-2秒内得到执行结果
- 🔒 **安全可靠**: 沙箱隔离，无法访问服务器资源
- 💰 **积分奖励**: 代码正确自动获得魔法点数
- 🎯 **准确检测**: 语法错误、运行时错误实时捕获

#### 使用方法
1. 进入任意练习题
2. 在代码编辑器中编写 Python 代码
3. 点击"运行代码"按钮
4. 查看执行结果和获得积分

#### 技术详情
- **执行引擎**: [Piston API](https://github.com/engineer-man/piston)
- **Python 版本**: 3.10.0
- **执行超时**: 3秒
- **安全级别**: ⭐⭐⭐⭐⭐

详细文档：[CODE_EXECUTION.md](./docs/CODE_EXECUTION.md)

---

## 🎓 学习内容

30天的学习内容涵盖：

**第1周**: Python基础
- 变量与数据类型
- 运算符
- 字符串操作

**第2周**: 数据结构
- 列表、元组、集合
- 字典
- 条件语句和循环

**第3周**: 进阶概念
- 函数和模块
- 列表推导式
- 高阶函数
- 错误处理

**第4周**: 高级主题
- 面向对象编程
- 文件操作
- 正则表达式
- Web开发基础

## 🛠️ 技术栈

- **前端**: Next.js 16, React 19, TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **编辑器**: Monaco Editor
- **数据库**: Neon (PostgreSQL)
- **代码执行**: Piston API (Python 3.10) ⭐ NEW!
- **图标**: Lucide React

## 🧪 练习题统计 ⭐ NEW!

Python 魔法学院现拥有**完整的练习题体系**：

- 📝 **总练习题**: 319 个
- 💰 **总积分**: 5,105 分
- 🎓 **30 天**完整学习路径
- 🎯 **难度分布**: 
  - 🟢 简单: 191 题 (59.9%)
  - 🟡 中等: 119 题 (37.3%)
  - 🔴 困难: 9 题 (2.8%)

**分阶段统计**:
- Day 1-5 (基础): 132 题，1,905 分
- Day 6-10 (数据结构): 65 题，1,035 分
- Day 11-17 (函数编程): 58 题，980 分
- Day 18-24 (高级应用): 36 题，670 分
- Day 25-30 (专业技能): 28 题，515 分

查看详情：[QUICK_SUMMARY.md](./QUICK_SUMMARY.md) | [FINAL_30_DAYS_COMPLETE.md](./FINAL_30_DAYS_COMPLETE.md)

## 🎨 主题特色

- 紫色和粉色渐变魔法主题
- 响应式设计，适配各种设备
- 流畅的动画效果
- 魔法粒子背景
- 发光效果和悬停动画

## 🔐 用户认证系统

Python 魔法学院集成了强大的用户认证系统！

### 功能特性

- **双模式支持**
  - 🎮 **Demo 模式**: 无需登录即可体验所有功能
  - 👤 **认证模式**: 登录后拥有独立的学习进度

- **认证功能**
  - ✅ 用户注册和登录
  - ✅ 安全的密码存储（bcrypt 加密）
  - ✅ JWT Token 认证
  - ✅ 会话管理
  - ✅ 密码重置

- **用户数据**
  - ✅ 独立的学习进度跟踪
  - ✅ 个人练习完成记录
  - ✅ 魔法点数累积
  - ✅ 跨设备数据同步

### 使用方法

1. **访问应用**
   ```bash
   npm run dev
   # 访问 http://localhost:3000
   ```

2. **注册账号**
   - 点击右上角"登录"按钮
   - 选择"注册"
   - 填写邮箱和密码

3. **开始学习**
   - 登录后自动跳转到学习中心
   - 你的学习进度会自动保存

### 技术架构

- **认证提供商**: [Stack Auth](https://stack-auth.com/)
- **数据库**: Neon PostgreSQL + Neon Auth
- **会话存储**: Next.js Cookie (httpOnly)
- **Token**: JWT

### 配置说明

详细配置指南：
- 📖 [认证模块使用指南](./认证模块使用指南.md)
- 📖 [认证配置摘要](./认证配置摘要.md)
- 📖 [技术文档](./AUTH_SETUP_COMPLETE.md)

## 🏆 成就系统 ⭐ NEW!

Python 魔法学院现已集成**完整的成就系统**！

### 功能特性

- **25个精心设计的成就**
  - 📚 学习进度成就 (5个)
  - 💎 魔法点数成就 (5个)
  - 📝 练习题成就 (5个)
  - 🔥 连续学习成就 (4个)
  - ⭐ 特殊成就 (6个)

- **4种稀有度等级**
  - 🔹 普通 (Common) - 8个
  - 🔷 稀有 (Rare) - 7个
  - 💜 史诗 (Epic) - 6个
  - ⭐ 传奇 (Legendary) - 4个

- **自动解锁机制**
  - ✅ 完成练习题自动检查
  - ✅ 完成关卡自动检查
  - ✅ 连续学习自动统计
  - ✅ 特殊条件自动触发

- **精美的UI界面**
  - 🎨 稀有度渐变色系统
  - ✨ 成就解锁动画通知
  - 📊 实时统计看板
  - 🏷️ 分类筛选功能

### 快速开始

```bash
# 初始化成就系统
export DATABASE_URL="your-database-url"
npm run init-achievements

# 访问成就页面
npm run dev
# http://localhost:3000/achievements
```

### 成就示例

| 成就 | 名称 | 条件 | 奖励 | 稀有度 |
|------|------|------|------|--------|
| 🎓 | 第一步 | 完成第1个关卡 | 50点 | 普通 |
| 👑 | Python大师 | 完成全部30个关卡 | 1000点 | 传奇 |
| 🎖️ | 完美主义者 | 完成全部319个练习 | 1500点 | 传奇 |
| 🏅 | 三十天大师 | 连续学习30天 | 1000点 | 传奇 |

### 详细文档

- 📖 [成就系统完整指南](./ACHIEVEMENT_SYSTEM_GUIDE.md)
- 🚀 [快速启动指南](./ACHIEVEMENT_QUICKSTART.md)
- 📊 [实现完成报告](./ACHIEVEMENT_SYSTEM_COMPLETE.md)

## 📝 功能清单

- [x] ✅ 集成真实的Python代码执行环境（Piston API）
- [x] ✅ 完整的319个练习题体系
- [x] ✅ 30天学习路径
- [x] ✅ 代码编辑器和语法高亮
- [x] ✅ 进度追踪系统
- [x] ✅ 用户认证系统（Stack Auth + Neon Auth）
- [x] ✅ 独立的用户学习进度
- [x] ✅ Demo 模式支持（无需登录即可使用）
- [x] ✅ 成就系统（25个成就，4种稀有度）⭐ NEW!
- [ ] ⏳ 添加排行榜功能
- [ ] ⏳ 支持代码分享
- [ ] ⏳ 添加社区讨论功能

## 🚀 部署到生产环境

### 推荐平台：Vercel（免费）⭐

Python魔法学院完美支持一键部署到Vercel！

#### 快速部署（10分钟）

```bash
# 1. 运行部署检查
./deploy-check.sh

# 2. 推送到 GitHub
git add .
git commit -m "准备部署"
git push origin main

# 3. 访问 Vercel
https://vercel.com

# 4. 导入项目
选择你的 GitHub 仓库

# 5. 配置环境变量
DATABASE_URL=你的Neon数据库连接

# 6. 部署！
点击 Deploy → 等待2-3分钟 → 完成！🎉
```

#### 详细指南

- 📖 [免费部署平台推荐](./免费部署平台推荐.md)
- 🚀 [Vercel部署指南](./Vercel部署指南.md)
- ✅ [快速部署清单](./快速部署清单.md)

#### 免费额度

- ✅ 100 GB 带宽/月
- ✅ 无限请求
- ✅ 全球CDN
- ✅ 自动HTTPS
- ✅ 完全够用！

---

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可

基于 [30 Days of Python](https://github.com/Asabeneh/30-Days-Of-Python) 项目创建。

## 🙏 致谢

- [30 Days of Python](https://github.com/Asabeneh/30-Days-Of-Python) by Asabeneh
- 所有为Python社区做出贡献的开发者

---

用 ❤️ 和魔法创造 | © 2024 Python魔法学院
