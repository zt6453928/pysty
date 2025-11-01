'use client';

import { Lock, Star, CheckCircle } from 'lucide-react';
import MagicCard from './MagicCard';
import Link from 'next/link';

interface LevelCardProps {
  levelNumber: number;
  title: string;
  description: string;
  magicPoints: number;
  isLocked: boolean;
  isCompleted: boolean;
  progress?: number;
}

export default function LevelCard({
  levelNumber,
  title,
  description,
  magicPoints,
  isLocked,
  isCompleted,
  progress = 0,
}: LevelCardProps) {
  const content = (
    <MagicCard 
      className={`relative overflow-hidden w-full h-[280px] flex flex-col ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      hover={!isLocked}
      glow={isCompleted}
    >
      {/* 关卡编号 */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl z-10">
        {levelNumber}
      </div>

      {/* 锁定图标 */}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20">
          <Lock size={48} className="text-purple-300" />
        </div>
      )}

      {/* 完成标记 */}
      {isCompleted && (
        <div className="absolute top-4 left-4 z-10">
          <CheckCircle size={32} className="text-green-400 animate-pulse-glow" />
        </div>
      )}

      <div className="mt-8 flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold mb-2 spell-text line-clamp-1">{title}</h3>
        <p className="text-purple-200 mb-4 text-sm line-clamp-2 flex-1">{description}</p>

        {/* 进度条 */}
        {!isLocked && progress > 0 && progress < 100 && (
          <div className="mb-3">
            <div className="w-full bg-purple-900/30 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-purple-300 mt-1">进度: {progress}%</p>
          </div>
        )}

        {/* 魔法点数 - 固定在底部 */}
        <div className="flex items-center gap-2 text-yellow-400 mt-auto">
          <Star size={18} fill="currentColor" />
          <span className="font-semibold text-sm">{magicPoints} 魔法点数</span>
        </div>
      </div>
    </MagicCard>
  );

  if (isLocked) {
    return content;
  }

  return <Link href={`/levels/${levelNumber}`}>{content}</Link>;
}

