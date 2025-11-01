import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Day 11-17 的完整练习题
const exercisesData = {
  11: [
    // Level 1
    {
      title: '两数相加函数',
      description: '声明一个函数 add_two_numbers，它接受两个参数并返回它们的和',
      starter_code: 'def add_two_numbers(num1, num2):\n    # 返回两数之和\n    pass\n\n# 测试\nprint(add_two_numbers(3, 5))\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '计算圆的面积',
      description: '编写一个函数 area_of_circle 计算圆的面积（area = π x r x r）',
      starter_code: 'import math\n\ndef area_of_circle(r):\n    # 计算圆的面积\n    pass\n\n# 测试\nprint(area_of_circle(5))\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '不定参数求和',
      description: '编写一个名为 add_all_nums 的函数，它接受不定数量的参数并求和所有参数',
      starter_code: 'def add_all_nums(*args):\n    # 检查所有参数是否为数字\n    # 求和并返回\n    pass\n\n# 测试\nprint(add_all_nums(1, 2, 3, 4, 5))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '温度转换',
      description: '编写一个函数将摄氏度转换为华氏度：°F = (°C x 9/5) + 32',
      starter_code: 'def convert_celsius_to_fahrenheit(celsius):\n    # 转换温度\n    pass\n\n# 测试\nprint(convert_celsius_to_fahrenheit(0))  # 应该是32\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '判断季节',
      description: '编写一个名为 check_season 的函数，它接受一个月份作为参数并返回季节',
      starter_code: 'def check_season(month):\n    # 判断季节\n    # 秋季: September, October, November\n    # 冬季: December, January, February\n    # 春季: March, April, May\n    # 夏季: June, July, August\n    pass\n\n# 测试\nprint(check_season("September"))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算斜率',
      description: '编写一个名为 calculate_slope 的函数，计算线性方程的斜率',
      starter_code: 'def calculate_slope(x1, y1, x2, y2):\n    # 斜率 = (y2-y1)/(x2-x1)\n    pass\n\n# 测试\nprint(calculate_slope(1, 1, 2, 2))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '解二次方程',
      description: '编写一个函数计算二次方程的解集：ax² + bx + c = 0',
      starter_code: 'import math\n\ndef solve_quadratic_eqn(a, b, c):\n    # 使用求根公式\n    # x = (-b ± √(b²-4ac)) / (2a)\n    pass\n\n# 测试\nprint(solve_quadratic_eqn(1, -3, 2))\n',
      difficulty: 'hard',
      points: 30,
    },
    {
      title: '打印列表',
      description: '声明一个名为 print_list 的函数，它接受一个列表作为参数，并打印列表的每个元素',
      starter_code: 'def print_list(lst):\n    # 打印列表每个元素\n    pass\n\n# 测试\nprint_list([1, 2, 3, 4, 5])\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '反转列表',
      description: '声明一个名为 reverse_list 的函数，返回数组的反转（使用循环）',
      starter_code: 'def reverse_list(lst):\n    # 反转列表\n    pass\n\n# 测试\nprint(reverse_list([1, 2, 3, 4, 5]))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '大写列表项',
      description: '声明一个名为 capitalize_list_items 的函数，返回大写的列表项',
      starter_code: 'def capitalize_list_items(lst):\n    # 将列表中的字符串转为大写\n    pass\n\n# 测试\nprint(capitalize_list_items(["a", "b", "c"]))\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '添加项到列表',
      description: '声明一个名为 add_item 的函数，返回在末尾添加项的列表',
      starter_code: 'def add_item(lst, item):\n    # 添加项并返回\n    pass\n\n# 测试\nfood_staff = ["Potato", "Tomato", "Mango", "Milk"]\nprint(add_item(food_staff, "Meat"))\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '从列表移除项',
      description: '声明一个名为 remove_item 的函数，返回移除该项后的列表',
      starter_code: 'def remove_item(lst, item):\n    # 移除项并返回\n    pass\n\n# 测试\nfood_staff = ["Potato", "Tomato", "Mango", "Milk"]\nprint(remove_item(food_staff, "Mango"))\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '数字范围求和',
      description: '声明一个名为 sum_of_numbers 的函数，将范围内的所有数字相加',
      starter_code: 'def sum_of_numbers(n):\n    # 计算从0到n的所有数字之和\n    pass\n\n# 测试\nprint(sum_of_numbers(10))\n',
      difficulty: 'easy',
      points: 15,
    },
  ],
  12: [
    // Level 1
    {
      title: '生成随机用户ID',
      description: '编写一个生成六位数/字符 random_user_id 的函数',
      starter_code: 'import random\nimport string\n\ndef random_user_id():\n    # 生成6位随机ID\n    pass\n\n# 测试\nprint(random_user_id())\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '自定义长度用户ID',
      description: '声明一个名为 user_id_gen_by_user 的函数，接受字符数量和ID数量作为输入',
      starter_code: 'import random\nimport string\n\ndef user_id_gen_by_user():\n    # num_chars = int(input("字符数: "))\n    # num_ids = int(input("ID数量: "))\n    \n    # 临时使用固定值\n    num_chars = 6\n    num_ids = 5\n    \n    # 生成指定数量的ID\n    pass\n\n# 测试\nuser_id_gen_by_user()\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '生成RGB颜色',
      description: '编写一个名为 rgb_color_gen 的函数，生成RGB颜色（每个值范围从0到255）',
      starter_code: 'import random\n\ndef rgb_color_gen():\n    # 生成RGB颜色\n    pass\n\n# 测试\nprint(rgb_color_gen())  # 例如: rgb(125,244,255)\n',
      difficulty: 'easy',
      points: 15,
    },
    // Level 2
    {
      title: '生成十六进制颜色列表',
      description: '编写一个函数 list_of_hexa_colors，返回任意数量的十六进制颜色',
      starter_code: 'import random\n\ndef list_of_hexa_colors(num):\n    # 生成十六进制颜色列表\n    # 格式: #RRGGBB\n    pass\n\n# 测试\nprint(list_of_hexa_colors(5))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '生成RGB颜色列表',
      description: '编写一个函数 list_of_rgb_colors，返回任意数量的RGB颜色',
      starter_code: 'import random\n\ndef list_of_rgb_colors(num):\n    # 生成RGB颜色列表\n    pass\n\n# 测试\nprint(list_of_rgb_colors(5))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '通用颜色生成器',
      description: '编写一个函数 generate_colors，可以生成任意数量的十六进制或RGB颜色',
      starter_code: 'import random\n\ndef generate_colors(color_type, num):\n    # color_type: "hexa" 或 "rgb"\n    # num: 生成数量\n    pass\n\n# 测试\nprint(generate_colors("hexa", 3))\nprint(generate_colors("rgb", 3))\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  13: [
    {
      title: '过滤负数和零',
      description: '使用列表推导式过滤出列表中的负数和零',
      starter_code: 'numbers = [-4, -3, -2, -1, 0, 2, 4, 6]\n\n# 过滤出正数\npositive_numbers = \n\nprint(positive_numbers)\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '展平嵌套列表',
      description: '将嵌套列表展平为一维列表',
      starter_code: 'list_of_lists = [[[1, 2, 3]], [[4, 5, 6]], [[7, 8, 9]]]\n\n# 展平列表\nflattened = \n\nprint(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建幂次元组',
      description: '使用列表推导式创建包含数字及其幂次的元组列表',
      starter_code: '# 创建元组列表: (i, 1, i, i^2, i^3, i^4, i^5)\nresult = \n\nprint(result)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '展平国家列表',
      description: '将国家列表展平并添加国家代码',
      starter_code: 'countries = [[("Finland", "Helsinki")], [("Sweden", "Stockholm")], [("Norway", "Oslo")]]\n\n# 展平并格式化\nresult = \n\nprint(result)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '转换为字典列表',
      description: '将国家列表转换为字典列表',
      starter_code: 'countries = [[("Finland", "Helsinki")], [("Sweden", "Stockholm")], [("Norway", "Oslo")]]\n\n# 转换为字典列表\nresult = \n\nprint(result)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '名称列表展平',
      description: '将名称列表展平为单个字符串列表',
      starter_code: 'names = [[("Asabeneh", "Yetayeh")], [("David", "Smith")], [("Donald", "Trump")], [("Bill", "Gates")]]\n\n# 展平名称\nresult = \n\nprint(result)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: 'Lambda函数求斜率',
      description: '编写一个lambda函数计算斜率',
      starter_code: '# 使用lambda函数计算斜率\nslope = lambda x1, y1, x2, y2: \n\n# 测试\nprint(slope(1, 2, 3, 4))\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  14: [
    // 简单
    {
      title: '解释高阶函数概念',
      description: '解释 map、filter 和 reduce 的区别',
      starter_code: '# map: 对每个元素应用函数，返回新列表\n# filter: 过滤满足条件的元素\n# reduce: 将列表减少为单个值\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '解释高阶函数、闭包和装饰器',
      description: '解释高阶函数、闭包和装饰器的区别',
      starter_code: '# 高阶函数: 接受函数作为参数或返回函数\n# 闭包: 内部函数引用外部函数的变量\n# 装饰器: 修改函数行为的函数\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用for循环打印国家',
      description: '使用for循环打印countries列表中的每个国家',
      starter_code: 'countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland"]\n\n# 打印每个国家\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用for循环打印名字',
      description: '使用for循环打印names列表中的每个名称',
      starter_code: 'names = ["Asabeneh", "Lidiya", "Ermias", "Abraham"]\n\n# 打印每个名字\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用for循环打印数字',
      description: '使用for循环打印numbers列表中的每个数字',
      starter_code: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# 打印每个数字\n',
      difficulty: 'easy',
      points: 10,
    },
    // 中等
    {
      title: '使用map转大写',
      description: '使用map将countries列表中的每个国家更改为大写',
      starter_code: 'countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland"]\n\n# 使用map转为大写\nupper_countries = \n\nprint(list(upper_countries))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '使用map计算平方',
      description: '使用map将numbers列表中的每个数字更改为平方',
      starter_code: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# 使用map计算平方\nsquared = \n\nprint(list(squared))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '使用map转换名字',
      description: '使用map将names列表中的每个名称更改为大写',
      starter_code: 'names = ["Asabeneh", "Lidiya", "Ermias", "Abraham"]\n\n# 使用map转为大写\nupper_names = \n\nprint(list(upper_names))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '使用filter过滤国家',
      description: '使用filter过滤出包含"land"的国家',
      starter_code: 'countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland"]\n\n# 过滤包含land的国家\nland_countries = \n\nprint(list(land_countries))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '过滤六字符国家',
      description: '使用filter过滤出正好六个字符的国家',
      starter_code: 'countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland"]\n\n# 过滤六字符国家\nsix_char_countries = \n\nprint(list(six_char_countries))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '使用reduce求和',
      description: '使用reduce对numbers列表中的所有数字求和',
      starter_code: 'from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# 使用reduce求和\ntotal = \n\nprint(total)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '链式操作',
      description: '链接多个操作：过滤偶数、平方、求和',
      starter_code: 'from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# 链式操作\nresult = \n\nprint(result)\n',
      difficulty: 'hard',
      points: 30,
    },
  ],
  15: [
    {
      title: 'Python错误类型学习',
      description: '打开Python交互式shell，尝试本节中介绍的所有示例错误类型',
      starter_code: '# 尝试以下错误类型：\n\n# 1. SyntaxError\n# print "hello"  # 缺少括号\n\n# 2. NameError\n# print(undefined_variable)\n\n# 3. IndexError\n# lst = [1, 2, 3]\n# print(lst[10])\n\n# 4. TypeError\n# print("3" + 3)\n\n# 5. ZeroDivisionError\n# print(10 / 0)\n\n# 在这里尝试不同的错误\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '理解SyntaxError',
      description: '创建并修复一个SyntaxError',
      starter_code: '# 创建一个语法错误并修复它\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '理解NameError',
      description: '创建并修复一个NameError',
      starter_code: '# 创建一个名称错误并修复它\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '理解IndexError',
      description: '创建并修复一个IndexError',
      starter_code: '# 创建一个索引错误并修复它\nlst = [1, 2, 3]\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '理解TypeError',
      description: '创建并修复一个TypeError',
      starter_code: '# 创建一个类型错误并修复它\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '理解ValueError',
      description: '创建并修复一个ValueError',
      starter_code: '# 创建一个值错误并修复它\n# 提示：尝试将非数字字符串转换为整数\n',
      difficulty: 'easy',
      points: 10,
    },
  ],
  16: [
    {
      title: '获取当前时间信息',
      description: '从datetime模块获取当前的日、月、年、小时、分钟和时间戳',
      starter_code: 'from datetime import datetime\n\n# 获取当前时间\nnow = datetime.now()\n\n# 提取各个部分\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '格式化当前日期',
      description: '使用格式 "%m/%d/%Y, %H:%M:%S" 格式化当前日期',
      starter_code: 'from datetime import datetime\n\nnow = datetime.now()\n\n# 格式化日期\nformatted = \n\nprint(formatted)\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '字符串转时间',
      description: '将时间字符串 "2019年12月5日" 转换为时间对象',
      starter_code: 'from datetime import datetime\n\ndate_string = "December 5, 2019"\n\n# 转换为datetime对象\ndate_object = \n\nprint(date_object)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算到新年的时间',
      description: '计算现在和新年之间的时间差',
      starter_code: 'from datetime import datetime\n\nnow = datetime.now()\nnew_year = datetime(now.year + 1, 1, 1)\n\n# 计算时间差\ntime_diff = \n\nprint(time_diff)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算Unix纪元时间差',
      description: '计算1970年1月1日和现在之间的时间差',
      starter_code: 'from datetime import datetime\n\nnow = datetime.now()\nepoch = datetime(1970, 1, 1)\n\n# 计算时间差\ntime_diff = \n\nprint(time_diff)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: 'datetime模块应用思考',
      description: '思考datetime模块的实际应用场景',
      starter_code: '# datetime模块可以用于：\n# 1. 时间序列分析\n# 2. 获取应用程序中任何活动的时间戳\n# 3. 在博客上添加帖子时间\n# 4. 日志记录\n# 5. 计算年龄\n# 6. 倒计时计时器\n\n# 写出你的想法和示例代码\n',
      difficulty: 'easy',
      points: 15,
    },
  ],
  17: [
    {
      title: '基本异常处理',
      description: '使用try-except处理除零错误',
      starter_code: 'try:\n    # 尝试除以零\n    pass\nexcept ZeroDivisionError:\n    # 处理错误\n    pass\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '类型错误处理',
      description: '使用try-except处理类型错误',
      starter_code: 'try:\n    # 尝试不兼容的类型操作\n    pass\nexcept TypeError:\n    # 处理错误\n    pass\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '用户输入异常处理',
      description: '处理用户输入的年龄转换错误',
      starter_code: 'try:\n    # age = int(input("输入你的年龄："))\n    age = "abc"  # 模拟错误输入\n    age = int(age)\n    print(f"你的年龄是 {age}")\nexcept ValueError:\n    print("请输入有效的数字")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '多重异常处理',
      description: '使用多个except块处理不同类型的错误',
      starter_code: 'try:\n    # 执行可能产生多种错误的代码\n    pass\nexcept TypeError:\n    print("类型错误")\nexcept ValueError:\n    print("值错误")\nexcept ZeroDivisionError:\n    print("除零错误")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '列表解包',
      description: '使用解包操作符解包列表',
      starter_code: 'numbers = [1, 2, 3, 4, 5]\n\n# 解包列表\nfirst, *rest, last = numbers\n\nprint(first)  # 1\nprint(rest)   # [2, 3, 4]\nprint(last)   # 5\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '字典解包',
      description: '使用解包操作符解包字典',
      starter_code: 'dict1 = {"a": 1, "b": 2}\ndict2 = {"c": 3, "d": 4}\n\n# 合并字典\nmerged = \n\nprint(merged)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '使用enumerate',
      description: '使用enumerate遍历列表并获取索引',
      starter_code: 'countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]\n\n# 使用enumerate\nfor index, country in enumerate(countries):\n    print(f"{index}: {country}")\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '使用zip',
      description: '使用zip同时遍历多个列表',
      starter_code: 'names = ["Asabeneh", "Lidiya", "Ermias", "Abraham"]\nages = [25, 24, 23, 26]\ncountries = ["Finland", "Sweden", "Norway", "Denmark"]\n\n# 使用zip\nfor name, age, country in zip(names, ages, countries):\n    print(f"{name} is {age} years old from {country}")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
};

async function updateExercises() {
  try {
    console.log('🔄 开始更新 Day 11-17 的魔法练习题...\n');

    for (let day = 11; day <= 17; day++) {
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
    for (let day = 11; day <= 17; day++) {
      console.log(`  Day ${day}: ${exercisesData[day].length} 个练习题`);
    }
    console.log(`  总计: ${Object.values(exercisesData).reduce((sum, arr) => sum + arr.length, 0)} 个练习题`);
  } catch (error) {
    console.error('❌ 更新失败:', error);
    throw error;
  }
}

updateExercises().catch(console.error);

