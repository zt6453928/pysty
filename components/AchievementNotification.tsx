'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Achievement {
  id: number;
  key: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onClose: () => void;
}

const rarityColors = {
  common: 'from-gray-500 to-gray-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-yellow-500 to-orange-600',
};

const rarityNames = {
  common: '普通',
  rare: '稀有',
  epic: '史诗',
  legendary: '传奇',
};

export default function AchievementNotification({
  achievement,
  onClose,
}: AchievementNotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setIsVisible(true);
      // 5秒后自动关闭
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [achievement]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && achievement && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4"
        >
          <div
            className={`
              relative overflow-hidden rounded-2xl border-2 p-6
              bg-gradient-to-br ${rarityColors[achievement.rarity]}
              shadow-2xl
              backdrop-blur-sm
            `}
          >
            {/* 背景动画 */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/20 pointer-events-none"
              style={{ backgroundSize: '200% 200%' }}
            />

            {/* 关闭按钮 */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 p-1 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>

            {/* 内容 */}
            <div className="relative">
              {/* 标题 */}
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="text-yellow-300 animate-bounce" size={24} />
                <span className="text-lg font-bold text-white">
                  🎉 成就解锁！
                </span>
              </div>

              {/* 成就信息 */}
              <div className="flex items-start gap-4">
                {/* 图标 */}
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: 2,
                  }}
                  className="text-5xl flex-shrink-0"
                >
                  {achievement.icon}
                </motion.div>

                {/* 详情 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white truncate">
                      {achievement.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-black/30 text-white whitespace-nowrap">
                      {rarityNames[achievement.rarity]}
                    </span>
                  </div>
                  <p className="text-sm text-white/90 mb-2">
                    {achievement.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Trophy className="text-yellow-300" size={16} />
                    <span className="text-sm font-bold text-yellow-300">
                      +{achievement.points} 魔法点数
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 闪光效果 */}
            <motion.div
              animate={{
                x: [-300, 300],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
              style={{
                transform: 'skewX(-20deg)',
              }}
            />
          </div>

          {/* 光晕效果 */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`
              absolute inset-0 -z-10 blur-2xl rounded-2xl
              bg-gradient-to-br ${rarityColors[achievement.rarity]}
            `}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

