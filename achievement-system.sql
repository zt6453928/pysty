-- ============================================
-- 成就系统数据库初始化脚本
-- Python 魔法学院
-- ============================================

-- 1. 创建成就表
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
);

-- 2. 创建用户成就表
CREATE TABLE IF NOT EXISTS user_achievements (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  achievement_id INTEGER REFERENCES achievements(id),
  unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, achievement_id)
);

-- 3. 创建用户统计表
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
);

-- 4. 插入成就数据

-- 学习进度成就 (5个)
INSERT INTO achievements (key, title, description, icon, category, requirement_type, requirement_value, points, rarity)
VALUES 
  ('first_step', '🎓 第一步', '完成第一个关卡', '🎓', 'progress', 'levels_completed', 1, 50, 'common'),
  ('getting_started', '🚀 入门者', '完成5个关卡', '🚀', 'progress', 'levels_completed', 5, 100, 'common'),
  ('intermediate', '⭐ 中级法师', '完成10个关卡', '⭐', 'progress', 'levels_completed', 10, 200, 'rare'),
  ('advanced', '🌟 高级法师', '完成20个关卡', '🌟', 'progress', 'levels_completed', 20, 400, 'rare'),
  ('master', '👑 Python大师', '完成全部30个关卡', '👑', 'progress', 'levels_completed', 30, 1000, 'legendary')
ON CONFLICT (key) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  category = EXCLUDED.category,
  requirement_type = EXCLUDED.requirement_type,
  requirement_value = EXCLUDED.requirement_value,
  points = EXCLUDED.points,
  rarity = EXCLUDED.rarity;

-- 魔法点数成就 (5个)
INSERT INTO achievements (key, title, description, icon, category, requirement_type, requirement_value, points, rarity)
VALUES 
  ('magic_100', '✨ 魔法新手', '累计获得100魔法点数', '✨', 'points', 'total_points', 100, 50, 'common'),
  ('magic_500', '💫 魔法学徒', '累计获得500魔法点数', '💫', 'points', 'total_points', 500, 100, 'common'),
  ('magic_1000', '🔮 魔法师', '累计获得1000魔法点数', '🔮', 'points', 'total_points', 1000, 200, 'rare'),
  ('magic_3000', '🌌 魔法大师', '累计获得3000魔法点数', '🌌', 'points', 'total_points', 3000, 500, 'epic'),
  ('magic_5000', '⚡ 传奇法师', '累计获得5000魔法点数（全部练习题）', '⚡', 'points', 'total_points', 5000, 1000, 'legendary')
ON CONFLICT (key) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  category = EXCLUDED.category,
  requirement_type = EXCLUDED.requirement_type,
  requirement_value = EXCLUDED.requirement_value,
  points = EXCLUDED.points,
  rarity = EXCLUDED.rarity;

-- 练习题成就 (5个)
INSERT INTO achievements (key, title, description, icon, category, requirement_type, requirement_value, points, rarity)
VALUES 
  ('exercises_10', '📝 勤奋学生', '完成10个练习题', '📝', 'exercises', 'exercises_completed', 10, 50, 'common'),
  ('exercises_50', '📚 练习达人', '完成50个练习题', '📚', 'exercises', 'exercises_completed', 50, 150, 'rare'),
  ('exercises_100', '🏆 练习狂人', '完成100个练习题', '🏆', 'exercises', 'exercises_completed', 100, 300, 'epic'),
  ('exercises_200', '💪 练习大师', '完成200个练习题', '💪', 'exercises', 'exercises_completed', 200, 600, 'epic'),
  ('all_exercises', '🎖️ 完美主义者', '完成全部319个练习题', '🎖️', 'exercises', 'exercises_completed', 319, 1500, 'legendary')
ON CONFLICT (key) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  category = EXCLUDED.category,
  requirement_type = EXCLUDED.requirement_type,
  requirement_value = EXCLUDED.requirement_value,
  points = EXCLUDED.points,
  rarity = EXCLUDED.rarity;

-- 连续学习成就 (4个)
INSERT INTO achievements (key, title, description, icon, category, requirement_type, requirement_value, points, rarity)
VALUES 
  ('streak_3', '🔥 三天连击', '连续3天学习', '🔥', 'streak', 'streak_days', 3, 75, 'common'),
  ('streak_7', '⚡ 一周坚持', '连续7天学习', '⚡', 'streak', 'streak_days', 7, 150, 'rare'),
  ('streak_14', '💎 两周坚持', '连续14天学习', '💎', 'streak', 'streak_days', 14, 300, 'epic'),
  ('streak_30', '🏅 三十天大师', '连续30天学习', '🏅', 'streak', 'streak_days', 30, 1000, 'legendary')
ON CONFLICT (key) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  category = EXCLUDED.category,
  requirement_type = EXCLUDED.requirement_type,
  requirement_value = EXCLUDED.requirement_value,
  points = EXCLUDED.points,
  rarity = EXCLUDED.rarity;

-- 特殊成就 (6个)
INSERT INTO achievements (key, title, description, icon, category, requirement_type, requirement_value, points, rarity)
VALUES 
  ('night_owl', '🦉 夜猫子', '在晚上11点后完成一个关卡', '🦉', 'special', 'special', 0, 100, 'rare'),
  ('early_bird', '🌅 早起鸟', '在早上6点前完成一个关卡', '🌅', 'special', 'special', 0, 100, 'rare'),
  ('speed_runner', '⚡ 速度之王', '在一天内完成5个关卡', '⚡', 'special', 'special', 0, 200, 'epic'),
  ('perfectionist', '💯 完美主义者', '连续10个练习题满分通过', '💯', 'special', 'special', 0, 250, 'epic'),
  ('first_blood', '🎯 首杀', '完成第一个练习题', '🎯', 'special', 'special', 0, 25, 'common'),
  ('comeback', '🎊 王者归来', '中断学习后重新开始', '🎊', 'special', 'special', 0, 50, 'common')
ON CONFLICT (key) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  category = EXCLUDED.category,
  requirement_type = EXCLUDED.requirement_type,
  requirement_value = EXCLUDED.requirement_value,
  points = EXCLUDED.points,
  rarity = EXCLUDED.rarity;

-- 完成！
SELECT 
  '✅ 成就系统初始化完成！' as message,
  COUNT(*) as total_achievements
FROM achievements;

SELECT 
  rarity,
  COUNT(*) as count
FROM achievements
GROUP BY rarity
ORDER BY 
  CASE rarity
    WHEN 'common' THEN 1
    WHEN 'rare' THEN 2
    WHEN 'epic' THEN 3
    WHEN 'legendary' THEN 4
  END;

