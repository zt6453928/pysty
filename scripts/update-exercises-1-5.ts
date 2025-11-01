import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Day 1-5 的完整练习题
const exercisesData = {
  1: [
    // 练习：等级 1
    {
      title: '检查Python版本',
      description: '检查你使用的 Python 版本',
      starter_code: '# 提示：使用 python --version 或在代码中检查\nimport sys\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: 'Python Shell 基础运算 - 加法',
      description: '在 Python Shell 中执行加法运算：3 + 4',
      starter_code: '# 计算 3 + 4\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: 'Python Shell 基础运算 - 减法',
      description: '在 Python Shell 中执行减法运算：3 - 4',
      starter_code: '# 计算 3 - 4\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: 'Python Shell 基础运算 - 乘法',
      description: '在 Python Shell 中执行乘法运算：3 * 4',
      starter_code: '# 计算 3 * 4\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: 'Python Shell 基础运算 - 除法',
      description: '在 Python Shell 中执行除法运算：3 / 4',
      starter_code: '# 计算 3 / 4\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: 'Python Shell 基础运算 - 取模',
      description: '在 Python Shell 中执行取模运算：3 % 4',
      starter_code: '# 计算 3 % 4\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: 'Python Shell 基础运算 - 指数',
      description: '在 Python Shell 中执行指数运算：3 ** 4',
      starter_code: '# 计算 3 ** 4\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: 'Python Shell 基础运算 - 整除',
      description: '在 Python Shell 中执行整除运算：3 // 4',
      starter_code: '# 计算 3 // 4\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '在 Python Shell 中编写字符串 - 你的名字',
      description: '在 Python Shell 中编写一个字符串：你的名字',
      starter_code: '# 编写你的名字字符串\nname = \nprint(name)\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '检查数据类型 - 整数',
      description: '检查数字 10 的数据类型',
      starter_code: '# 检查 10 的数据类型\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '检查数据类型 - 浮点数',
      description: '检查数字 9.8 的数据类型',
      starter_code: '# 检查 9.8 的数据类型\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '检查数据类型 - 复数',
      description: '检查数字 3.14 的数据类型',
      starter_code: '# 检查 3.14 的数据类型\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '检查数据类型 - 字符串',
      description: '检查字符串 "Asabeneh" 的数据类型',
      starter_code: '# 检查字符串的数据类型\nname = "Asabeneh"\n',
      difficulty: 'easy',
      points: 10,
    },
    // 练习：等级 2
    {
      title: '创建 Python 文件',
      description: '在 30DaysOfPython 文件夹中创建一个名为 day_1 的文件夹，并创建 helloworld.py 文件',
      starter_code: '# 在文件中编写你的第一个 Python 程序\nprint("Hello, World!")\n',
      difficulty: 'easy',
      points: 15,
    },
    // 练习：等级 3
    {
      title: '编写不同数据类型示例',
      description: '为不同的 Python 数据类型编写示例：数字（整数、浮点数、复数）、字符串、布尔值、列表、元组、集合和字典',
      starter_code: '# 整数\nmy_int = \n\n# 浮点数\nmy_float = \n\n# 复数\nmy_complex = \n\n# 字符串\nmy_string = \n\n# 布尔值\nmy_bool = \n\n# 列表\nmy_list = \n\n# 元组\nmy_tuple = \n\n# 集合\nmy_set = \n\n# 字典\nmy_dict = \n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算欧几里得距离',
      description: '找到点 (2, 3) 和 (10, 8) 之间的欧几里得距离',
      starter_code: '# 欧几里得距离公式: sqrt((x2-x1)^2 + (y2-y1)^2)\nimport math\n\nx1, y1 = 2, 3\nx2, y2 = 10, 8\n\n# 计算距离\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  2: [
    // 练习：等级 1
    {
      title: '创建变量文件',
      description: '在 30DaysOfPython 文件夹内创建一个 day_2 文件夹，在这个文件夹里创建一个 variables.py 文件',
      starter_code: '# 第二天：30 Days of python programming\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '添加注释',
      description: '输入注释 "第二天：30 Days of python programming"',
      starter_code: '# 在这里添加注释\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 first_name 变量',
      description: '声明一个 first_name 变量，并为它赋值',
      starter_code: '# 声明 first_name 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 last_name 变量',
      description: '声明一个 last_name 变量，并为它赋值',
      starter_code: '# 声明 last_name 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 full_name 变量',
      description: '声明一个 full_name 变量，并为它赋值',
      starter_code: '# 声明 full_name 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 country 变量',
      description: '声明一个 country 变量，并为它赋值',
      starter_code: '# 声明 country 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 city 变量',
      description: '声明一个 city 变量，并为它赋值',
      starter_code: '# 声明 city 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 age 变量',
      description: '声明一个 age 变量，并为它赋值',
      starter_code: '# 声明 age 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 year 变量',
      description: '声明一个 year 变量，并为它赋值',
      starter_code: '# 声明 year 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 is_married 变量',
      description: '声明一个 is_married 变量，并为它赋值',
      starter_code: '# 声明 is_married 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 is_true 变量',
      description: '声明一个 is_true 变量，并为它赋值',
      starter_code: '# 声明 is_true 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 is_light_on 变量',
      description: '声明一个 is_light_on 变量，并为它赋值',
      starter_code: '# 声明 is_light_on 变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '在一行中声明多个变量',
      description: '在一行中声明多个变量',
      starter_code: '# 在一行中声明多个变量\n',
      difficulty: 'easy',
      points: 15,
    },
    // 练习：等级 2
    {
      title: '检查变量数据类型',
      description: '使用 type() 内置函数检查你声明变量的数据类型',
      starter_code: 'first_name = "Python"\nage = 25\n\n# 检查数据类型\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '计算名字长度',
      description: '使用 len() 内置函数，算出你 first_name 变量的长度',
      starter_code: 'first_name = "Python"\n\n# 计算长度\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '比较名字长度',
      description: '比较你 first_name 和 last_name 变量的长度',
      starter_code: 'first_name = "Python"\nlast_name = "Programmer"\n\n# 比较长度\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '数字运算 - 加法',
      description: '声明变量 num_one 为5，num_two 为4，将它们相加并赋值给 total 变量',
      starter_code: 'num_one = 5\nnum_two = 4\n\n# 计算总和\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '数字运算 - 减法',
      description: '将 num_two 从 num_one 中减去，并赋值给 diff 变量',
      starter_code: 'num_one = 5\nnum_two = 4\n\n# 计算差值\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '数字运算 - 乘法',
      description: '将 num_one 和 num_two 相乘，并赋值给 product 变量',
      starter_code: 'num_one = 5\nnum_two = 4\n\n# 计算乘积\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '数字运算 - 除法',
      description: '将 num_one 除以 num_two，并赋值给 division 变量',
      starter_code: 'num_one = 5\nnum_two = 4\n\n# 计算除法\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '数字运算 - 取模',
      description: '使用模数除法求出 num_two 除以 num_one 的结果，并将结果赋给变量 remainder',
      starter_code: 'num_one = 5\nnum_two = 4\n\n# 计算余数\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '数字运算 - 指数',
      description: '计算 num_one 的 num_two 次方并将值赋给变量 exp',
      starter_code: 'num_one = 5\nnum_two = 4\n\n# 计算指数\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '数字运算 - 整除',
      description: '计算 num_one 除以 num_two 商的整数部分（整除操作），并将结果赋给变量 floor_division',
      starter_code: 'num_one = 5\nnum_two = 4\n\n# 计算整除\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '计算圆的面积',
      description: '圆的半径为 30 米，计算圆的面积并将值赋给名为 area_of_circle 的变量',
      starter_code: '# 圆的面积 = π * r^2\nradius = 30\npi = 3.14\n\n# 计算面积\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算圆的周长',
      description: '圆的半径为 30 米，计算圆的周长并将值赋给名为 circum_of_circle 的变量',
      starter_code: '# 圆的周长 = 2 * π * r\nradius = 30\npi = 3.14\n\n# 计算周长\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '用户输入计算面积',
      description: '将半径作为用户输入并计算面积',
      starter_code: '# 获取用户输入\n# radius = float(input("请输入半径: "))\nradius = 30  # 临时使用固定值\npi = 3.14\n\n# 计算面积\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '获取用户信息',
      description: '使用内置输入函数从用户那里获取名字、姓氏、国家和年龄',
      starter_code: '# 获取用户输入\n# first_name = input("请输入名字: ")\n# last_name = input("请输入姓氏: ")\n# country = input("请输入国家: ")\n# age = input("请输入年龄: ")\n\n# 临时使用固定值\nfirst_name = "Python"\nlast_name = "Learner"\ncountry = "China"\nage = "25"\n\nprint(f"姓名: {first_name} {last_name}")\nprint(f"国家: {country}")\nprint(f"年龄: {age}")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  3: [
    // Day 3 的23个练习题
    {
      title: '声明年龄变量',
      description: '声明一个值是你年龄的整型变量',
      starter_code: '# 声明年龄变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明身高变量',
      description: '声明一个值是你身高的浮点型变量',
      starter_code: '# 声明身高变量（单位：米）\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明复数变量',
      description: '声明一个值是复数的变量',
      starter_code: '# 声明复数变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '计算三角形面积',
      description: '编写一个脚本，提示用户输入三角形的底和高，并计算这个三角形的面积（面积 = 0.5 x b x h）',
      starter_code: '# 获取用户输入\n# base = float(input("输入底: "))\n# height = float(input("输入高: "))\n\n# 临时使用固定值\nbase = 20\nheight = 10\n\n# 计算面积\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '计算三角形周长',
      description: '编写一个脚本，提示用户输入三角形的边 a、边 b 和边 c，计算三角形的周长（周长 = a + b + c）',
      starter_code: '# 获取用户输入\n# a = float(input("输入边 a: "))\n# b = float(input("输入边 b: "))\n# c = float(input("输入边 c: "))\n\n# 临时使用固定值\na = 5\nb = 4\nc = 3\n\n# 计算周长\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '计算矩形面积和周长',
      description: '提示用户输入矩形的长度和宽度，计算其面积（面积 = 长 x 宽）和周长（周长 = 2 x (长 + 宽)）',
      starter_code: '# 获取用户输入\nlength = 10\nwidth = 5\n\n# 计算面积和周长\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '计算圆的面积和周长',
      description: '提示用户输入圆的半径，计算面积（面积 = pi x r x r）和周长（周长 = 2 x pi x r），其中 pi = 3.14',
      starter_code: 'pi = 3.14\nradius = 10\n\n# 计算面积和周长\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '计算斜率和截距',
      description: '计算 y = 2x - 2 的斜率、x 截距和 y 截距',
      starter_code: '# y = 2x - 2\n# 斜率 m = 2\n# y截距：令 x=0, y = -2\n# x截距：令 y=0, 0 = 2x - 2, x = 1\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算两点间的斜率',
      description: '斜率是 (m = y2-y1/x2-x1)。找到点 (2, 2) 和点 (6,10) 之间的斜率',
      starter_code: 'x1, y1 = 2, 2\nx2, y2 = 6, 10\n\n# 计算斜率\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '比较斜率',
      description: '比较前两个练习中的斜率',
      starter_code: '# 第一个斜率\nslope1 = 2\n\n# 第二个斜率\nx1, y1 = 2, 2\nx2, y2 = 6, 10\nslope2 = (y2 - y1) / (x2 - x1)\n\n# 比较斜率\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算 y 值',
      description: '计算 y 的值（y = x^2 + 6x + 9）。尝试使用不同的 x 值，并找出 y 何时为 0',
      starter_code: '# y = x^2 + 6x + 9\nx = 0\ny = x**2 + 6*x + 9\nprint(f"当 x={x} 时，y={y}")\n\n# 尝试其他 x 值\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '比较字符串长度',
      description: '求出 "python" 和 "dragon" 的长度，并进行比较',
      starter_code: 'python_len = len("python")\ndragon_len = len("dragon")\n\n# 比较长度\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '使用 and 运算符',
      description: '使用 and 运算符检查 "python" 和 "dragon" 中是否都有 "on"',
      starter_code: '# 检查是否都包含 "on"\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查是否包含 jargon',
      description: '使用 in 运算符检查 "I hope this course is not full of jargon" 中是否有 jargon',
      starter_code: 'sentence = "I hope this course is not full of jargon"\n\n# 检查是否包含 "jargon"\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查不包含 on',
      description: '检查 "dragon" 和 "python" 中都没有 "on"',
      starter_code: '# 检查是否都不包含 "on"\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '字符串长度转换',
      description: '找到文本 python 的长度，并将该值转换为浮点数，然后将其转换为字符串',
      starter_code: 'text = "python"\nlength = len(text)\n\n# 转换为浮点数，然后转换为字符串\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查偶数或奇数',
      description: '偶数可以被 2 整除，余数为零。如何使用 Python 检查一个数字是偶数还是奇数？',
      starter_code: 'number = 10\n\n# 检查是否为偶数\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查整除结果',
      description: '检查 7 除以 3 的Floor除法是否等于 2.7 的整数转换值',
      starter_code: '# 比较两个值\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查类型相等',
      description: '检查 "10" 的类型是否等于 10 的类型',
      starter_code: '# 比较类型\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查转换结果',
      description: '检查 int("9.8") 是否等于 10',
      starter_code: '# 尝试转换并比较\n# 注意：这会产生错误\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算工资',
      description: '编写一个脚本，提示用户输入工时和时薪，计算用户的工资',
      starter_code: '# hours = int(input("输入工时: "))\n# rate = int(input("输入时薪: "))\n\n# 临时使用固定值\nhours = 40\nrate = 28\n\n# 计算工资\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '计算活了多少秒',
      description: '编写一个脚本，提示用户输入年数，计算一个人活了多少秒（假设一个人可以活一百年）',
      starter_code: '# years = int(input("输入你已经活了多少年: "))\n\n# 临时使用固定值\nyears = 25\n\n# 计算秒数\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '打印数字表格',
      description: '编写一个 Python 脚本，显示数字表格（1 1 1 1 1 到 5 1 5 25 125）',
      starter_code: '# 打印表格\nfor i in range(1, 6):\n    print(i, 1, i, i**2, i**3)\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  4: [
    // Day 4 的36个练习题
    {
      title: '连接字符串',
      description: '将字符串 "Thirty", "Days", "Of", "Python" 连接为一个字符串 "Thirty Days Of Python"',
      starter_code: '# 连接字符串\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '连接字符串2',
      description: '将字符串 "Coding", "For", "All" 连接为一个字符串 "Coding For All"',
      starter_code: '# 连接字符串\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明 company 变量',
      description: '声明一个名为 company 的变量，并将其赋值为初始值 "Coding For All"',
      starter_code: '# 声明变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '打印 company 变量',
      description: '使用 print() 打印变量 company',
      starter_code: 'company = "Coding For All"\n\n# 打印变量\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '打印字符串长度',
      description: '使用 len() 方法和 print() 打印 company 字符串的长度',
      starter_code: 'company = "Coding For All"\n\n# 打印长度\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '转大写',
      description: '使用 upper() 方法将所有字符更改为大写字母',
      starter_code: 'company = "Coding For All"\n\n# 转大写\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '转小写',
      description: '使用 lower() 方法将所有字符更改为小写字母',
      starter_code: 'company = "Coding For All"\n\n# 转小写\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '格式化字符串',
      description: '使用 capitalize()、title() 和 swapcase() 方法格式化字符串 "Coding For All"',
      starter_code: 'company = "Coding For All"\n\n# 使用各种方法\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '切片第一个单词',
      description: '切片出 "Coding For All" 字符串的第一个单词',
      starter_code: 'company = "Coding For All"\n\n# 切片\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查是否包含 Coding',
      description: '使用 index、find 或其他方法检查 "Coding For All" 字符串是否包含单词 Coding',
      starter_code: 'company = "Coding For All"\n\n# 检查是否包含\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '替换单词',
      description: '将字符串 "Coding For All" 中的单词 coding 替换为 Python',
      starter_code: 'company = "Coding For All"\n\n# 替换\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '替换单词2',
      description: '使用 replace 方法或其他方法将 "Python for Everyone" 替换为 "Python for All"',
      starter_code: 'text = "Python for Everyone"\n\n# 替换\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '使用空格分割',
      description: '使用空格作为分隔符拆分字符串 "Coding For All"',
      starter_code: 'company = "Coding For All"\n\n# 分割\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '在逗号处拆分',
      description: '在逗号处拆分字符串 "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"',
      starter_code: 'companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"\n\n# 分割\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '获取索引0的字符',
      description: '字符串 "Coding For All" 中索引 0 处的字符是什么',
      starter_code: 'company = "Coding For All"\n\n# 获取字符\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '获取最后一个索引',
      description: '字符串 "Coding For All" 的最后一个索引是什么',
      starter_code: 'company = "Coding For All"\n\n# 获取最后一个索引\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '获取索引10的字符',
      description: '字符串 "Coding For All" 中索引 10 处的字符是什么',
      starter_code: 'company = "Coding For All"\n\n# 获取字符\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '创建首字母缩略词',
      description: '为字符串 "Python For Everyone" 创建首字母缩略词或缩写',
      starter_code: 'text = "Python For Everyone"\n\n# 创建缩略词\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建首字母缩略词2',
      description: '为名称 "Coding For All" 创建首字母缩略词或缩写',
      starter_code: 'company = "Coding For All"\n\n# 创建缩略词\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '查找C的位置',
      description: '使用索引确定 "Coding For All" 中 C 第一次出现的位置',
      starter_code: 'company = "Coding For All"\n\n# 查找位置\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '查找F的位置',
      description: '使用索引确定 "Coding For All" 中 F 第一次出现的位置',
      starter_code: 'company = "Coding For All"\n\n# 查找位置\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '查找l最后出现位置',
      description: '使用 rfind 确定 "Coding For All People" 中 l 最后一次出现的位置',
      starter_code: 'text = "Coding For All People"\n\n# 查找位置\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '查找because第一次出现',
      description: '使用 index 或 find 查找句子中单词 "because" 第一次出现的位置',
      starter_code: 'sentence = "You cannot end a sentence with because because because is a conjunction"\n\n# 查找位置\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '查找because最后出现',
      description: '使用 rindex 查找句子中单词 because 最后一次出现的位置',
      starter_code: 'sentence = "You cannot end a sentence with because because because is a conjunction"\n\n# 查找位置\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '删除短语',
      description: '删除句子中短语 "because because because"',
      starter_code: 'sentence = "You cannot end a sentence with because because because is a conjunction"\n\n# 删除短语\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '查找because位置2',
      description: '查找句子中单词 "because" 第一次出现的位置',
      starter_code: 'sentence = "You cannot end a sentence with because because because is a conjunction"\n\n# 查找位置\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '删除短语2',
      description: '删除句子中短语 "because because because"',
      starter_code: 'sentence = "You cannot end a sentence with because because because is a conjunction"\n\n# 删除短语\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '检查开头',
      description: '"Coding For All" 是否以子字符串 Coding 开头？',
      starter_code: 'company = "Coding For All"\n\n# 检查开头\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查结尾',
      description: '"Coding For All" 是否以子字符串 coding 结尾？',
      starter_code: 'company = "Coding For All"\n\n# 检查结尾\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '删除空格',
      description: '删除 "  Coding For All     " 中左右空格',
      starter_code: 'text = "  Coding For All     "\n\n# 删除空格\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查标识符',
      description: '使用 isidentifier() 检查哪个变量返回 True："30DaysOfPython" 或 "thirty_days_of_python"',
      starter_code: '# 检查标识符\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '连接库名称',
      description: '使用空格连接列表 ["Django", "Flask", "Bottle", "Pyramid", "Falcon"]',
      starter_code: 'libraries = ["Django", "Flask", "Bottle", "Pyramid", "Falcon"]\n\n# 连接\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '使用换行符分隔',
      description: '使用换行转义序列分隔句子',
      starter_code: '# 使用 \\n 分隔\ntext = "I am enjoying this challenge.\\nI just wonder what is next."\nprint(text)\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '使用制表符格式化',
      description: '使用制表符转义序列输出表格',
      starter_code: '# 使用 \\t 格式化\nprint("Name\\tAge\\tCountry\\tCity")\nprint("Asabeneh\\t250\\tFinland\\tHelsinki")\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '字符串格式化 - 圆面积',
      description: '使用字符串格式化方法输出圆面积',
      starter_code: 'radius = 10\narea = 3.14 * radius ** 2\n\n# 格式化输出\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '字符串格式化 - 数学运算',
      description: '使用字符串格式化方法输出数学运算结果',
      starter_code: 'a = 8\nb = 6\n\n# 格式化输出各种运算\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  5: [
    // Day 5 的30个练习题（等级1: 27题，等级2: 3题）
    // 练习：等级 1
    {
      title: '声明空列表',
      description: '声明一个空列表',
      starter_code: '# 声明空列表\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '声明列表',
      description: '声明一个包含 5 个以上项的列表',
      starter_code: '# 声明列表\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '查找列表长度',
      description: '查找列表的长度',
      starter_code: 'my_list = [1, 2, 3, 4, 5, 6]\n\n# 查找长度\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '获取列表项',
      description: '获取列表的第一项、中间项和最后一项',
      starter_code: 'my_list = [1, 2, 3, 4, 5, 6, 7]\n\n# 获取项\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '声明 mixed_data_types',
      description: '声明一个名为 mixed_data_types 的列表，包含你的姓名、年龄、身高、婚姻状况和地址',
      starter_code: '# 声明混合数据类型列表\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '声明 it_companies',
      description: '声明一个名为 it_companies 的列表，并分配初始值',
      starter_code: '# 声明 it_companies 列表\nit_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '打印列表',
      description: '使用 print() 打印列表',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 打印列表\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '打印公司数',
      description: '打印列表中的公司数',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 打印公司数\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '打印特定公司',
      description: '打印第一、中间和最后一家公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 打印特定公司\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '修改公司名称',
      description: '修改其中一家公司的名称后打印列表',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 修改并打印\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '添加IT公司',
      description: '向 it_companies 添加一家 IT 公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 添加公司\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '在中间插入公司',
      description: '在公司列表中间插入一家 IT 公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 在中间插入\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '更改为大写',
      description: '将其中一家 it_companies 公司的名称更改为大写（不包括 IBM!）',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 更改为大写\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '连接公司',
      description: '使用字符串 "#; " 连接 it_companies',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 连接\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '检查公司存在',
      description: '检查 it_companies 列表中是否存在某个公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 检查是否存在\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '排序列表',
      description: '使用 sort() 方法对列表进行排序',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 排序\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '反转列表',
      description: '使用 reverse() 方法按降序反转列表',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 反转\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '切分前3家公司',
      description: '从列表中切分出前 3 家公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 切分\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '切分后3家公司',
      description: '从列表中切分出最后 3 家公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 切分\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '切分中间公司',
      description: '从列表中切分出中间的 IT 公司或公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 切分\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '删除第一家公司',
      description: '从列表中删除第一家 IT 公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 删除\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '删除中间公司',
      description: '从列表中删除中间的 IT 公司或公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 删除中间\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '删除最后一家公司',
      description: '从列表中删除最后一家 IT 公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 删除\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '删除所有公司',
      description: '从列表中删除所有 IT 公司',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 删除所有\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '销毁列表',
      description: '销毁 it_companies 列表',
      starter_code: 'it_companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]\n\n# 销毁列表\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '连接前端和后端列表',
      description: '连接 front_end 和 back_end 列表',
      starter_code: 'front_end = ["HTML", "CSS", "JS", "React", "Redux"]\nback_end = ["Node", "Express", "MongoDB"]\n\n# 连接列表\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '插入到列表',
      description: '在连接的列表中插入 Python 和 SQL',
      starter_code: 'front_end = ["HTML", "CSS", "JS", "React", "Redux"]\nback_end = ["Node", "Express", "MongoDB"]\nfull_stack = front_end + back_end\n\n# 插入 Python 和 SQL\n',
      difficulty: 'medium',
      points: 20,
    },
    // 练习：等级 2
    {
      title: '年龄列表操作',
      description: '对年龄列表进行排序，并找出最大和最小年龄，计算中位数、平均值和范围',
      starter_code: 'ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]\n\n# 排序\n# 找出最大和最小\n# 添加最小和最大到列表\n# 找到中位数\n# 找到平均值\n# 找到范围\n# 比较 (min - average) 和 (max - average)\n',
      difficulty: 'hard',
      points: 30,
    },
    {
      title: '查找中间国家',
      description: '在国家列表中查找中间的国家',
      starter_code: 'countries = ["China", "Russia", "USA", "Finland", "Sweden", "Norway", "Denmark"]\n\n# 查找中间国家\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '分割国家列表',
      description: '将国家列表分成两个相等的列表（如果是偶数，如果不是，则第一个半多一个国家）',
      starter_code: 'countries = ["China", "Russia", "USA", "Finland", "Sweden", "Norway", "Denmark"]\n\n# 分割列表\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
};

async function updateExercises() {
  try {
    console.log('🔄 开始更新 Day 1-5 的魔法练习题...\n');

    for (let day = 1; day <= 5; day++) {
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
    console.log(`  Day 1: ${exercisesData[1].length} 个练习题`);
    console.log(`  Day 2: ${exercisesData[2].length} 个练习题`);
    console.log(`  Day 3: ${exercisesData[3].length} 个练习题`);
    console.log(`  Day 4: ${exercisesData[4].length} 个练习题`);
    console.log(`  Day 5: ${exercisesData[5].length} 个练习题`);
    console.log(`  总计: ${Object.values(exercisesData).reduce((sum, arr) => sum + arr.length, 0)} 个练习题`);
  } catch (error) {
    console.error('❌ 更新失败:', error);
    throw error;
  }
}

updateExercises().catch(console.error);

