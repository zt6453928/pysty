'use client';

import { useEffect, useState, useMemo } from 'react';
import LevelCard from '@/components/LevelCard';
import ProgressHeader from '@/components/ProgressHeader';
import { Loader2 } from 'lucide-react';
import { useUser } from '@stackframe/stack';

interface Level {
  id: number;
  level_number: number;
  title: string;
  description: string;
  magic_points: number;
  unlock_requirement: number | null;
}

export default function Dashboard() {
  const [levels, setLevels] = useState<Level[]>([]);
  const [userProgress, setUserProgress] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const user = useUser();

  // 使用真实用户ID或demo用户（未登录时）
  const userId = user?.id || 'demo-user';

  useEffect(() => {
    async function fetchData() {
      try {
        // 并行请求所有数据，提升加载速度
        const [levelsResponse, progressResponse] = await Promise.all([
          fetch('/api/levels'),
          fetch(`/api/progress?userId=${userId}`),
        ]);

        const [levelsData, progressData] = await Promise.all([
          levelsResponse.json(),
          progressResponse.json(),
        ]);

        setLevels(levelsData);
        setUserProgress(progressData);

      } catch (error) {
        console.error('获取数据失败:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  // 计算数据（必须在所有 Hooks 之后，条件返回之前）
  const currentLevel = userProgress?.reward?.current_level || 1;
  const totalMagicPoints = userProgress?.reward?.total_magic_points || 0;
  const achievements = userProgress?.reward?.achievementCount || 0;

  // 使用 useMemo 缓存关卡状态计算，避免重复计算
  const levelStatuses = useMemo(() => {
    if (!userProgress?.progress) return new Map();
    
    const statusMap = new Map();
    levels.forEach((level) => {
      const progress = userProgress.progress.find((p: any) => p.level_id === level.id);
      const isCompleted = progress?.completed || false;
      const isLocked = level.unlock_requirement 
        ? currentLevel < level.unlock_requirement 
        : level.level_number > currentLevel + 1;
      
      statusMap.set(level.id, {
        isCompleted,
        isLocked,
        progress: progress?.score || 0,
      });
    });
    
    return statusMap;
  }, [levels, userProgress, currentLevel]);

  // 骨架屏组件
  const SkeletonCard = () => (
    <div className="magic-card p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
        <div className="w-16 h-6 bg-purple-200 rounded"></div>
      </div>
      <div className="h-6 bg-purple-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-purple-200 rounded w-full mb-4"></div>
      <div className="h-8 bg-purple-200 rounded w-1/2"></div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* 头部骨架 */}
          <div className="magic-card p-8 mb-8 animate-pulse">
            <div className="h-8 bg-purple-200 rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 bg-purple-200 rounded"></div>
              <div className="h-20 bg-purple-200 rounded"></div>
              <div className="h-20 bg-purple-200 rounded"></div>
            </div>
          </div>

          <div className="h-8 bg-purple-200 rounded w-1/4 mb-8 animate-pulse"></div>

          {/* 关卡卡片骨架 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <ProgressHeader
          username={user?.displayName || '法师'}
          totalMagicPoints={totalMagicPoints}
          currentLevel={currentLevel}
          achievements={achievements}
        />

        <h2 className="text-3xl font-bold spell-text mb-8">选择你的关卡</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level) => {
            const status = levelStatuses.get(level.id) || { isCompleted: false, isLocked: true, progress: 0 };
            return (
              <LevelCard
                key={level.id}
                levelNumber={level.level_number}
                title={level.title}
                description={level.description}
                magicPoints={level.magic_points}
                isLocked={status.isLocked}
                isCompleted={status.isCompleted}
                progress={status.progress}
              />
            );
          })}
        </div>

        {levels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-purple-300 text-lg">
              正在准备关卡数据...请稍候
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

