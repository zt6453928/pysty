import { Sparkles, BookOpen, Code, Trophy } from 'lucide-react';
import Link from 'next/link';
import MagicCard from '@/components/MagicCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 魔法粒子背景 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-float" />
        <div className="absolute top-40 right-40 w-3 h-3 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* 主内容 */}
      <div className="relative container mx-auto px-4 py-16">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles size={48} className="text-yellow-400" />
            <h1 className="text-6xl font-bold spell-text">
              Python 魔法学院
          </h1>
            <Sparkles size={48} className="text-yellow-400" />
          </div>
          <p className="text-2xl text-purple-300 mb-4">
            踏上30天的Python魔法之旅
          </p>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            通过游戏化的学习方式，掌握Python编程的魔法。完成关卡，获取魔法点数，成为真正的Python法师！
          </p>
        </div>

        {/* 特性卡片 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <MagicCard>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 spell-text">30天系统课程</h3>
              <p className="text-purple-200">
                从基础到进阶，每天一个主题，循序渐进掌握Python魔法
              </p>
            </div>
          </MagicCard>

          <MagicCard>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 spell-text">实时代码编辑器</h3>
              <p className="text-purple-200">
                在浏览器中直接编写和运行Python代码，即时查看结果
              </p>
            </div>
          </MagicCard>

          <MagicCard>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 spell-text">奖励与成就</h3>
              <p className="text-purple-200">
                完成挑战获得魔法点数，解锁成就，追踪你的学习进度
              </p>
            </div>
          </MagicCard>
        </div>

        {/* CTA按钮 */}
        <div className="text-center space-y-4">
          <Link href="/dashboard" className="inline-block">
            <button className="magic-button text-xl px-12 py-4">
              <Sparkles className="inline mr-2" size={24} />
              开始魔法之旅
              <Sparkles className="inline ml-2" size={24} />
            </button>
          </Link>
          <p className="text-purple-300">
            适合所有想学习Python的魔法师，无需经验
          </p>
        </div>

        {/* 学习路径预览 */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center spell-text mb-12">
            学习路径
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { week: '第1周', topics: ['Python基础', '变量与数据类型', '运算符', '字符串', '列表', '元组', '集合'] },
              { week: '第2周', topics: ['字典', '条件语句', '循环', '函数', '模块', '列表推导式', 'Lambda函数'] },
              { week: '第3周', topics: ['高阶函数', '错误处理', '正则表达式', '日期时间', '文件操作', 'pip包管理', 'API'] },
              { week: '第4周', topics: ['统计学', 'Web抓取', 'OOP', '数据库', 'MongoDB', 'SQLAlchemy', 'Git'] },
            ].map((week, i) => (
              <MagicCard key={i} className="p-6">
                <h3 className="text-xl font-bold spell-text mb-3">{week.week}</h3>
                <ul className="space-y-2">
                  {week.topics.map((topic, j) => (
                    <li key={j} className="flex items-center gap-2 text-purple-200">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
