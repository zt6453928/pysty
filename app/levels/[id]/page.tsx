'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import MagicCard from '@/components/MagicCard';
import CodeEditor from '@/components/CodeEditor';
import ReadingContent from '@/components/ReadingContent';
import { ArrowLeft, Star, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { useUser } from '@stackframe/stack';

interface Level {
  id: number;
  level_number: number;
  title: string;
  description: string;
  content: string;
  magic_points: number;
}

interface Exercise {
  id: number;
  title: string;
  description: string;
  starter_code: string;
  difficulty: string;
  points: number;
}

export default function LevelPage() {
  const params = useParams();
  const router = useRouter();
  const [level, setLevel] = useState<Level | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'content' | 'exercises'>('content');
  const [expandedExerciseId, setExpandedExerciseId] = useState<number | null>(null);
  const user = useUser();

  const levelNumber = parseInt(params.id as string);
  // 使用真实用户ID或demo用户（未登录时）
  const userId = user?.id || 'demo-user';

  useEffect(() => {
    async function fetchLevelData() {
      try {
        // 获取关卡和练习题数据
        const response = await fetch(`/api/levels/${levelNumber}`);
        const data = await response.json();
        
        setLevel(data.level);
        setExercises(data.exercises);

        // 获取用户已完成的练习题
        if (data.level?.id) {
          const submissionsResponse = await fetch(`/api/exercises/submit?userId=${userId}&levelId=${data.level.id}`);
          const submissionsData = await submissionsResponse.json();
          
          if (submissionsData.submissions) {
            const completed = new Set(
              submissionsData.submissions
                .filter((s: any) => s.passed)
                .map((s: any) => s.exercise_id)
            );
            setCompletedExercises(completed);
          }
        }
      } catch (error) {
        console.error('获取关卡数据失败:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLevelData();
  }, [levelNumber, userId]);

  const handleExerciseComplete = async (exerciseId: number, code: string, passed: boolean, score: number) => {
    try {
      // 保存练习题提交记录到数据库
      await fetch('/api/exercises/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          exerciseId,
          code,
          passed,
          score,
        }),
      });

    if (passed) {
      setCompletedExercises(prev => new Set([...prev, exerciseId]));
      
      // 检查是否所有练习都完成了
      if (completedExercises.size + 1 === exercises.length) {
        // 更新关卡进度
        await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            levelId: level?.id,
            completed: true,
            score: 100,
          }),
        });

        // 显示完成提示
        alert(`🎉 恭喜！你完成了 ${level?.title}！\n获得 ${level?.magic_points} 魔法点数！`);
      }
      }
    } catch (error) {
      console.error('保存练习题失败:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-900 font-medium">加载中...</p>
        </div>
      </div>
    );
  }

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="text-center">
          <p className="text-red-600 text-xl font-semibold mb-4">关卡不存在</p>
          <button onClick={() => router.push('/dashboard')} className="magic-button">
            返回仪表板
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* 顶部魔法导航栏 */}
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 border-b-4 border-purple-700">
        <div className="container mx-auto px-4 py-6">
          {/* 返回按钮 */}
          <button
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2 text-purple-100 hover:text-white mb-4 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            返回仪表板
          </button>

          {/* 关卡标题 */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center font-bold text-2xl text-white shadow-lg">
              {level.level_number}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-2">{level.title}</h1>
              <p className="text-purple-100 text-lg">{level.description}</p>
            </div>
            <div className="flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg font-bold shadow-lg">
              <Star size={24} fill="currentColor" />
              <span>{level.magic_points} 点</span>
            </div>
          </div>
        </div>
      </div>

      {/* 标签页切换 */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('content')}
              className={`flex-1 py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                activeTab === 'content'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-purple-600 border-2 border-purple-300 hover:border-purple-500'
              }`}
            >
              📚 学习内容
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className={`flex-1 py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                activeTab === 'exercises'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white text-purple-600 border-2 border-purple-300 hover:border-purple-500'
              }`}
            >
              ✨ 魔法练习 {exercises.length > 0 && `(${completedExercises.size}/${exercises.length})`}
            </button>
          </div>
        </div>
      </div>

      {/* 学习内容区域 */}
      {activeTab === 'content' && (
        <ReadingContent
          title={level.title}
          subtitle={level.description}
          content={level.content}
          magicPoints={level.magic_points}
          progress={completedExercises.size > 0 ? Math.round((completedExercises.size / Math.max(exercises.length, 1)) * 100) : 0}
        />
      )}

      {/* 练习题区域 */}
      {activeTab === 'exercises' && (
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            {exercises.length === 0 ? (
              <MagicCard className="p-8 text-center">
                <p className="text-gray-600 text-lg">暂无练习题</p>
              </MagicCard>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-4xl font-bold spell-text flex items-center gap-3">
                    <span>✨ 魔法练习</span>
                  </h2>
                  <span className="text-2xl font-bold text-purple-700">
                    {completedExercises.size}/{exercises.length} 完成
                  </span>
                </div>

                {exercises.map((exercise, index) => {
                  const isExpanded = expandedExerciseId === exercise.id;
                  const isCompleted = completedExercises.has(exercise.id);

                  return (
                    <MagicCard key={exercise.id} className="overflow-hidden">
                      {/* 练习题标题栏 - 可点击展开/折叠 */}
                      <div
                        className="p-6 cursor-pointer hover:bg-purple-50/50 transition-colors"
                        onClick={() => setExpandedExerciseId(isExpanded ? null : exercise.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            {/* 展开/折叠图标 */}
                            {isExpanded ? (
                              <ChevronDown className="text-purple-600 flex-shrink-0" size={24} />
                            ) : (
                              <ChevronRight className="text-purple-600 flex-shrink-0" size={24} />
                            )}
                            
                            {/* 题目编号和标题 */}
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                <span>{index + 1}. {exercise.title}</span>
                                {isCompleted && (
                                  <CheckCircle className="text-green-500" size={24} />
                                )}
                              </h3>
                            </div>
                          </div>

                          {/* 难度和分数标签 */}
                          <div className="flex gap-3 text-sm flex-shrink-0 ml-4">
                            <span className={`px-3 py-1.5 rounded-full font-medium ${
                              exercise.difficulty === 'easy' ? 'bg-green-100 text-green-800 border border-green-300' :
                              exercise.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800 border border-yellow-300' :
                              'bg-red-100 text-red-800 border border-red-300'
                            }`}>
                              {exercise.difficulty === 'easy' ? '简单' : exercise.difficulty === 'medium' ? '中等' : '困难'}
                            </span>
                            <span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-800 font-medium border border-purple-300">
                              {exercise.points} 分
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 练习题详细内容 - 展开时显示 */}
                      {isExpanded && (
                        <div className="px-6 pb-6 border-t border-purple-100">
                          <p className="text-gray-700 mb-4 text-lg mt-4">{exercise.description}</p>
                          
                          <CodeEditor
                            exerciseId={exercise.id}
                            starterCode={exercise.starter_code}
                            userId={userId}
                            onSubmit={(code, passed, score) => handleExerciseComplete(exercise.id, code, passed, score)}
                          />
                        </div>
                      )}
                    </MagicCard>
                  );
                })}

                {/* 完成按钮 */}
                {completedExercises.size === exercises.length && exercises.length > 0 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => router.push('/dashboard')}
                      className="magic-button text-xl px-12 py-4"
                    >
                      🎉 继续下一关卡
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
