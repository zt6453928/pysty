import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // 在生产构建时忽略TypeScript错误（开发时仍会显示）
    ignoreBuildErrors: true,
  },
  env: {
    // 确保环境变量正确加载
    STACK_SECRET_SERVER_KEY: process.env.STACK_SECRET_SERVER_KEY,
    NEXT_PUBLIC_STACK_PROJECT_ID: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
    NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  },
};

export default nextConfig;
