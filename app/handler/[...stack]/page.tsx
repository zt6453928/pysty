"use client";

import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export default function Handler(props: any) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <span className="text-6xl">✨</span>
            <span>Python魔法学院</span>
          </h1>
          <p className="text-purple-200 text-lg">开始你的魔法学习之旅</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl auth-container">
          <StackHandler
            app={stackServerApp}
            routeProps={props}
          />
        </div>

        <p className="text-center text-purple-200 mt-6">
          登录后即可保存学习进度和获得成就
        </p>
      </div>
    </div>
  );
}

