'use client';

import { Star, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressHeaderProps {
  username: string;
  totalMagicPoints: number;
  currentLevel: number;
  achievements: number;
}

export default function ProgressHeader({
  username,
  totalMagicPoints,
  currentLevel,
  achievements,
}: ProgressHeaderProps) {
  return (
    <div className="magic-card p-6 mb-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold spell-text mb-2">
            欢迎回来，{username} 法师！
          </h1>
          <p className="text-purple-300">继续你的Python魔法之旅</p>
        </div>

        <div className="flex gap-6">
          {/* 魔法点数 */}
          <motion.div
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Star size={24} fill="#fbbf24" className="text-yellow-400" />
            <div>
              <p className="text-xs text-yellow-300">魔法点数</p>
              <p className="text-xl font-bold text-yellow-400">{totalMagicPoints}</p>
            </div>
          </motion.div>

          {/* 当前关卡 */}
          <motion.div
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp size={24} className="text-purple-400" />
            <div>
              <p className="text-xs text-purple-300">当前关卡</p>
              <p className="text-xl font-bold text-purple-400">{currentLevel}/30</p>
            </div>
          </motion.div>

          {/* 成就数 */}
          <motion.div
            className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Award size={24} className="text-green-400" />
            <div>
              <p className="text-xs text-green-300">成就</p>
              <p className="text-xl font-bold text-green-400">{achievements}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

