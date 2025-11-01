'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@stackframe/stack';
import AchievementCard from '@/components/AchievementCard';
import { Loader2, Trophy, Target, Sparkles, Flame, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Achievement {
  id: number;
  key: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  requirement_type: string;
  requirement_value: number;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  unlocked_at: Date | string | null;
  progress: number;
}

interface Stats {
  total_exercises_completed: number;
  total_levels_completed: number;
  current_streak: number;
  longest_streak: number;
}

const categoryIcons = {
  progress: Target,
  points: Trophy,
  exercises: Sparkles,
  streak: Flame,
  special: Star,
};

const categoryNames = {
  progress: '学习进度',
  points: '魔法点数',
  exercises: '练习题',
  streak: '连续学习',
  special: '特殊成就',
};

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const user = useUser();
  const userId = user?.id || 'demo-user';

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const response = await fetch(`/api/achievements?userId=${userId}`);
        const data = await response.json();
        
        setAchievements(data.achievements || []);
        setStats(data.stats || null);
        setUnlockedCount(data.unlockedCount || 0);
        setTotalCount(data.totalCount || 0);
      } catch (error) {
        console.error('获取成就失败:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAchievements();
  }, [userId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-400" size={48} />
      </div>
    );
  }

  // 过滤成就
  const filteredAchievements = selectedCategory === 'all'
    ? achievements
    : achievements.filter((a) => a.category === selectedCategory);

  // 统计各类成就数量
  const categoryStats = Object.keys(categoryNames).reduce((acc, category) => {
    const total = achievements.filter((a) => a.category === category).length;
    const unlocked = achievements.filter((a) => a.category === category && a.unlocked).length;
    acc[category] = { total, unlocked };
    return acc;
  }, {} as Record<string, { total: number; unlocked: number }>);

  const completionPercentage = totalCount > 0 ? Math.round((unlockedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold spell-text mb-4 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-400" size={48} />
            成就系统
          </h1>
          <p className="text-xl text-purple-300">
            收集成就，成为Python魔法大师！
          </p>
        </motion.div>

        {/* 统计卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          {/* 总体进度 */}
          <div className="magic-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {unlockedCount} / {totalCount}
            </div>
            <div className="text-sm text-gray-400 mb-3">成就解锁</div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
            <div className="text-xs text-purple-400 mt-2">{completionPercentage}%</div>
          </div>

          {/* 连续学习 */}
          <div className="magic-card p-6 text-center">
            <Flame className="mx-auto mb-2 text-orange-400" size={32} />
            <div className="text-2xl font-bold text-orange-400 mb-1">
              {stats?.current_streak || 0} 天
            </div>
            <div className="text-sm text-gray-400">连续学习</div>
            <div className="text-xs text-gray-500 mt-1">
              最长: {stats?.longest_streak || 0} 天
            </div>
          </div>

          {/* 完成关卡 */}
          <div className="magic-card p-6 text-center">
            <Target className="mx-auto mb-2 text-blue-400" size={32} />
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {stats?.total_levels_completed || 0}
            </div>
            <div className="text-sm text-gray-400">完成关卡</div>
          </div>

          {/* 完成练习 */}
          <div className="magic-card p-6 text-center">
            <Sparkles className="mx-auto mb-2 text-green-400" size={32} />
            <div className="text-2xl font-bold text-green-400 mb-1">
              {stats?.total_exercises_completed || 0}
            </div>
            <div className="text-sm text-gray-400">完成练习</div>
          </div>
        </motion.div>

        {/* 分类过滤 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap gap-2 mb-6 justify-center"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`
              px-4 py-2 rounded-lg font-semibold transition-all
              ${selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }
            `}
          >
            全部 ({totalCount})
          </button>

          {Object.entries(categoryNames).map(([key, name]) => {
            const Icon = categoryIcons[key as keyof typeof categoryIcons];
            const stat = categoryStats[key] || { total: 0, unlocked: 0 };
            
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`
                  px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2
                  ${selectedCategory === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }
                `}
              >
                <Icon size={16} />
                {name} ({stat.unlocked}/{stat.total})
              </button>
            );
          })}
        </motion.div>

        {/* 成就网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <AchievementCard
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                category={achievement.category}
                rarity={achievement.rarity}
                points={achievement.points}
                unlocked={achievement.unlocked}
                unlocked_at={achievement.unlocked_at}
                progress={achievement.progress}
                requirementValue={achievement.requirement_value}
              />
            </motion.div>
          ))}
        </div>

        {/* 空状态 */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="mx-auto mb-4 text-gray-600" size={64} />
            <p className="text-xl text-gray-400">
              {selectedCategory === 'all' 
                ? '还没有成就数据，请先初始化成就系统'
                : '该分类暂无成就'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

