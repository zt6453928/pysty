'use client';

import { motion } from 'framer-motion';
import { Lock, Trophy } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
  unlocked: boolean;
  unlocked_at?: Date | string | null;
  progress?: number;
  requirementValue?: number;
}

const rarityColors = {
  common: 'from-gray-500 to-gray-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-yellow-500 to-orange-600',
};

const rarityBorders = {
  common: 'border-gray-500',
  rare: 'border-blue-500',
  epic: 'border-purple-500',
  legendary: 'border-yellow-500',
};

const rarityGlows = {
  common: 'shadow-gray-500/50',
  rare: 'shadow-blue-500/50',
  epic: 'shadow-purple-500/50',
  legendary: 'shadow-yellow-500/50',
};

const rarityNames = {
  common: '普通',
  rare: '稀有',
  epic: '史诗',
  legendary: '传奇',
};

export default function AchievementCard({
  title,
  description,
  icon,
  category,
  rarity,
  points,
  unlocked,
  unlocked_at,
  progress = 0,
  requirementValue,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={unlocked ? { scale: 1.05, y: -5 } : {}}
      className={`
        relative overflow-hidden rounded-xl border-2 p-6
        ${unlocked ? rarityBorders[rarity] : 'border-gray-700'}
        ${unlocked ? `bg-gradient-to-br ${rarityColors[rarity]} bg-opacity-10` : 'bg-gray-800/50'}
        ${unlocked ? `shadow-xl ${rarityGlows[rarity]}` : 'opacity-60'}
        transition-all duration-300
      `}
    >
      {/* 背景装饰 */}
      {unlocked && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      )}

      {/* 稀有度标签 */}
      <div className={`
        absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold
        ${unlocked ? `bg-gradient-to-r ${rarityColors[rarity]} text-white` : 'bg-gray-700 text-gray-400'}
      `}>
        {rarityNames[rarity]}
      </div>

      {/* 图标 */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`
          text-5xl flex-shrink-0
          ${unlocked ? 'grayscale-0' : 'grayscale opacity-40'}
        `}>
          {unlocked ? icon : <Lock className="text-gray-500" size={48} />}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`
            text-xl font-bold mb-1 truncate
            ${unlocked ? 'text-white' : 'text-gray-500'}
          `}>
            {title}
          </h3>
          <p className={`
            text-sm line-clamp-2
            ${unlocked ? 'text-gray-300' : 'text-gray-600'}
          `}>
            {description}
          </p>
        </div>
      </div>

      {/* 进度条 */}
      {!unlocked && progress > 0 && (
        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>进度</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`h-full bg-gradient-to-r ${rarityColors[rarity]}`}
            />
          </div>
        </div>
      )}

      {/* 底部信息 */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
        <div className="flex items-center gap-2">
          <Trophy className={unlocked ? 'text-yellow-400' : 'text-gray-600'} size={16} />
          <span className={`text-sm font-semibold ${unlocked ? 'text-yellow-400' : 'text-gray-600'}`}>
            +{points} 点数
          </span>
        </div>

        {unlocked && unlocked_at && (
          <span className="text-xs text-gray-400">
            {new Date(unlocked_at).toLocaleDateString('zh-CN')}
          </span>
        )}
      </div>

      {/* 解锁效果 */}
      {unlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s infinite',
          }}
        />
      )}
    </motion.div>
  );
}

