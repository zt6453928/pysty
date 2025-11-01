import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// 定义所有成就
const achievementsData = [
  // 🎯 学习进度成就
  {
    key: 'first_step',
    title: '🎓 第一步',
    description: '完成第一个关卡',
    icon: '🎓',
    category: 'progress',
    requirement_type: 'levels_completed',
    requirement_value: 1,
    points: 50,
    rarity: 'common',
  },
  {
    key: 'getting_started',
    title: '🚀 入门者',
    description: '完成5个关卡',
    icon: '🚀',
    category: 'progress',
    requirement_type: 'levels_completed',
    requirement_value: 5,
    points: 100,
    rarity: 'common',
  },
  {
    key: 'intermediate',
    title: '⭐ 中级法师',
    description: '完成10个关卡',
    icon: '⭐',
    category: 'progress',
    requirement_type: 'levels_completed',
    requirement_value: 10,
    points: 200,
    rarity: 'rare',
  },
  {
    key: 'advanced',
    title: '🌟 高级法师',
    description: '完成20个关卡',
    icon: '🌟',
    category: 'progress',
    requirement_type: 'levels_completed',
    requirement_value: 20,
    points: 400,
    rarity: 'rare',
  },
  {
    key: 'master',
    title: '👑 Python大师',
    description: '完成全部30个关卡',
    icon: '👑',
    category: 'progress',
    requirement_type: 'levels_completed',
    requirement_value: 30,
    points: 1000,
    rarity: 'legendary',
  },

  // 💎 魔法点数成就
  {
    key: 'magic_100',
    title: '✨ 魔法新手',
    description: '累计获得100魔法点数',
    icon: '✨',
    category: 'points',
    requirement_type: 'total_points',
    requirement_value: 100,
    points: 50,
    rarity: 'common',
  },
  {
    key: 'magic_500',
    title: '💫 魔法学徒',
    description: '累计获得500魔法点数',
    icon: '💫',
    category: 'points',
    requirement_type: 'total_points',
    requirement_value: 500,
    points: 100,
    rarity: 'common',
  },
  {
    key: 'magic_1000',
    title: '🔮 魔法师',
    description: '累计获得1000魔法点数',
    icon: '🔮',
    category: 'points',
    requirement_type: 'total_points',
    requirement_value: 1000,
    points: 200,
    rarity: 'rare',
  },
  {
    key: 'magic_3000',
    title: '🌌 魔法大师',
    description: '累计获得3000魔法点数',
    icon: '🌌',
    category: 'points',
    requirement_type: 'total_points',
    requirement_value: 3000,
    points: 500,
    rarity: 'epic',
  },
  {
    key: 'magic_5000',
    title: '⚡ 传奇法师',
    description: '累计获得5000魔法点数（全部练习题）',
    icon: '⚡',
    category: 'points',
    requirement_type: 'total_points',
    requirement_value: 5000,
    points: 1000,
    rarity: 'legendary',
  },

  // 🎯 练习题成就
  {
    key: 'exercises_10',
    title: '📝 勤奋学生',
    description: '完成10个练习题',
    icon: '📝',
    category: 'exercises',
    requirement_type: 'exercises_completed',
    requirement_value: 10,
    points: 50,
    rarity: 'common',
  },
  {
    key: 'exercises_50',
    title: '📚 练习达人',
    description: '完成50个练习题',
    icon: '📚',
    category: 'exercises',
    requirement_type: 'exercises_completed',
    requirement_value: 50,
    points: 150,
    rarity: 'rare',
  },
  {
    key: 'exercises_100',
    title: '🏆 练习狂人',
    description: '完成100个练习题',
    icon: '🏆',
    category: 'exercises',
    requirement_type: 'exercises_completed',
    requirement_value: 100,
    points: 300,
    rarity: 'epic',
  },
  {
    key: 'exercises_200',
    title: '💪 练习大师',
    description: '完成200个练习题',
    icon: '💪',
    category: 'exercises',
    requirement_type: 'exercises_completed',
    requirement_value: 200,
    points: 600,
    rarity: 'epic',
  },
  {
    key: 'all_exercises',
    title: '🎖️ 完美主义者',
    description: '完成全部319个练习题',
    icon: '🎖️',
    category: 'exercises',
    requirement_type: 'exercises_completed',
    requirement_value: 319,
    points: 1500,
    rarity: 'legendary',
  },

  // 🔥 连续学习成就
  {
    key: 'streak_3',
    title: '🔥 三天连击',
    description: '连续3天学习',
    icon: '🔥',
    category: 'streak',
    requirement_type: 'streak_days',
    requirement_value: 3,
    points: 75,
    rarity: 'common',
  },
  {
    key: 'streak_7',
    title: '⚡ 一周坚持',
    description: '连续7天学习',
    icon: '⚡',
    category: 'streak',
    requirement_type: 'streak_days',
    requirement_value: 7,
    points: 150,
    rarity: 'rare',
  },
  {
    key: 'streak_14',
    title: '💎 两周坚持',
    description: '连续14天学习',
    icon: '💎',
    category: 'streak',
    requirement_type: 'streak_days',
    requirement_value: 14,
    points: 300,
    rarity: 'epic',
  },
  {
    key: 'streak_30',
    title: '🏅 三十天大师',
    description: '连续30天学习',
    icon: '🏅',
    category: 'streak',
    requirement_type: 'streak_days',
    requirement_value: 30,
    points: 1000,
    rarity: 'legendary',
  },

  // 🎨 特殊成就
  {
    key: 'night_owl',
    title: '🦉 夜猫子',
    description: '在晚上11点后完成一个关卡',
    icon: '🦉',
    category: 'special',
    requirement_type: 'special',
    requirement_value: 0,
    points: 100,
    rarity: 'rare',
  },
  {
    key: 'early_bird',
    title: '🌅 早起鸟',
    description: '在早上6点前完成一个关卡',
    icon: '🌅',
    category: 'special',
    requirement_type: 'special',
    requirement_value: 0,
    points: 100,
    rarity: 'rare',
  },
  {
    key: 'speed_runner',
    title: '⚡ 速度之王',
    description: '在一天内完成5个关卡',
    icon: '⚡',
    category: 'special',
    requirement_type: 'special',
    requirement_value: 0,
    points: 200,
    rarity: 'epic',
  },
  {
    key: 'perfectionist',
    title: '💯 完美主义者',
    description: '连续10个练习题满分通过',
    icon: '💯',
    category: 'special',
    requirement_type: 'special',
    requirement_value: 0,
    points: 250,
    rarity: 'epic',
  },
  {
    key: 'first_blood',
    title: '🎯 首杀',
    description: '完成第一个练习题',
    icon: '🎯',
    category: 'special',
    requirement_type: 'special',
    requirement_value: 0,
    points: 25,
    rarity: 'common',
  },
  {
    key: 'comeback',
    title: '🎊 王者归来',
    description: '中断学习后重新开始',
    icon: '🎊',
    category: 'special',
    requirement_type: 'special',
    requirement_value: 0,
    points: 50,
    rarity: 'common',
  },
];

