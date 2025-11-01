import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Day 18-24 的完整练习题
const exercisesData = {
  18: [
    // Level 1
    {
      title: '什么是正则表达式',
      description: '解释什么是正则表达式及其用途',
      starter_code: '# 正则表达式（RegEx）是一种特殊的文本字符串\n# 用于在数据中查找模式\n# 可以用于：\n# - 验证输入格式（邮箱、电话号码）\n# - 搜索和替换文本\n# - 提取特定信息\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '正则表达式变量',
      description: '解释正则表达式中的常用符号和变量',
      starter_code: '# 常用符号：\n# . - 任意字符\n# * - 0次或多次\n# + - 1次或多次\n# ? - 0次或1次\n# [] - 字符集\n# ^ - 开头\n# $ - 结尾\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '匹配特定单词模式',
      description: '创建正则表达式模式查找带有特定词的字符串',
      starter_code: 'import re\n\ntext = "I have the ability to learn"\npattern = r"\\w+ity"  # 匹配以ity结尾的单词\n\n# 使用re.findall查找匹配\nmatches = re.findall(pattern, text)\nprint(matches)\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '匹配日期格式',
      description: '创建正则表达式匹配日期格式 DD-MM-YYYY',
      starter_code: 'import re\n\ntext = "今天是 12-01-2021，明天是 13-01-2021"\npattern = r"\\d{2}-\\d{2}-\\d{4}"  # DD-MM-YYYY 格式\n\n# 查找所有日期\ndates = re.findall(pattern, text)\nprint(dates)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '匹配ing结尾的词',
      description: '创建正则表达式找出文本中以ing结尾的动词',
      starter_code: 'import re\n\ntext = "I am teaching and learning Python programming"\npattern = r"\\w+ing"  # 匹配ing结尾的词\n\n# 查找所有匹配\ning_words = re.findall(pattern, text)\nprint(ing_words)\n',
      difficulty: 'easy',
      points: 15,
    },
    // Level 2
    {
      title: '验证Python变量名',
      description: '编写一个模式，用于识别有效的Python变量名',
      starter_code: 'import re\n\ndef is_valid_variable(name):\n    # Python变量名规则：\n    # - 以字母或下划线开头\n    # - 只包含字母、数字和下划线\n    # - 不能以数字开头\n    pattern = r"^[a-zA-Z_][a-zA-Z0-9_]*$"\n    return bool(re.match(pattern, name))\n\n# 测试\nprint(is_valid_variable("my_var"))  # True\nprint(is_valid_variable("2var"))     # False\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '清除HTML标签',
      description: '使用正则表达式从文本中清除HTML标签',
      starter_code: 'import re\n\ntext = "<p>这是一个<b>HTML</b>文本</p>"\n\n# 清除HTML标签\npattern = r"<[^>]+>"\nclean_text = re.sub(pattern, "", text)\nprint(clean_text)\n',
      difficulty: 'medium',
      points: 20,
    },
    // Level 3
    {
      title: '统计最常见单词',
      description: '清理文本并计算最常见的三个单词',
      starter_code: 'import re\nfrom collections import Counter\n\nparagraph = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love."\n\n# 清理和统计\nwords = re.findall(r"\\w+", paragraph.lower())\nword_count = Counter(words)\nmost_common = word_count.most_common(3)\n\nprint(most_common)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '提取电子邮件地址',
      description: '编写正则表达式提取有效的电子邮件地址',
      starter_code: 'import re\n\nemail_text = """\nasabeneh@gmail.com\nalex@yahoo.com\nkofi@yahoo.com\ndoe@arc.gov\nasabeneh.com\nasabeneh@gmail\nalex@yahoo\n"""\n\n# 电子邮件模式\npattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"\nemails = re.findall(pattern, email_text)\n\nprint(emails)\n',
      difficulty: 'hard',
      points: 30,
    },
  ],
  19: [
    // Level 1
    {
      title: '统计文件单词数',
      description: '编写一个函数统计文件中单词的数量',
      starter_code: 'def count_words(filename):\n    try:\n        with open(filename, "r", encoding="utf-8") as f:\n            content = f.read()\n            words = content.split()\n            return len(words)\n    except FileNotFoundError:\n        return 0\n\n# 测试（需要先创建测试文件）\n# print(count_words("test.txt"))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '读取并统计文本',
      description: '创建一个文本文件并统计其单词数',
      starter_code: '# 创建文件\nwith open("sample.txt", "w", encoding="utf-8") as f:\n    f.write("这是一个测试文件。\\n")\n    f.write("用于练习文件处理。")\n\n# 读取并统计\nwith open("sample.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n    words = content.split()\n    print(f"单词数: {len(words)}")\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '写入文件',
      description: '创建一个文件并写入多行文本',
      starter_code: '# 写入文件\nlines = [\n    "Python是一门优秀的编程语言\\n",\n    "我喜欢学习Python\\n",\n    "文件处理很重要\\n"\n]\n\nwith open("my_file.txt", "w", encoding="utf-8") as f:\n    f.writelines(lines)\n\n# 读取验证\nwith open("my_file.txt", "r", encoding="utf-8") as f:\n    print(f.read())\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '追加到文件',
      description: '向现有文件追加内容',
      starter_code: '# 创建初始文件\nwith open("append_test.txt", "w") as f:\n    f.write("第一行\\n")\n\n# 追加内容\nwith open("append_test.txt", "a") as f:\n    f.write("第二行\\n")\n    f.write("第三行\\n")\n\n# 读取查看\nwith open("append_test.txt", "r") as f:\n    print(f.read())\n',
      difficulty: 'easy',
      points: 15,
    },
    // Level 2
    {
      title: 'JSON文件操作',
      description: '创建和读取JSON文件',
      starter_code: 'import json\n\n# 创建数据\ndata = {\n    "name": "张三",\n    "age": 25,\n    "skills": ["Python", "JavaScript"]\n}\n\n# 写入JSON文件\nwith open("data.json", "w", encoding="utf-8") as f:\n    json.dump(data, f, ensure_ascii=False, indent=2)\n\n# 读取JSON文件\nwith open("data.json", "r", encoding="utf-8") as f:\n    loaded_data = json.load(f)\n    print(loaded_data)\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建Python库JSON',
      description: '使用Python库数据创建JSON文件',
      starter_code: 'import json\n\npython_libraries = [\n    {\n        "name": "Django",\n        "creator": "Adrian Holovaty",\n        "year": 2005\n    },\n    {\n        "name": "Flask",\n        "creator": "Armin Ronacher",\n        "year": 2010\n    }\n]\n\n# 保存为JSON\nwith open("libraries.json", "w", encoding="utf-8") as f:\n    json.dump(python_libraries, f, ensure_ascii=False, indent=2)\n\nprint("JSON文件已创建")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: 'CSV文件操作',
      description: '创建和读取CSV文件',
      starter_code: 'import csv\n\n# 写入CSV\ndata = [\n    ["姓名", "年龄", "城市"],\n    ["张三", "25", "北京"],\n    ["李四", "30", "上海"]\n]\n\nwith open("data.csv", "w", newline="", encoding="utf-8") as f:\n    writer = csv.writer(f)\n    writer.writerows(data)\n\n# 读取CSV\nwith open("data.csv", "r", encoding="utf-8") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  20: [
    {
      title: '理解PIP',
      description: '解释PIP是什么以及它的用途',
      starter_code: '# PIP是Python的包管理器\n# 全称：Preferred Installer Program\n# 用途：\n# 1. 安装第三方包\n# 2. 卸载包\n# 3. 升级包\n# 4. 列出已安装的包\n\n# 常用命令：\n# pip install package_name\n# pip uninstall package_name\n# pip list\n# pip freeze\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用requests库',
      description: '安装并使用requests库获取网页内容',
      starter_code: 'import requests\n\n# 获取网页内容\nurl = "https://www.python.org"\n# response = requests.get(url)\n# print(response.status_code)\n# print(response.text[:200])  # 打印前200个字符\n\n# 注意：实际运行需要网络连接\nprint("requests库用于HTTP请求")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建requirements.txt',
      description: '使用pip freeze创建requirements.txt文件',
      starter_code: '# 在终端运行：\n# pip freeze > requirements.txt\n\n# requirements.txt 用于：\n# 1. 记录项目依赖\n# 2. 便于在其他环境安装相同的包\n# 3. 版本控制\n\n# 安装依赖：\n# pip install -r requirements.txt\n\nprint("理解requirements.txt的作用")\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '使用第三方包',
      description: '尝试使用不同的第三方包（如numpy、pandas）',
      starter_code: '# 示例：使用numpy\n# import numpy as np\n# arr = np.array([1, 2, 3, 4, 5])\n# print(arr * 2)\n\n# 示例：使用pandas\n# import pandas as pd\n# df = pd.DataFrame({"A": [1, 2, 3]})\n# print(df)\n\nprint("了解如何使用第三方包")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  21: [
    {
      title: '创建Person类',
      description: '创建一个Person类，包含name和age属性',
      starter_code: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f"我叫{self.name}，今年{self.age}岁"\n\n# 测试\np = Person("张三", 25)\nprint(p.introduce())\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '创建Student类',
      description: '创建Student类，继承Person类并添加新属性',
      starter_code: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\nclass Student(Person):\n    def __init__(self, name, age, student_id):\n        super().__init__(name, age)\n        self.student_id = student_id\n    \n    def study(self, subject):\n        return f"{self.name}正在学习{subject}"\n\n# 测试\ns = Student("李四", 20, "S001")\nprint(s.study("Python"))\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建Statistics类 - 基础方法',
      description: '创建Statistics类，实现count、sum、min、max方法',
      starter_code: 'class Statistics:\n    def __init__(self, data=[]):\n        self.data = data\n    \n    def count(self):\n        return len(self.data)\n    \n    def sum(self):\n        return sum(self.data)\n    \n    def min(self):\n        return min(self.data) if self.data else None\n    \n    def max(self):\n        return max(self.data) if self.data else None\n\n# 测试\nstats = Statistics([1, 2, 3, 4, 5])\nprint(f"Count: {stats.count()}")\nprint(f"Sum: {stats.sum()}")\nprint(f"Min: {stats.min()}")\nprint(f"Max: {stats.max()}")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建Statistics类 - 统计方法',
      description: '为Statistics类添加mean、median、mode方法',
      starter_code: 'from collections import Counter\n\nclass Statistics:\n    def __init__(self, data=[]):\n        self.data = data\n    \n    def mean(self):\n        if not self.data:\n            return None\n        return sum(self.data) / len(self.data)\n    \n    def median(self):\n        if not self.data:\n            return None\n        sorted_data = sorted(self.data)\n        n = len(sorted_data)\n        mid = n // 2\n        if n % 2 == 0:\n            return (sorted_data[mid-1] + sorted_data[mid]) / 2\n        return sorted_data[mid]\n    \n    def mode(self):\n        if not self.data:\n            return None\n        counter = Counter(self.data)\n        return counter.most_common(1)[0][0]\n\n# 测试\nstats = Statistics([1, 2, 2, 3, 4, 5])\nprint(f"Mean: {stats.mean()}")\nprint(f"Median: {stats.median()}")\nprint(f"Mode: {stats.mode()}")\n',
      difficulty: 'hard',
      points: 30,
    },
    {
      title: '创建Statistics类 - 高级统计',
      description: '添加标准差和方差方法',
      starter_code: 'import math\n\nclass Statistics:\n    def __init__(self, data=[]):\n        self.data = data\n    \n    def mean(self):\n        return sum(self.data) / len(self.data) if self.data else 0\n    \n    def variance(self):\n        if not self.data:\n            return None\n        mean = self.mean()\n        return sum((x - mean) ** 2 for x in self.data) / len(self.data)\n    \n    def standard_deviation(self):\n        var = self.variance()\n        return math.sqrt(var) if var is not None else None\n\n# 测试\nstats = Statistics([1, 2, 3, 4, 5])\nprint(f"Variance: {stats.variance()}")\nprint(f"Std Dev: {stats.standard_deviation()}")\n',
      difficulty: 'hard',
      points: 30,
    },
  ],
  22: [
    {
      title: '理解网页抓取',
      description: '解释什么是网页抓取及其应用',
      starter_code: '# 网页抓取（Web Scraping）是从网站提取数据的过程\n# \n# 应用场景：\n# 1. 数据收集和分析\n# 2. 价格监控\n# 3. 新闻聚合\n# 4. 研究和学术用途\n#\n# 常用库：\n# - requests: 发送HTTP请求\n# - BeautifulSoup: 解析HTML\n# - Scrapy: 专业抓取框架\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用requests获取网页',
      description: '使用requests库获取网页内容并检查状态',
      starter_code: 'import requests\n\n# url = "https://www.python.org"\n# response = requests.get(url)\n# print(f"状态码: {response.status_code}")\n# print(f"内容长度: {len(response.text)}")\n\n# 注意：需要网络连接\nprint("理解如何使用requests")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '解析HTML内容',
      description: '使用BeautifulSoup解析HTML并提取信息',
      starter_code: 'from bs4 import BeautifulSoup\n\nhtml = """\n<html>\n<body>\n    <h1>标题</h1>\n    <p>段落1</p>\n    <p>段落2</p>\n</body>\n</html>\n"""\n\nsoup = BeautifulSoup(html, "html.parser")\n\n# 提取标题\ntitle = soup.find("h1")\nprint(f"标题: {title.text}")\n\n# 提取所有段落\nparas = soup.find_all("p")\nfor p in paras:\n    print(f"段落: {p.text}")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '抓取并保存为JSON',
      description: '抓取数据并保存为JSON格式',
      starter_code: 'import json\nfrom bs4 import BeautifulSoup\n\n# 模拟HTML数据\nhtml = """\n<div class="item">\n    <h2>商品1</h2>\n    <p class="price">99.99</p>\n</div>\n<div class="item">\n    <h2>商品2</h2>\n    <p class="price">199.99</p>\n</div>\n"""\n\nsoup = BeautifulSoup(html, "html.parser")\nitems = []\n\nfor item in soup.find_all("div", class_="item"):\n    name = item.find("h2").text\n    price = item.find("p", class_="price").text\n    items.append({"name": name, "price": price})\n\n# 保存为JSON\nwith open("scraped_data.json", "w", encoding="utf-8") as f:\n    json.dump(items, f, ensure_ascii=False, indent=2)\n\nprint("数据已保存")\n',
      difficulty: 'hard',
      points: 30,
    },
  ],
  23: [
    {
      title: '理解虚拟环境',
      description: '解释虚拟环境的作用和重要性',
      starter_code: '# 虚拟环境的作用：\n# 1. 隔离项目依赖\n# 2. 避免包版本冲突\n# 3. 便于项目管理\n# 4. 易于部署\n#\n# 创建虚拟环境：\n# python -m venv venv\n#\n# 激活虚拟环境：\n# Mac/Linux: source venv/bin/activate\n# Windows: venv\\Scripts\\activate\n#\n# 退出虚拟环境：\n# deactivate\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '虚拟环境实践',
      description: '创建虚拟环境并安装包',
      starter_code: '# 在终端执行以下命令：\n#\n# 1. 创建虚拟环境\n# python -m venv myenv\n#\n# 2. 激活虚拟环境\n# source myenv/bin/activate  (Mac/Linux)\n# myenv\\Scripts\\activate  (Windows)\n#\n# 3. 安装包\n# pip install requests\n#\n# 4. 导出依赖\n# pip freeze > requirements.txt\n#\n# 5. 退出虚拟环境\n# deactivate\n\nprint("虚拟环境实践完成")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  24: [
    {
      title: '理解NumPy',
      description: '解释NumPy是什么及其主要用途',
      starter_code: '# NumPy是Python科学计算的基础库\n# 主要特点：\n# 1. 高性能多维数组对象\n# 2. 数学函数\n# 3. 线性代数功能\n# 4. 随机数生成\n#\n# 应用领域：\n# - 数据科学\n# - 机器学习\n# - 科学计算\n# - 图像处理\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '创建NumPy数组',
      description: '使用NumPy创建不同类型的数组',
      starter_code: '# import numpy as np\n\n# # 从列表创建数组\n# arr1 = np.array([1, 2, 3, 4, 5])\n# print(arr1)\n\n# # 创建零数组\n# zeros = np.zeros(5)\n# print(zeros)\n\n# # 创建一数组\n# ones = np.ones(5)\n# print(ones)\n\n# # 创建范围数组\n# range_arr = np.arange(0, 10, 2)\n# print(range_arr)\n\nprint("理解NumPy数组创建")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: 'NumPy数组运算',
      description: '使用NumPy进行数组运算',
      starter_code: '# import numpy as np\n\n# arr = np.array([1, 2, 3, 4, 5])\n\n# # 算术运算\n# print(arr + 10)      # 加法\n# print(arr * 2)       # 乘法\n# print(arr ** 2)      # 平方\n\n# # 数组运算\n# arr2 = np.array([10, 20, 30, 40, 50])\n# print(arr + arr2)    # 数组相加\n\n# # 统计函数\n# print(np.mean(arr))  # 平均值\n# print(np.sum(arr))   # 求和\n# print(np.max(arr))   # 最大值\n\nprint("理解NumPy数组运算")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '统计分析',
      description: '使用statistics模块进行基本统计分析',
      starter_code: 'import statistics\n\ndata = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]\n\n# 计算统计量\nmean = statistics.mean(data)\nmedian = statistics.median(data)\nmode = statistics.mode(data)\nstdev = statistics.stdev(data)\n\nprint(f"平均值: {mean}")\nprint(f"中位数: {median}")\nprint(f"众数: {mode}")\nprint(f"标准差: {stdev:.2f}")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '数据可视化准备',
      description: '准备数据用于可视化',
      starter_code: '# import numpy as np\n# import matplotlib.pyplot as plt\n\n# # 创建数据\n# x = np.linspace(0, 10, 100)\n# y = np.sin(x)\n\n# # 绘图\n# plt.plot(x, y)\n# plt.title("正弦曲线")\n# plt.xlabel("X")\n# plt.ylabel("Y")\n# plt.show()\n\nprint("理解数据可视化的准备工作")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
};

async function updateExercises() {
  try {
    console.log('🔄 开始更新 Day 18-24 的魔法练习题...\n');

    for (let day = 18; day <= 24; day++) {
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
      if (!exercises) {
        console.log(`  ⚠️  Day ${day} 没有练习题数据`);
        continue;
      }

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
    for (let day = 18; day <= 24; day++) {
      if (exercisesData[day]) {
        console.log(`  Day ${day}: ${exercisesData[day].length} 个练习题`);
      }
    }
    const total = Object.values(exercisesData).reduce((sum, arr) => sum + arr.length, 0);
    console.log(`  总计: ${total} 个练习题`);
  } catch (error) {
    console.error('❌ 更新失败:', error);
    throw error;
  }
}

updateExercises().catch(console.error);

