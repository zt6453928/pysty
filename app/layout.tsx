import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Sparkles, Home, BookOpen, Trophy } from 'lucide-react';
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "@/stack";
import ClientNavBar from '@/components/ClientNavBar';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Python魔法学院 - 30天Python学习之旅',
  description: '通过游戏化的方式学习Python编程，完成30天挑战，成为Python大师！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <StackProvider app={stackServerApp}>
          <StackTheme>
        {/* 导航栏 */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-md border-b border-purple-500/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 text-xl font-bold spell-text hover:scale-105 transition-transform">
                <Sparkles size={28} className="text-yellow-400" />
                <span>Python魔法学院</span>
              </Link>

              {/* 导航链接 */}
              <div className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                >
                  <Home size={20} />
                  <span>首页</span>
                </Link>
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                >
                  <BookOpen size={20} />
                  <span>学习中心</span>
                </Link>
                <Link 
                  href="/achievements" 
                  className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
                >
                  <Trophy size={20} />
                  <span>成就</span>
                </Link>
                    <Suspense fallback={<div className="w-20 h-10" />}>
                      <ClientNavBar />
                    </Suspense>
              </div>
            </div>
          </div>
        </nav>

        {/* 主内容 */}
        <main className="pt-16">
        {children}
        </main>

        {/* 页脚 */}
        <footer className="mt-20 py-8 border-t border-purple-500/30">
          <div className="container mx-auto px-4 text-center text-purple-300">
            <p className="mb-2">
              <span className="spell-text font-bold">Python魔法学院</span>
            </p>
            <p className="text-sm">
              基于{' '}
              <a 
                href="https://github.com/Asabeneh/30-Days-Of-Python" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-200 underline"
              >
                30 Days of Python
              </a>
              {' '}项目创建
            </p>
            <p className="text-xs mt-2 text-purple-400">
              © 2024 Python魔法学院. 用 ❤️ 和魔法创造
            </p>
          </div>
        </footer>

        {/* 魔法粒子背景效果 */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