async function initAchievements() {
  try {
    console.log('🎯 开始创建成就系统数据库表...\n');

    // 1. 创建成就表
    await sql`
      CREATE TABLE IF NOT EXISTS achievements (
        id SERIAL PRIMARY KEY,
        key VARCHAR(100) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        icon VARCHAR(50) NOT NULL,
        category VARCHAR(50) NOT NULL,
        requirement_type VARCHAR(100) NOT NULL,
        requirement_value INTEGER NOT NULL,
        points INTEGER NOT NULL DEFAULT 0,
        rarity VARCHAR(50) NOT NULL DEFAULT 'common',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ achievements 表已创建');

    // 2. 创建用户成就表
    await sql`
      CREATE TABLE IF NOT EXISTS user_achievements (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        achievement_id INTEGER REFERENCES achievements(id),
        unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, achievement_id)
      )
    `;
    console.log('✅ user_achievements 表已创建');

    // 3. 创建用户统计表（用于追踪连续学习等）
    await sql`
      CREATE TABLE IF NOT EXISTS user_stats (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) UNIQUE NOT NULL,
        current_streak INTEGER DEFAULT 0,
        longest_streak INTEGER DEFAULT 0,
        last_activity_date DATE,
        total_exercises_completed INTEGER DEFAULT 0,
        total_levels_completed INTEGER DEFAULT 0,
        perfect_runs INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ user_stats 表已创建');

    // 4. 插入成就数据
    console.log('\n📝 开始插入成就数据...\n');
    for (const achievement of achievementsData) {
      await sql`
        INSERT INTO achievements (
          key, title, description, icon, category,
          requirement_type, requirement_value, points, rarity
        )
        VALUES (
          ${achievement.key},
          ${achievement.title},
          ${achievement.description},
          ${achievement.icon},
          ${achievement.category},
          ${achievement.requirement_type},
          ${achievement.requirement_value},
          ${achievement.points},
          ${achievement.rarity}
        )
        ON CONFLICT (key) DO UPDATE SET
          title = EXCLUDED.title,
          description = EXCLUDED.description,
          icon = EXCLUDED.icon,
          category = EXCLUDED.category,
          requirement_type = EXCLUDED.requirement_type,
          requirement_value = EXCLUDED.requirement_value,
          points = EXCLUDED.points,
          rarity = EXCLUDED.rarity
      `;
      console.log(`  ✓ ${achievement.title} - ${achievement.description}`);
    }

    console.log('\n🎉 成就系统初始化完成！');
    console.log(`\n📊 统计信息：`);
    console.log(`   总成就数: ${achievementsData.length}`);
    console.log(`   - 普通 (Common): ${achievementsData.filter(a => a.rarity === 'common').length}`);
    console.log(`   - 稀有 (Rare): ${achievementsData.filter(a => a.rarity === 'rare').length}`);
    console.log(`   - 史诗 (Epic): ${achievementsData.filter(a => a.rarity === 'epic').length}`);
    console.log(`   - 传奇 (Legendary): ${achievementsData.filter(a => a.rarity === 'legendary').length}`);
    console.log(`\n   按类别：`);
    console.log(`   - 进度成就: ${achievementsData.filter(a => a.category === 'progress').length}`);
    console.log(`   - 积分成就: ${achievementsData.filter(a => a.category === 'points').length}`);
    console.log(`   - 练习题成就: ${achievementsData.filter(a => a.category === 'exercises').length}`);
    console.log(`   - 连续学习成就: ${achievementsData.filter(a => a.category === 'streak').length}`);
    console.log(`   - 特殊成就: ${achievementsData.filter(a => a.category === 'special').length}`);

  } catch (error) {
    console.error('❌ 初始化失败:', error);
    throw error;
  }
}

initAchievements();

