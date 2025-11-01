# 🔧 环境变量配置指南

## 📋 必需的环境变量

### 数据库配置
```env
DATABASE_URL="postgresql://neondb_owner:npg_xxxxx@ep-xxxxx.neon.tech/neondb?sslmode=require"
```

**获取方式**:
1. 访问 [Neon](https://neon.tech/)
2. 创建项目
3. 复制连接字符串

---

## 🔐 可选的环境变量（Stack Auth）

### Stack Auth 配置
```env
NEXT_PUBLIC_STACK_PROJECT_ID="proj_xxxxxxxxxxxxx"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="pk_xxxxxxxxxxxxx"
STACK_SECRET_SERVER_KEY="sk_xxxxxxxxxxxxx"
```

**获取方式**:
1. 访问 [Stack Auth](https://stack-auth.com/)
2. 注册账号
3. 创建新项目
4. 在项目设置中获取凭证

---

## 📝 创建 .env.local 文件

### 步骤

1. **复制示例**
```bash
# 在项目根目录创建 .env.local 文件
touch .env.local
```

2. **添加必需配置**
```env
# .env.local

# 必需：数据库
DATABASE_URL="your-neon-database-url"
```

3. **可选：添加认证**
```env
# 可选：Stack Auth（启用用户认证）
NEXT_PUBLIC_STACK_PROJECT_ID="your-project-id"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your-client-key"
STACK_SECRET_SERVER_KEY="your-secret-key"
```

---

## 🎯 配置模式

### 模式 1: 最小配置（仅数据库）

**.env.local**:
```env
DATABASE_URL="postgresql://..."
```

**效果**:
- ✅ 应用正常运行
- ✅ 数据库功能正常
- ✅ 使用 demo-user 模式
- ⚠️ 所有人共享进度

**适用场景**:
- 个人学习
- 本地演示
- 快速测试

---

### 模式 2: 完整配置（数据库 + 认证）

**.env.local**:
```env
# 数据库
DATABASE_URL="postgresql://..."

# Stack Auth
NEXT_PUBLIC_STACK_PROJECT_ID="proj_..."
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="pk_..."
STACK_SECRET_SERVER_KEY="sk_..."
```

**效果**:
- ✅ 应用正常运行
- ✅ 数据库功能正常
- ✅ 用户认证系统启用
- ✅ 每个用户独立进度

**适用场景**:
- 生产环境
- 多用户使用
- 在线部署

---

## 🔒 安全提示

### 重要！
- ⚠️ **永远不要**将 `.env.local` 提交到 Git
- ⚠️ **永远不要**公开你的密钥
- ✅ `.env.local` 已在 `.gitignore` 中
- ✅ 使用 `.env.local.example` 作为模板

### 最佳实践
```bash
# .gitignore（确保包含）
.env.local
.env*.local
```

---

## 🧪 验证配置

### 检查数据库连接
```bash
# 运行初始化脚本
export $(cat .env.local | xargs) && npx tsx scripts/init-levels.ts
```

成功输出：
```
✓ 关卡 1 已创建
✓ 关卡 2 已创建
...
🎉 所有关卡数据初始化完成！
```

### 检查认证配置
```bash
# 启动开发服务器
npm run dev

# 访问认证页面
http://localhost:3000/handler/sign-in
```

成功标志：
- 看到魔法主题登录页
- Stack Auth 组件正常显示
- 可以注册/登录

---

## 📊 配置检查清单

### 必需配置
- [ ] 创建 `.env.local` 文件
- [ ] 添加 `DATABASE_URL`
- [ ] 测试数据库连接
- [ ] 运行初始化脚本

### 可选配置（推荐）
- [ ] 注册 Stack Auth
- [ ] 获取项目凭证
- [ ] 添加 Stack Auth 环境变量
- [ ] 测试登录功能

---

## 🎯 快速开始

### 最快方式（2分钟）

```bash
# 1. 创建环境变量文件
cat > .env.local << 'EOF'
DATABASE_URL="your-database-url"
EOF

# 2. 初始化数据库
export $(cat .env.local | xargs) && npx tsx scripts/init-levels.ts

# 3. 启动应用
npm run dev
```

访问: http://localhost:3000

---

### 完整方式（10分钟）

```bash
# 1. 配置数据库
# 添加 DATABASE_URL 到 .env.local

# 2. 配置认证
# 添加 Stack Auth 凭证到 .env.local

# 3. 初始化
export $(cat .env.local | xargs) && {
  npx tsx scripts/init-levels.ts &&
  npx tsx scripts/update-exercises-1-5.ts &&
  npx tsx scripts/update-exercises-6-10.ts &&
  npx tsx scripts/update-exercises-11-17.ts &&
  npx tsx scripts/update-exercises-18-24.ts &&
  npx tsx scripts/update-exercises-25-30.ts
}

# 4. 启动
npm run dev
```

访问: http://localhost:3000

---

## 🐛 故障排除

### 问题：数据库连接失败

**错误**: `Error: No database connection string`

**解决**:
1. 检查 `.env.local` 文件是否存在
2. 检查 `DATABASE_URL` 是否正确
3. 检查连接字符串格式

### 问题：Stack Auth 不工作

**错误**: 登录页面空白或错误

**解决**:
1. 检查是否添加了所有3个环境变量
2. 检查凭证是否正确
3. 查看浏览器控制台错误
4. 检查 Stack Auth 项目状态

### 问题：环境变量不生效

**解决**:
```bash
# 重启开发服务器
# Ctrl+C 停止
npm run dev  # 重新启动
```

---

## 📚 示例配置

### 开发环境
```env
# .env.local (开发)

# 数据库（Neon开发实例）
DATABASE_URL="postgresql://dev_owner:xxxxx@dev-instance.neon.tech/devdb"

# Stack Auth（开发项目）
NEXT_PUBLIC_STACK_PROJECT_ID="proj_dev_xxxxx"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="pk_dev_xxxxx"
STACK_SECRET_SERVER_KEY="sk_dev_xxxxx"
```

### 生产环境
```env
# .env.production (生产)

# 数据库（Neon生产实例）
DATABASE_URL="postgresql://prod_owner:xxxxx@prod-instance.neon.tech/proddb"

# Stack Auth（生产项目）
NEXT_PUBLIC_STACK_PROJECT_ID="proj_prod_xxxxx"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="pk_prod_xxxxx"
STACK_SECRET_SERVER_KEY="sk_prod_xxxxx"
```

---

## 🎉 配置完成

配置完成后，你的 Python 魔法学院将：

- 🗄️ **连接到 Neon 数据库**
  - 存储关卡数据
  - 存储练习题
  - 记录用户进度

- 🔐 **支持用户认证**（如果配置）
  - 用户注册/登录
  - 个人进度追踪
  - 跨设备同步

- ✨ **完整功能体验**
  - 30天学习路径
  - 319个练习题
  - 真实代码执行
  - 积分系统

---

**配置指南版本**: v1.0.0  
**最后更新**: 2025年10月31日  
**状态**: ✅ 完整  

**🔧 配置好环境变量，开始魔法学习！🔧**

