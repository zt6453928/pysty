# 脚本使用说明

本目录包含了用于初始化和更新 Python 魔法学院数据库的各种脚本。

## 📁 脚本列表

### 初始化脚本

#### `init-levels.ts`
初始化所有30天的关卡数据和基础练习题。

**使用方法**:
```bash
export $(cat .env.local | xargs) && npx tsx scripts/init-levels.ts
```

**功能**:
- 创建 30 个学习关卡
- 为每个关卡添加基础练习题
- 设置关卡解锁要求

---

### 内容更新脚本

#### `update-levels-1-5.ts`
更新 Day 1-5 的完整学习内容（从 pyword 目录读取 Markdown 文件）。

**使用方法**:
```bash
export $(cat .env.local | xargs) && npx tsx scripts/update-levels-1-5.ts
```

**功能**:
- 读取 `pyword/Day1.md` - `Day5.md` 文件
- 更新数据库中对应关卡的 content 字段
- 保留原有的练习题不变

#### `update-levels-6-10.ts`
更新 Day 6-10 的学习内容。

#### `update-levels-11-16.ts`
更新 Day 11-16 的学习内容。

#### `update-levels-17-23.ts`
更新 Day 17-23 的学习内容。

#### `update-levels-24-30.ts`
更新 Day 24-30 的学习内容。

---

### 练习题更新脚本

#### `update-exercises-1-5.ts` ⭐ 最新
更新 Day 1-5 的完整魔法练习题集合。

**使用方法**:
```bash
export $(cat .env.local | xargs) && npx tsx scripts/update-exercises-1-5.ts
```

**功能**:
- 删除 Day 1-5 的旧练习题
- 插入完整的新练习题（总计 132 题）
- 每个练习题包含：
  - 标题和描述
  - 初始代码模板
  - 难度等级
  - 积分奖励

**更新内容**:
- Day 1: 16 个练习题 (185 分)
- Day 2: 27 个练习题 (365 分)
- Day 3: 23 个练习题 (370 分)
- Day 4: 36 个练习题 (520 分)
- Day 5: 30 个练习题 (465 分)

---

### 验证脚本

#### `verify-exercises.ts`
验证 Day 1-5 的练习题是否正确更新。

**使用方法**:
```bash
export $(cat .env.local | xargs) && npx tsx scripts/verify-exercises.ts
```

**功能**:
- 统计每天的练习题数量
- 显示难度分布
- 计算总积分
- 显示示例练习题

---

### 清理脚本

#### `clean-all-days.ts`
清理所有关卡的数据。

**使用方法**:
```bash
export $(cat .env.local | xargs) && npx tsx scripts/clean-all-days.ts
```

⚠️ **警告**: 此脚本会删除所有关卡和练习题数据，请谨慎使用！

#### `clean-and-update-day1.ts`
清理并更新 Day 1 的数据。

---

## 🔄 常用工作流

### 完整初始化流程

从零开始设置数据库：

```bash
# 1. 初始化所有关卡
export $(cat .env.local | xargs) && npx tsx scripts/init-levels.ts

# 2. 更新 Day 1-5 的学习内容
export $(cat .env.local | xargs) && npx tsx scripts/update-levels-1-5.ts

# 3. 更新 Day 1-5 的练习题
export $(cat .env.local | xargs) && npx tsx scripts/update-exercises-1-5.ts

# 4. 验证更新
export $(cat .env.local | xargs) && npx tsx scripts/verify-exercises.ts
```

### 更新单个关卡组

如果只需要更新特定天数的内容：

```bash
# 更新 Day 6-10
export $(cat .env.local | xargs) && npx tsx scripts/update-levels-6-10.ts

# 更新 Day 11-16
export $(cat .env.local | xargs) && npx tsx scripts/update-levels-11-16.ts
```

### 快速测试

测试脚本是否正常工作：

```bash
# 验证练习题
export $(cat .env.local | xargs) && npx tsx scripts/verify-exercises.ts
```

---

## 📝 环境变量

所有脚本都需要 `DATABASE_URL` 环境变量，该变量应该在 `.env.local` 文件中定义。

**.env.local 示例**:
```
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

---

## 🛠️ 开发指南

### 创建新的更新脚本

1. 复制现有脚本作为模板
2. 修改数据内容
3. 更新脚本说明
4. 测试脚本
5. 更新本 README

### 脚本结构

```typescript
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function updateData() {
  try {
    console.log('🔄 开始更新...');
    
    // 你的更新逻辑
    
    console.log('✅ 更新完成');
  } catch (error) {
    console.error('❌ 更新失败:', error);
    throw error;
  }
}

updateData().catch(console.error);
```

---

## 📊 数据库表结构

### levels 表
```sql
- id: 主键
- level_number: 关卡编号 (1-30)
- title: 关卡标题
- description: 关卡描述
- content: 学习内容 (Markdown)
- magic_points: 完成奖励积分
- unlock_requirement: 解锁要求（前置关卡）
- created_at: 创建时间
```

### exercises 表
```sql
- id: 主键
- level_id: 关联的关卡ID
- title: 练习题标题
- description: 练习题描述
- starter_code: 初始代码模板
- test_cases: 测试用例 (JSON)
- difficulty: 难度 (easy/medium/hard)
- points: 完成奖励积分
- order_index: 排序索引
- created_at: 创建时间
```

---

## 🐛 故障排除

### 问题：找不到环境变量

**错误信息**:
```
Error: No database connection string was provided to `neon()`
```

**解决方案**:
确保在运行脚本前加载环境变量：
```bash
export $(cat .env.local | xargs) && npx tsx scripts/your-script.ts
```

### 问题：脚本执行失败

**解决方案**:
1. 检查数据库连接是否正常
2. 确认 `.env.local` 文件存在且包含正确的 `DATABASE_URL`
3. 查看错误日志确定具体问题
4. 如果是数据问题，可能需要先运行清理脚本

---

## 📚 相关文档

- [项目总览](../PROJECT_OVERVIEW.md)
- [Day 1-5 练习题更新总结](../DAY_1_5_EXERCISES_UPDATE.md)
- [设置指南](../SETUP.md)
- [贡献指南](../docs/CONTRIBUTING.md)

---

## ✅ 最近更新

**2025-10-31**
- ✨ 新增 `update-exercises-1-5.ts` - 完整的 Day 1-5 练习题更新脚本
- ✨ 新增 `verify-exercises.ts` - 练习题验证脚本
- 📝 更新本 README 文档
- 🎯 Day 1-5 练习题从 5-7 题增加到 16-36 题（总计 132 题）

---

**维护者**: Python 魔法学院开发团队  
**最后更新**: 2025年10月31日

