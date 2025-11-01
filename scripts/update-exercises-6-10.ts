import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Day 6-10 的完整练习题
const exercisesData = {
  6: [
    // 练习：等级 1
    {
      title: '创建空元组',
      description: '创建一个空元组',
      starter_code: '# 创建空元组\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '创建兄弟姐妹元组',
      description: '创建一个包含你姐妹和兄弟名字的元组（虚构的兄弟姐妹也可以）',
      starter_code: '# 创建元组\nbrothers = \nsisters = \n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '连接兄弟姐妹元组',
      description: '连接兄弟姐妹元组并将其分配给 siblings',
      starter_code: 'brothers = ("Tom", "Jerry")\nsisters = ("Mary", "Lucy")\n\n# 连接元组\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '计算兄弟姐妹数量',
      description: '你有多少兄弟姐妹？',
      starter_code: 'siblings = ("Tom", "Jerry", "Mary", "Lucy")\n\n# 计算数量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '修改元组添加父母',
      description: '修改兄弟姐妹元组并添加你父母的名字，然后将其分配给 family_members',
      starter_code: 'siblings = ("Tom", "Jerry", "Mary", "Lucy")\n\n# 添加父母（提示：将元组转换为列表）\n',
      difficulty: 'medium',
      points: 20,
    },
    // 练习：等级 2
    {
      title: '拆解 family_members',
      description: '从 family_members 中获取兄弟姐妹和父母',
      starter_code: 'family_members = ("Tom", "Jerry", "Mary", "Lucy", "Dad", "Mom")\n\n# 拆解元组\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建 food_stuff_tp',
      description: '创建 fruits、vegetables 和 animal products 元组，连接三个元组并将其分配给名为 food_stuff_tp 的变量',
      starter_code: 'fruits = ("apple", "banana", "orange")\nvegetables = ("carrot", "potato", "tomato")\nanimal_products = ("milk", "meat", "egg")\n\n# 连接元组\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '元组转列表',
      description: '将 food_stuff_tp 元组更改为 food_stuff_lt 列表',
      starter_code: 'food_stuff_tp = ("apple", "banana", "orange", "carrot", "potato", "tomato", "milk", "meat", "egg")\n\n# 转换为列表\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '切出中间项',
      description: '从 food_stuff_tp 元组或 food_stuff_lt 列表中切出中间项或项',
      starter_code: 'food_stuff_tp = ("apple", "banana", "orange", "carrot", "potato", "tomato", "milk", "meat", "egg")\n\n# 切片获取中间项\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '切出前三项和后三项',
      description: '从 food_staff_lt 列表中切出前三项和最后三项',
      starter_code: 'food_stuff_lt = ["apple", "banana", "orange", "carrot", "potato", "tomato", "milk", "meat", "egg"]\n\n# 切片\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '删除元组',
      description: '完全删除 food_staff_tp 元组',
      starter_code: 'food_stuff_tp = ("apple", "banana", "orange")\n\n# 删除元组\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '检查元组中的项 - Estonia',
      description: '检查 "Estonia" 是否在 nordic_country 元组中',
      starter_code: 'nordic_countries = ("Denmark", "Finland", "Iceland", "Norway", "Sweden")\n\n# 检查是否存在\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查元组中的项 - Iceland',
      description: '检查 "Iceland" 是否在 nordic_country 元组中',
      starter_code: 'nordic_countries = ("Denmark", "Finland", "Iceland", "Norway", "Sweden")\n\n# 检查是否存在\n',
      difficulty: 'easy',
      points: 15,
    },
  ],
  7: [
    // 练习：等级 1
    {
      title: '找到集合长度',
      description: '找到集合 it_companies 的长度',
      starter_code: 'it_companies = {"Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"}\n\n# 找到长度\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '添加元素到集合',
      description: '向 it_companies 添加 "Twitter"',
      starter_code: 'it_companies = {"Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"}\n\n# 添加元素\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '一次性插入多个公司',
      description: '一次性向集合 it_companies 插入多个 IT 公司',
      starter_code: 'it_companies = {"Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"}\nmore_companies = {"Tesla", "Netflix", "Uber"}\n\n# 插入多个元素\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '从集合中移除公司',
      description: '从集合 it_companies 中移除一家公司',
      starter_code: 'it_companies = {"Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"}\n\n# 移除一个元素\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: 'remove 和 discard 的区别',
      description: '移除和丢弃之间有什么区别',
      starter_code: '# remove() 会在元素不存在时抛出错误\n# discard() 不会抛出错误\n\nit_companies = {"Facebook", "Google"}\n\n# 尝试使用两种方法\n',
      difficulty: 'medium',
      points: 20,
    },
    // 练习：等级 2
    {
      title: '合并集合',
      description: '合并 A 和 B',
      starter_code: 'A = {19, 22, 24, 20, 25, 26}\nB = {19, 22, 20, 25, 26, 24, 28, 27}\n\n# 合并集合\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '找到交集',
      description: '找到 A 和 B 的交集',
      starter_code: 'A = {19, 22, 24, 20, 25, 26}\nB = {19, 22, 20, 25, 26, 24, 28, 27}\n\n# 找到交集\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查子集',
      description: 'A 是 B 的子集吗',
      starter_code: 'A = {19, 22, 24, 20, 25, 26}\nB = {19, 22, 20, 25, 26, 24, 28, 27}\n\n# 检查子集\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '检查不相交集合',
      description: 'A 和 B 是不相交集合吗',
      starter_code: 'A = {19, 22, 24, 20, 25, 26}\nB = {19, 22, 20, 25, 26, 24, 28, 27}\n\n# 检查是否不相交\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '合并集合（两个方向）',
      description: '将 A 与 B 合并，反之亦然',
      starter_code: 'A = {19, 22, 24, 20, 25, 26}\nB = {19, 22, 20, 25, 26, 24, 28, 27}\n\n# A 合并 B\n# B 合并 A\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '对称差异',
      description: 'A 和 B 之间的对称差异是什么',
      starter_code: 'A = {19, 22, 24, 20, 25, 26}\nB = {19, 22, 20, 25, 26, 24, 28, 27}\n\n# 找到对称差异\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '完全删除集合',
      description: '完全删除集合',
      starter_code: 'A = {19, 22, 24, 20, 25, 26}\n\n# 删除集合\n',
      difficulty: 'easy',
      points: 10,
    },
    // 练习：等级 3
    {
      title: '列表转集合并比较',
      description: '将年龄转换为集合并比较列表和集合的长度，哪一个更大？',
      starter_code: 'age = [22, 19, 24, 25, 26, 24, 25, 24]\n\n# 转换为集合并比较长度\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '解释数据类型差异',
      description: '解释以下数据类型之间的区别：字符串、列表、元组和集合',
      starter_code: '# 字符串：不可变的字符序列\n# 列表：可变的有序集合\n# 元组：不可变的有序集合\n# 集合：无序的唯一元素集合\n\n# 写出你的理解\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '统计独特单词',
      description: '"我是一个老师，我喜欢激励和教导人们。" 这句句子中用了多少独特的单词？',
      starter_code: 'sentence = "I am a teacher and I love teaching. If you do not love teaching what else can you love."\n\n# 统计独特单词（提示：使用 split() 和 set()）\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  8: [
    {
      title: '创建空字典',
      description: '创建一个名为 dog 的空字典',
      starter_code: '# 创建空字典\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '向字典添加键',
      description: '向 dog 字典添加 name、color、breed、legs、age 键',
      starter_code: 'dog = {}\n\n# 添加键值对\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '创建学生字典',
      description: '创建一个学生字典，添加 first_name、last_name、gender、age、marital status、skills、country、city 和 address 作为字典的键',
      starter_code: '# 创建学生字典\nstudent = {\n    \n}\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '获取字典长度',
      description: '获取学生字典的长度',
      starter_code: 'student = {\n    "first_name": "Tom",\n    "last_name": "Smith",\n    "gender": "Male",\n    "age": 20\n}\n\n# 获取长度\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '获取 skills 值',
      description: '获取 skills 的值并检查数据类型，应该是列表',
      starter_code: 'student = {\n    "first_name": "Tom",\n    "skills": ["Python", "JavaScript"]\n}\n\n# 获取值并检查类型\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '修改 skills',
      description: '修改 skills 值，添加一到两个技能',
      starter_code: 'student = {\n    "first_name": "Tom",\n    "skills": ["Python", "JavaScript"]\n}\n\n# 添加技能\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '获取字典键列表',
      description: '获取字典的键列表',
      starter_code: 'student = {\n    "first_name": "Tom",\n    "last_name": "Smith",\n    "age": 20\n}\n\n# 获取键列表\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '获取字典值列表',
      description: '获取字典的值列表',
      starter_code: 'student = {\n    "first_name": "Tom",\n    "last_name": "Smith",\n    "age": 20\n}\n\n# 获取值列表\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '字典转元组列表',
      description: '使用 items() 方法将字典变为由元组组成的列表',
      starter_code: 'student = {\n    "first_name": "Tom",\n    "last_name": "Smith",\n    "age": 20\n}\n\n# 转换为元组列表\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '删除字典项',
      description: '删除字典中的一项',
      starter_code: 'student = {\n    "first_name": "Tom",\n    "last_name": "Smith",\n    "age": 20\n}\n\n# 删除一项\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '删除字典',
      description: '删除其中一个字典',
      starter_code: 'dog = {"name": "Buddy", "age": 3}\nstudent = {"name": "Tom", "age": 20}\n\n# 删除一个字典\n',
      difficulty: 'easy',
      points: 10,
    },
  ],
  9: [
    {
      title: '检查驾驶年龄',
      description: '使用 input 获取用户输入年龄。如果用户 18 岁或以上，给出反馈：你已经足够大，可以学习驾驶。如果未满 18 岁，则给出需要等待的年数',
      starter_code: '# age = int(input("输入你的年龄："))\n\n# 临时使用固定值\nage = 20\n\n# 检查年龄\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '比较年龄',
      description: '使用 if…else 比较 my_age 和 your_age 的值。谁更年长（我还是你）？',
      starter_code: 'my_age = 25\n# your_age = int(input("输入你的年龄："))\n\n# 临时使用固定值\nyour_age = 30\n\n# 比较年龄\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '比较两个数字',
      description: '使用输入提示从用户处获得两个数字。如果 a 大于 b，返回 a 大于 b，如果 a 小于 b，返回 a 小于 b，否则返回 a 等于 b',
      starter_code: '# a = int(input("输入第一个数字："))\n# b = int(input("输入第二个数字："))\n\n# 临时使用固定值\na = 4\nb = 3\n\n# 比较数字\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '给出成绩等级',
      description: '编写代码，根据学生的分数给出等级（80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F）',
      starter_code: '# score = int(input("输入分数："))\n\n# 临时使用固定值\nscore = 85\n\n# 判断等级\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '检查季节',
      description: '检查是否是秋天、冬天、春天或夏天',
      starter_code: '# month = input("输入月份：")\n\n# 临时使用固定值\nmonth = "September"\n\n# 判断季节\n# 秋天: September, October, November\n# 冬天: December, January, February\n# 春天: March, April, May\n# 夏天: June, July, August\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '检查水果列表',
      description: '检查水果列表中是否已经有某个水果，如果没有则添加',
      starter_code: 'fruits = ["banana", "orange", "mango", "lemon"]\n\n# fruit = input("输入水果名称：")\n\n# 临时使用固定值\nfruit = "apple"\n\n# 检查并添加\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建个人字典',
      description: '创建一个人物字典，检查 skills 键是否存在，如果存在打印中间技能',
      starter_code: 'person = {\n    "first_name": "Tom",\n    "last_name": "Smith",\n    "age": 25,\n    "skills": ["Python", "JavaScript", "HTML", "CSS", "React"]\n}\n\n# 检查 skills 键并打印中间技能\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '检查婚姻状况和技能',
      description: '检查 person 字典是否有 skills 键，如果有，检查是否有 "Python" 技能并打印结果',
      starter_code: 'person = {\n    "first_name": "Tom",\n    "skills": ["Python", "JavaScript"]\n}\n\n# 检查技能\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '判断开发者类型 - 前端',
      description: '如果一个人的技能只有 JavaScript 和 React，打印 "他是一个前端开发者"',
      starter_code: 'person = {\n    "skills": ["JavaScript", "React"]\n}\n\n# 判断开发者类型\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '判断开发者类型 - 后端',
      description: '如果一个人的技能有 Node、Python 或 MongoDB，打印 "他是一个后端开发者"',
      starter_code: 'person = {\n    "skills": ["Node", "Python", "MongoDB"]\n}\n\n# 判断开发者类型\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '判断开发者类型 - 全栈',
      description: '如果一个人的技能有 React、Node 和 MongoDB，打印 "他是一个全栈开发者"',
      starter_code: 'person = {\n    "skills": ["React", "Node", "MongoDB", "Python"]\n}\n\n# 判断开发者类型\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '检查婚姻和居住',
      description: '如果这个人已婚并且住在芬兰，打印相应信息',
      starter_code: 'person = {\n    "first_name": "Tom",\n    "is_married": True,\n    "country": "Finland"\n}\n\n# 检查条件并打印\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  10: [
    // 练习：一级
    {
      title: '使用 while 循环打印 0-10',
      description: '使用 while 循环迭代 0 到 10',
      starter_code: '# 使用 while 循环\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用 while 循环倒序打印',
      description: '使用 while 循环迭代 10 到 0',
      starter_code: '# 使用 while 循环倒序\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用 for 循环打印 0-10',
      description: '使用 for 循环迭代 0 到 10',
      starter_code: '# 使用 for 循环\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用 for 循环倒序打印',
      description: '使用 for 循环迭代 10 到 0',
      starter_code: '# 使用 for 循环倒序\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '打印七行三角形',
      description: '编写循环打印以下图案（7 行）',
      starter_code: '# 打印图案\n# #\n# ##\n# ###\n# ####\n# #####\n# ######\n# #######\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '打印乘法表',
      description: '使用嵌套循环创建以下图案',
      starter_code: '# 打印乘法表\n# 1 x 1 = 1\n# 2 x 2 = 4\n# ...\n# 10 x 10 = 100\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '遍历列表',
      description: '用 for 循环遍历列表 ["Python", "Numpy", "Pandas", "Django", "Flask"]，并打印输出每个元素',
      starter_code: 'technologies = ["Python", "Numpy", "Pandas", "Django", "Flask"]\n\n# 遍历列表\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '打印偶数',
      description: '用 for 循环从 0 到 100 遍历并且打印输出所有偶数',
      starter_code: '# 打印偶数\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '打印奇数',
      description: '用 for 循环从 0 到 100 遍历并且打印输出所有奇数',
      starter_code: '# 打印奇数\n',
      difficulty: 'easy',
      points: 15,
    },
    // 练习：二级
    {
      title: '计算 0-100 的和',
      description: '使用 for 循环从 0 到 100 遍历并且输出所有数字的和',
      starter_code: '# 计算总和\ntotal = 0\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算奇数和偶数的和',
      description: '使用 for 循环从 0 到 100 遍历并且分别输出所有奇数和所有偶数的和',
      starter_code: '# 计算奇数和偶数的和\nodd_sum = 0\neven_sum = 0\n',
      difficulty: 'medium',
      points: 20,
    },
    // 练习：三级
    {
      title: '提取包含 land 的国家',
      description: '循环遍历国家列表，提取出所有包含字母 "land" 的国家',
      starter_code: 'countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland", "Ireland", "Scotland", "England"]\n\n# 提取包含 "land" 的国家\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '反转列表',
      description: '有一个列表 fruits，使用循环反转列表中的元素',
      starter_code: 'fruits = ["banana", "orange", "mango", "lemon"]\n\n# 反转列表\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建数字列表',
      description: '创建一个包含 0 到 10 的数字列表',
      starter_code: '# 创建数字列表\n',
      difficulty: 'easy',
      points: 15,
    },
  ],
};

async function updateExercises() {
  try {
    console.log('🔄 开始更新 Day 6-10 的魔法练习题...\n');

    for (let day = 6; day <= 10; day++) {
      console.log(`📝 处理 Day ${day}...`);

      // 获取关卡ID
      const [level] = await sql`
        SELECT id FROM levels WHERE level_number = ${day}
      `;

      if (!level) {
        console.log(`❌ Day ${day} 关卡不存在，跳过`);
        continue;
      }

      // 删除旧的练习题
      await sql`
        DELETE FROM exercises WHERE level_id = ${level.id}
      `;
      console.log(`  🗑️  已删除旧练习题`);

      // 插入新的练习题
      const exercises = exercisesData[day];
      for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i];
        await sql`
          INSERT INTO exercises (
            level_id, title, description, starter_code,
            test_cases, difficulty, points, order_index
          )
          VALUES (
            ${level.id},
            ${exercise.title},
            ${exercise.description},
            ${exercise.starter_code},
            ${JSON.stringify([])},
            ${exercise.difficulty},
            ${exercise.points},
            ${i}
          )
        `;
      }

      console.log(`  ✅ Day ${day} 已添加 ${exercises.length} 个练习题`);
    }

    console.log('\n🎉 所有练习题更新完成！');
    console.log('\n📊 更新统计：');
    console.log(`  Day 6: ${exercisesData[6].length} 个练习题`);
    console.log(`  Day 7: ${exercisesData[7].length} 个练习题`);
    console.log(`  Day 8: ${exercisesData[8].length} 个练习题`);
    console.log(`  Day 9: ${exercisesData[9].length} 个练习题`);
    console.log(`  Day 10: ${exercisesData[10].length} 个练习题`);
    console.log(`  总计: ${Object.values(exercisesData).reduce((sum, arr) => sum + arr.length, 0)} 个练习题`);
  } catch (error) {
    console.error('❌ 更新失败:', error);
    throw error;
  }
}

updateExercises().catch(console.error);

