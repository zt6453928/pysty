import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL!);

export interface Level {
  id: number;
  level_number: number;
  title: string;
  description: string;
  content: string;
  magic_points: number;
  unlock_requirement: number | null;
  created_at: Date;
}

export interface Exercise {
  id: number;
  level_id: number;
  title: string;
  description: string;
  starter_code: string;
  test_cases: any;
  difficulty: string;
  points: number;
  order_index: number;
  created_at: Date;
}

export interface UserProgress {
  id: number;
  user_id: string;
  level_id: number;
  completed: boolean;
  score: number;
  completed_at: Date | null;
  created_at: Date;
}

export interface UserReward {
  id: number;
  user_id: string;
  total_magic_points: number;
  current_level: number;
  achievements: any[];
  created_at: Date;
  updated_at: Date;
}

export interface Achievement {
  id: number;
  key: string;
  title: string;
  description: string;
  icon: string;
  category: 'progress' | 'points' | 'exercises' | 'streak' | 'special';
  requirement_type: string;
  requirement_value: number;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  created_at: Date;
}

export interface UserAchievement {
  id: number;
  user_id: string;
  achievement_id: number;
  unlocked_at: Date;
  achievement?: Achievement;
}

export interface UserStats {
  id: number;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  last_activity_date: Date | null;
  total_exercises_completed: number;
  total_levels_completed: number;
  perfect_runs: number;
  created_at: Date;
  updated_at: Date;
}

