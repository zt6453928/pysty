# 🔧 Vercel 环境变量配置

## 📋 你的数据库连接信息

### DATABASE_URL（已获取）✅

```
postgresql://neondb_owner:npg_zXcVnS18GyKr@ep-wispy-morning-aheax5ya-pooler.c-3.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require
```

**项目信息**:
- 项目ID: damp-sun-30027528
- 数据库: neondb
- 用户: neondb_owner
- 分支: br-green-sea-ah691299
- 区域: us-east-1

---

## 🚀 在 Vercel 中配置

### 步骤1: 访问项目设置

在 Vercel 导入项目后：

1. 找到 **"Environment Variables"** 区域
2. 或点击 **"Settings"** → **"Environment Variables"**

### 步骤2: 添加 DATABASE_URL

**配置内容**:

```
Name (名称):
DATABASE_URL

Value (值):
postgresql://neondb_owner:npg_zXcVnS18GyKr@ep-wispy-morning-aheax5ya-pooler.c-3.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require

Environment (环境):
✅ Production
✅ Preview  
✅ Development
```

### 步骤3: 保存

点击 **"Save"** 或 **"Add"**

---

## 🔐 Stack Auth 配置（可选）

如果你使用了认证功能，还需要添加：

### 配置1: NEXT_PUBLIC_STACK_PROJECT_ID

```
Name: NEXT_PUBLIC_STACK_PROJECT_ID
Value: 你的Stack项目ID
Environment: Production, Preview, Development
```

### 配置2: NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY

```
Name: NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY
Value: 你的Stack Client Key
Environment: Production, Preview, Development
```

### 配置3: STACK_SECRET_SERVER_KEY

```
Name: STACK_SECRET_SERVER_KEY
Value: 你的Stack Secret Key
Environment: Production, Preview, Development
```

**获取方式**：从本地 `.env.local` 文件复制

---

## 📸 配置截图参考

### 环境变量配置界面

```
┌─────────────────────────────────────────┐
│ Environment Variables                   │
├─────────────────────────────────────────┤
│                                         │
│ Name:  [DATABASE_URL            ]      │
│                                         │
│ Value: [postgresql://neondb_owner...]  │
│                                         │
│ Environments:                           │
│ ☑ Production                           │
│ ☑ Preview                              │
│ ☑ Development                          │
│                                         │
│ [Save]                                  │
└─────────────────────────────────────────┘
```

---

## ✅ 配置检查清单

部署前确认：

- [ ] DATABASE_URL 已添加
- [ ] 值已正确复制（完整的连接字符串）
- [ ] 选择了所有环境（Production, Preview, Development）
- [ ] 点击了 "Save"
- [ ] （可选）Stack Auth 变量已添加

---

## 🎯 完整配置示例

### 最小配置（仅数据库）

```env
DATABASE_URL=postgresql://neondb_owner:npg_zXcVnS18GyKr@ep-wispy-morning-aheax5ya-pooler.c-3.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require
```

### 完整配置（数据库 + 认证）

```env
DATABASE_URL=postgresql://neondb_owner:npg_zXcVnS18GyKr@ep-wispy-morning-aheax5ya-pooler.c-3.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require

NEXT_PUBLIC_STACK_PROJECT_ID=your-stack-project-id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your-stack-client-key
STACK_SECRET_SERVER_KEY=your-stack-secret-key
```

---

## 🔒 安全提示

### 环境变量安全

- ✅ 环境变量只在 Vercel 服务器上
- ✅ 不会暴露给前端（除了 NEXT_PUBLIC_ 开头的）
- ✅ 加密存储
- ❌ 不要提交到 Git（.gitignore已配置）

### 敏感信息

**保密的**:
- DATABASE_URL
- STACK_SECRET_SERVER_KEY

**可公开的**（前端需要）:
- NEXT_PUBLIC_STACK_PROJECT_ID
- NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY

---

## 🚀 部署流程

### 配置环境变量后

```
1. 确认所有变量已保存
2. 点击 "Deploy" 按钮
3. Vercel 开始构建
4. 等待 2-3 分钟
5. 部署完成！
```

### 查看部署状态

```
Vercel 项目页面 → Deployments → 查看实时日志
```

---

## 🐛 故障排除

### 问题1: 数据库连接失败

**检查**:
- DATABASE_URL 是否完整复制
- 末尾的参数是否都在（`?channel_binding=require&sslmode=require`）
- 没有多余的空格或换行

**测试**:
```bash
# 本地测试连接
export DATABASE_URL="postgresql://..."
npx tsx scripts/init-levels.ts
```

### 问题2: 构建失败

**常见原因**:
- 缺少 DATABASE_URL
- 环境变量名称拼写错误
- 值格式不正确

**解决**:
1. 重新检查环境变量配置
2. 查看构建日志
3. 修复后点击 "Redeploy"

---

## 📊 配置总结

### 必需配置（1个）

```
DATABASE_URL ← 必须配置
```

### 可选配置（3个，如果使用认证）

```
NEXT_PUBLIC_STACK_PROJECT_ID
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY
STACK_SECRET_SERVER_KEY
```

---

## 🎉 准备就绪！

### 你现在拥有

- ✅ GitHub 仓库（代码已推送）
- ✅ 数据库连接字符串
- ✅ 环境变量配置指南

### 下一步

```
访问 Vercel → 导入 pysty → 配置环境变量 → 部署！
```

**只需10分钟，你的网站就能上线！** 🚀

---

**Vercel 部署地址**: https://vercel.com

**详细指南**: 查看 `快速部署清单.md`

**开始部署吧！** 🎊✨

