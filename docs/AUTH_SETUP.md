# 认证系统设置指南（可选）

本项目预留了用户认证系统的接口，使用 Stack Auth 和 Neon Auth 集成。

## 为什么需要认证？

如果你希望：
- 每个用户有独立的学习进度
- 用户可以保存和恢复学习进度
- 实现排行榜和社区功能
- 用户可以在不同设备间同步进度

那么你需要设置认证系统。

## 设置步骤

### 1. 配置Neon Auth

项目已经尝试provision Neon Auth，如果还没有设置，运行：

\`\`\`bash
# 使用MCP工具配置
# 或访问 Neon 控制台手动配置
\`\`\`

### 2. 获取Stack Auth凭证

1. 访问 [Stack Auth](https://stack-auth.com/)
2. 创建新项目
3. 获取以下凭证：
   - Project ID
   - Publishable Client Key
   - Secret Server Key

### 3. 配置环境变量

在 `.env.local` 文件中添加：

\`\`\`env
NEXT_PUBLIC_STACK_PROJECT_ID="your-project-id"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your-client-key"
STACK_SECRET_SERVER_KEY="your-secret-key"
\`\`\`

### 4. 初始化Stack Auth

运行以下命令初始化Stack Auth配置：

\`\`\`bash
npx @stackframe/init-stack . --no-browser
\`\`\`

这将自动创建：
- \`stack.ts\` - Stack配置文件
- 认证相关的路由和组件
- 必要的Provider包装

### 5. 更新代码使用真实用户ID

目前代码中使用的是硬编码的 \`demo-user\`，需要替换为真实的用户ID：

#### 在客户端组件中：
\`\`\`typescript
'use client';
import { useUser } from '@stackframe/stack';

export default function Dashboard() {
  const user = useUser({ or: 'redirect' });
  const userId = user.id;
  
  // 使用 userId 而不是 'demo-user'
}
\`\`\`

#### 在服务器组件中：
\`\`\`typescript
import { stackServerApp } from '@/stack';

export default async function ServerComponent() {
  const user = await stackServerApp.getUser({ or: 'redirect' });
  const userId = user.id;
  
  // 使用 userId
}
\`\`\`

### 6. 保护路由

在需要登录才能访问的页面添加认证检查：

\`\`\`typescript
// app/dashboard/page.tsx
'use client';
import { useUser } from '@stackframe/stack';

export default function Dashboard() {
  const user = useUser({ or: 'redirect' }); // 未登录自动跳转
  
  // 页面内容
}
\`\`\`

### 7. 添加登录/注册按钮

在导航栏中添加用户按钮：

\`\`\`typescript
import { UserButton } from '@stackframe/stack';

// 在导航栏中
<UserButton />
\`\`\`

## 无认证模式（当前默认）

如果不配置认证系统，应用将：
- 使用 \`demo-user\` 作为默认用户ID
- 所有用户共享同一个学习进度
- 适合演示和个人学习使用

要在生产环境中使用，强烈建议配置认证系统。

## 数据库集成

用户认证表会自动在 Neon 数据库中创建（\`neon_auth\` schema）：
- \`neon_auth.users\` - 用户信息（与Stack Auth同步）

应用的其他表（\`user_progress\`, \`user_rewards\`等）通过 \`user_id\` 字段关联。

## Stack Auth 组件

Stack Auth 提供以下预构建组件：

- \`<SignIn />\` - 登录页面
- \`<SignUp />\` - 注册页面
- \`<UserButton />\` - 用户菜单按钮
- \`<OAuthButtonGroup />\` - OAuth登录按钮组

## 自定义认证UI

你可以自定义认证页面的样式以匹配魔法学院主题：

\`\`\`typescript
// app/handler/[...stack]/page.tsx
import { SignIn } from '@stackframe/stack';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="magic-card p-8">
        <h1 className="text-3xl font-bold spell-text mb-6">
          欢迎来到魔法学院
        </h1>
        <SignIn />
      </div>
    </div>
  );
}
\`\`\`

## 测试认证

1. 启动开发服务器
2. 访问 \`/handler/sign-in\` 测试登录页面
3. 注册新用户
4. 确认用户数据正确存储到数据库

## 故障排除

### 问题：认证配置失败

确保：
1. 所有环境变量正确配置
2. Neon Auth已经provision
3. Stack Auth项目已创建

### 问题：用户数据不同步

检查：
1. \`user_id\` 是否正确传递
2. 数据库表是否正确创建
3. API路由是否正确获取用户ID

## 参考资源

- [Stack Auth 文档](https://docs.stack-auth.com/)
- [Neon Auth 文档](https://neon.tech/docs/guides/auth)
- [Next.js 认证最佳实践](https://nextjs.org/docs/authentication)

