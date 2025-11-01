# 🚀 Vercel 部署指南 - 5分钟上线

## 📋 部署前准备

### 1. 确认项目状态

```bash
# 检查项目是否正常运行
npm run dev

# 访问本地测试
http://localhost:3000

✓ 确认功能正常
✓ 没有报错
```

### 2. 准备环境变量

你需要以下环境变量：

```env
# 必需
DATABASE_URL=your-neon-database-url

# Stack Auth（如果使用认证功能）
NEXT_PUBLIC_STACK_PROJECT_ID=your-stack-project-id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your-stack-client-key
STACK_SECRET_SERVER_KEY=your-stack-secret-key
```

---

## 🚀 部署步骤

### 步骤1: 推送到 GitHub

```bash
# 1. 初始化 Git（如果还没有）
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "准备部署到Vercel"

# 4. 创建 GitHub 仓库
# 访问 https://github.com/new
# 创建新仓库（如 pysty）

# 5. 连接远程仓库
git remote add origin https://github.com/你的用户名/pysty.git

# 6. 推送代码
git branch -M main
git push -u origin main
```

---

### 步骤2: 连接 Vercel

#### 2.1 注册/登录 Vercel

1. 访问 https://vercel.com
2. 点击 "Sign Up" 或 "Log In"
3. 选择 "Continue with GitHub"
4. 授权 Vercel 访问你的 GitHub

#### 2.2 导入项目

1. 点击 "Add New..." → "Project"
2. 选择你的 GitHub 仓库 `pysty`
3. 点击 "Import"

#### 2.3 配置项目

**Framework Preset**: Next.js（自动检测）✅

**Root Directory**: `./`（默认）✅

**Build Command**: `npm run build`（自动）✅

**Output Directory**: `.next`（自动）✅

---

### 步骤3: 配置环境变量

在 Vercel 项目设置页面：

1. 点击 "Environment Variables" 标签

2. 添加环境变量：

   ```
   名称: DATABASE_URL
   值: postgresql://user:pass@host.neon.tech/db
   环境: Production, Preview, Development
   ```

3. 如果使用认证，添加 Stack Auth 变量：

   ```
   NEXT_PUBLIC_STACK_PROJECT_ID
   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY
   STACK_SECRET_SERVER_KEY
   ```

4. 点击 "Save"

---

### 步骤4: 部署！

1. 点击 "Deploy" 按钮
2. 等待构建（约2-3分钟）
3. 看到 "🎉 Congratulations!" 
4. 点击 "Visit" 访问你的网站！

---

## 🎯 部署后的 URL

### 自动生成的域名

```
https://pysty.vercel.app
或
https://pysty-你的用户名.vercel.app
```

### 自定义域名（可选）

在 Vercel 项目设置：
1. Settings → Domains
2. 添加你的域名
3. 配置 DNS 记录
4. 等待验证

---

## 🔧 环境变量详细配置

### DATABASE_URL（必需）

从 Neon 控制台获取：

1. 访问 https://console.neon.tech
2. 选择你的项目 "Pysty"
3. 点击 "Connection Details"
4. 复制 "Connection string"
5. 粘贴到 Vercel 环境变量

**格式**:
```
postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb
```

### Stack Auth 变量（可选）

如果使用认证功能：

1. 从 `.env.local` 复制
2. 或从 Stack Auth 控制台获取
3. 添加到 Vercel

**注意**: `NEXT_PUBLIC_` 开头的变量会暴露给前端

---

## ⚙️ 进阶配置

### 自动部署

连接 GitHub 后：

```
推送代码 → 自动构建 → 自动部署
```

**main 分支**: 生产环境
**其他分支**: 预览环境

### 构建优化

在 `next.config.ts` 中（可选）：

```typescript
const nextConfig = {
  // 输出优化
  output: 'standalone',
  
  // 图片优化
  images: {
    domains: ['lh3.googleusercontent.com'], // Stack Auth 头像
  },
};
```

### 预览部署

每个 Pull Request 自动创建预览：

```
PR #1 → https://pysty-git-feature-xxx.vercel.app
```

---

## 🐛 常见问题

### 问题1: 构建失败

**原因**: 可能缺少依赖或环境变量

**解决**:
```bash
# 本地测试构建
npm run build

# 检查是否成功
# 修复所有错误后再部署
```

### 问题2: 数据库连接失败

**原因**: DATABASE_URL 未配置或错误

**解决**:
1. 检查 Vercel 环境变量
2. 确认 DATABASE_URL 正确
3. 重新部署

### 问题3: Stack Auth 不工作

**原因**: 域名配置问题

**解决**:
1. 访问 Stack Auth 控制台
2. 添加 Vercel 域名到允许列表
3. 更新环境变量

### 问题4: 部署成功但页面404

**原因**: 路由配置问题

**解决**:
1. 检查 `app` 目录结构
2. 确认所有页面文件存在
3. 重新部署

---

## 📊 性能监控

### Vercel Analytics（可选）

免费版包含：
- 页面访问统计
- 性能指标
- 用户分析

**启用方法**:
1. 项目设置 → Analytics
2. 点击 "Enable"

---

## 🔒 安全配置

### 环境变量安全

- ✅ 敏感数据放环境变量
- ✅ 不要提交 `.env.local` 到 Git
- ✅ 使用 `NEXT_PUBLIC_` 前缀暴露给前端

### 数据库安全

- ✅ 使用 Neon 的连接池
- ✅ 启用 SSL 连接
- ✅ 定期更新密码

---

## 🎉 部署后测试

### 功能检查清单

```bash
访问你的 Vercel URL

□ 首页正常显示
□ 导航栏工作正常
□ 学习中心加载成功
□ 关卡页面可访问
□ 代码编辑器工作
□ 代码执行成功
□ 成就系统正常
□ 用户认证工作（如果启用）
□ 进度保存正常
```

---

## 📈 监控和维护

### 查看部署日志

1. Vercel 项目页面
2. Deployments 标签
3. 点击具体部署
4. 查看构建日志和运行日志

### 回滚版本

如果新版本有问题：

1. Deployments 页面
2. 选择之前的成功部署
3. 点击 "..." → "Promote to Production"

---

## 🌟 优化建议

### 性能优化

1. **启用 Edge Functions**（自动）
2. **使用 Image 组件** 优化图片
3. **启用增量静态生成** ISR

### SEO 优化

在 `app/layout.tsx` 中：
```typescript
export const metadata = {
  title: 'Python魔法学院',
  description: '...',
  // 添加更多 meta 信息
};
```

---

## 📚 相关资源

- 📖 [Vercel 官方文档](https://vercel.com/docs)
- 📖 [Next.js 部署文档](https://nextjs.org/docs/deployment)
- 📖 [Neon + Vercel 集成](https://neon.tech/docs/guides/vercel)

---

## 🎊 总结

### 部署时间线

```
0:00 - 推送代码到 GitHub
0:02 - 在 Vercel 导入项目
0:03 - 配置环境变量
0:05 - 点击部署
0:08 - 构建完成
0:09 - 网站上线！🎉
```

### 总耗时：约 10 分钟

---

**准备好了吗？开始部署吧！** 🚀

**下一步**: 查看 `Vercel部署步骤详解.md` 获取图文教程

