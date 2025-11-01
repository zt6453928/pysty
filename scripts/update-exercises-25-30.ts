import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Day 25-30 的完整练习题
const exercisesData = {
  25: [
    {
      title: '理解Pandas',
      description: '解释Pandas是什么以及它的主要用途',
      starter_code: '# Pandas是Python的数据分析库\n# 主要数据结构：\n# 1. Series - 一维数组\n# 2. DataFrame - 二维表格\n#\n# 主要用途：\n# - 数据清洗\n# - 数据转换\n# - 数据分析\n# - 数据可视化准备\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '创建Pandas Series',
      description: '使用不同方法创建Pandas Series',
      starter_code: '# import pandas as pd\n# import numpy as np\n\n# # 从列表创建\n# s1 = pd.Series([1, 2, 3, 4, 5])\n# print(s1)\n\n# # 从字典创建\n# s2 = pd.Series({"a": 1, "b": 2, "c": 3})\n# print(s2)\n\n# # 从numpy数组创建\n# s3 = pd.Series(np.array([1, 2, 3]))\n# print(s3)\n\nprint("理解Pandas Series创建")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '创建DataFrame',
      description: '使用不同方法创建Pandas DataFrame',
      starter_code: '# import pandas as pd\n\n# # 从字典创建\n# data = {\n#     "name": ["Alice", "Bob", "Charlie"],\n#     "age": [25, 30, 35],\n#     "city": ["Beijing", "Shanghai", "Guangzhou"]\n# }\n# df = pd.DataFrame(data)\n# print(df)\n\n# # 从列表的列表创建\n# data_list = [\n#     ["Alice", 25, "Beijing"],\n#     ["Bob", 30, "Shanghai"]\n# ]\n# df2 = pd.DataFrame(data_list, columns=["name", "age", "city"])\n# print(df2)\n\nprint("理解DataFrame创建")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '读取CSV文件',
      description: '使用Pandas读取CSV文件并进行基本探索',
      starter_code: '# import pandas as pd\n\n# # 读取CSV\n# df = pd.read_csv("data.csv")\n\n# # 基本探索\n# print(df.head())      # 前5行\n# print(df.tail())      # 后5行\n# print(df.shape)       # 行列数\n# print(df.columns)     # 列名\n# print(df.info())      # 基本信息\n\nprint("理解CSV读取和探索")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '数据过滤和排序',
      description: '过滤和排序DataFrame数据',
      starter_code: '# import pandas as pd\n\n# data = {\n#     "name": ["Alice", "Bob", "Charlie", "David"],\n#     "score": [85, 92, 78, 95],\n#     "subject": ["Math", "Python", "Math", "Python"]\n# }\n# df = pd.DataFrame(data)\n\n# # 过滤\n# python_students = df[df["subject"] == "Python"]\n# print(python_students)\n\n# # 排序\n# sorted_df = df.sort_values("score", ascending=False)\n# print(sorted_df)\n\nprint("理解数据过滤和排序")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: 'DataFrame数据统计',
      description: '对DataFrame进行统计分析',
      starter_code: '# import pandas as pd\n\n# data = {\n#     "name": ["Alice", "Bob", "Charlie"],\n#     "score": [85, 92, 78]\n# }\n# df = pd.DataFrame(data)\n\n# # 统计分析\n# print(df.describe())           # 描述性统计\n# print(df["score"].mean())      # 平均值\n# print(df["score"].max())       # 最大值\n# print(df["score"].min())       # 最小值\n# print(df["score"].std())       # 标准差\n\nprint("理解DataFrame统计")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  26: [
    {
      title: '理解Flask框架',
      description: '解释Flask是什么以及它的用途',
      starter_code: '# Flask是Python的轻量级Web框架\n# 特点：\n# 1. 轻量简洁\n# 2. 灵活可扩展\n# 3. 内置开发服务器\n# 4. 支持Jinja2模板\n#\n# 用途：\n# - Web应用开发\n# - API开发\n# - 微服务\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '创建Flask基础应用',
      description: '创建一个简单的Flask应用，返回"Hello, World!"',
      starter_code: '# from flask import Flask\n\n# app = Flask(__name__)\n\n# @app.route(\'/\')\n# def home():\n#     return "<h1>Hello, World!</h1>"\n\n# if __name__ == \'__main__\':\n#     app.run(debug=True)\n\nprint("理解Flask基础应用")\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '创建多个路由',
      description: '创建Flask应用，包含多个路由（首页、关于、联系）',
      starter_code: '# from flask import Flask\n\n# app = Flask(__name__)\n\n# @app.route(\'/\')\n# def home():\n#     return "<h1>首页</h1>"\n\n# @app.route(\'/about\')\n# def about():\n#     return "<h1>关于我们</h1>"\n\n# @app.route(\'/contact\')\n# def contact():\n#     return "<h1>联系我们</h1>"\n\nprint("理解Flask路由")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '成绩计算器应用',
      description: '创建成绩计算器Flask应用，根据分数显示不同消息',
      starter_code: '# from flask import Flask, request, render_template_string\n\n# app = Flask(__name__)\n\n# @app.route(\'/grade\', methods=[\'GET\', \'POST\'])\n# def grade_calculator():\n#     if request.method == \'POST\':\n#         score = int(request.form[\'score\'])\n#         subject = request.form[\'subject\']\n#         \n#         if score >= 90:\n#             message = f"优秀！你的{subject}成绩是{score}"\n#         elif score >= 80:\n#             message = f"很好！你的{subject}成绩是{score}"\n#         # 继续其他条件...\n#         \n#         return message\n#     return "成绩计算器表单"\n\nprint("理解Flask表单处理")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: 'BMI计算器应用',
      description: '创建体重指数(BMI)计算器Flask应用',
      starter_code: '# from flask import Flask, request\n\n# app = Flask(__name__)\n\n# @app.route(\'/bmi\', methods=[\'POST\'])\n# def calculate_bmi():\n#     weight = float(request.form[\'weight\'])  # kg\n#     height = float(request.form[\'height\'])  # m\n#     \n#     bmi = weight / (height ** 2)\n#     \n#     if bmi < 18.5:\n#         status = "体重过轻"\n#     elif bmi < 24.9:\n#         status = "健康体重"\n#     elif bmi < 29.9:\n#         status = "超重"\n#     else:\n#         status = "肥胖"\n#     \n#     return f"BMI: {bmi:.2f}, 状态: {status}"\n\nprint("理解BMI计算应用")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  27: [
    {
      title: '理解MongoDB',
      description: '解释MongoDB是什么以及NoSQL的特点',
      starter_code: '# MongoDB是NoSQL数据库\n# NoSQL特点：\n# 1. 非关系型\n# 2. 文档存储（JSON格式）\n# 3. 灵活的模式\n# 4. 易于扩展\n#\n# 与SQL区别：\n# SQL: 表、行、列\n# NoSQL: 集合、文档、字段\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '连接MongoDB',
      description: '使用pymongo连接MongoDB数据库',
      starter_code: '# from pymongo import MongoClient\n\n# # 连接MongoDB\n# client = MongoClient("mongodb://localhost:27017/")\n\n# # 选择数据库\n# db = client["mydb"]\n\n# # 选择集合\n# collection = db["users"]\n\n# print("MongoDB连接成功")\n\nprint("理解MongoDB连接")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '插入文档',
      description: '向MongoDB集合中插入文档',
      starter_code: '# from pymongo import MongoClient\n\n# client = MongoClient("mongodb://localhost:27017/")\n# db = client["mydb"]\n# collection = db["users"]\n\n# # 插入单个文档\n# user = {"name": "张三", "age": 25, "city": "北京"}\n# result = collection.insert_one(user)\n# print(f"插入ID: {result.inserted_id}")\n\n# # 插入多个文档\n# users = [\n#     {"name": "李四", "age": 30},\n#     {"name": "王五", "age": 28}\n# ]\n# result = collection.insert_many(users)\n# print(f"插入数量: {len(result.inserted_ids)}")\n\nprint("理解MongoDB插入操作")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '查询文档',
      description: '从MongoDB查询和过滤文档',
      starter_code: '# from pymongo import MongoClient\n\n# client = MongoClient("mongodb://localhost:27017/")\n# db = client["mydb"]\n# collection = db["users"]\n\n# # 查询所有文档\n# all_users = collection.find()\n# for user in all_users:\n#     print(user)\n\n# # 条件查询\n# young_users = collection.find({"age": {"$lt": 30}})\n# for user in young_users:\n#     print(user)\n\nprint("理解MongoDB查询")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '更新和删除文档',
      description: '更新和删除MongoDB文档',
      starter_code: '# from pymongo import MongoClient\n\n# client = MongoClient("mongodb://localhost:27017/")\n# db = client["mydb"]\n# collection = db["users"]\n\n# # 更新文档\n# collection.update_one(\n#     {"name": "张三"},\n#     {"$set": {"age": 26}}\n# )\n\n# # 删除文档\n# collection.delete_one({"name": "张三"})\n\n# # 删除多个文档\n# collection.delete_many({"age": {"$lt": 25}})\n\nprint("理解MongoDB更新和删除")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  28: [
    {
      title: '理解API',
      description: '解释什么是API以及RESTful API',
      starter_code: '# API（应用程序编程接口）\n# 作用：不同软件之间的接口\n#\n# RESTful API特点：\n# 1. 使用HTTP方法（GET, POST, PUT, DELETE）\n# 2. 无状态\n# 3. 资源导向\n# 4. 统一接口\n#\n# HTTP方法：\n# - GET: 获取资源\n# - POST: 创建资源\n# - PUT: 更新资源\n# - DELETE: 删除资源\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '理解HTTP状态码',
      description: '学习常用的HTTP状态码及其含义',
      starter_code: '# HTTP状态码：\n#\n# 2xx 成功：\n# - 200 OK: 请求成功\n# - 201 Created: 资源创建成功\n#\n# 4xx 客户端错误：\n# - 400 Bad Request: 请求错误\n# - 404 Not Found: 资源未找到\n#\n# 5xx 服务器错误：\n# - 500 Internal Server Error: 服务器错误\n\n# 写出你的理解\n',
      difficulty: 'easy',
      points: 10,
    },
    {
      title: '使用requests调用API',
      description: '使用requests库调用第三方API',
      starter_code: 'import requests\n\n# # 调用国家API\n# url = "https://restcountries.com/v3.1/all"\n# response = requests.get(url)\n\n# if response.status_code == 200:\n#     countries = response.json()\n#     print(f"获取到 {len(countries)} 个国家")\n#     print(countries[0][\'name\'])\n# else:\n#     print(f"错误: {response.status_code}")\n\nprint("理解API调用")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '处理JSON响应',
      description: '处理API返回的JSON数据',
      starter_code: 'import requests\nimport json\n\n# # 调用API并处理响应\n# url = "https://api.github.com/users/github"\n# response = requests.get(url)\n\n# if response.status_code == 200:\n#     data = response.json()\n#     print(f"用户名: {data.get(\'login\')}")\n#     print(f"名称: {data.get(\'name\')}")\n#     print(f"公开仓库: {data.get(\'public_repos\')}")\n\nprint("理解JSON响应处理")\n',
      difficulty: 'medium',
      points: 20,
    },
  ],
  29: [
    {
      title: '创建基础API',
      description: '使用Flask创建一个返回JSON数据的基础API',
      starter_code: '# from flask import Flask, jsonify\n\n# app = Flask(__name__)\n\n# @app.route(\'/api/students\', methods=[\'GET\'])\n# def get_students():\n#     students = [\n#         {"name": "Alice", "age": 20},\n#         {"name": "Bob", "age": 22}\n#     ]\n#     return jsonify(students)\n\n# if __name__ == \'__main__\':\n#     app.run(debug=True)\n\nprint("理解基础API创建")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '实现GET端点',
      description: '创建GET请求端点，返回所有资源',
      starter_code: '# from flask import Flask, jsonify\n\n# app = Flask(__name__)\n\n# # 模拟数据\n# tasks = [\n#     {"id": 1, "title": "学习Python", "done": False},\n#     {"id": 2, "title": "学习Flask", "done": True}\n# ]\n\n# @app.route(\'/api/tasks\', methods=[\'GET\'])\n# def get_tasks():\n#     return jsonify({"tasks": tasks})\n\n# @app.route(\'/api/tasks/<int:task_id>\', methods=[\'GET\'])\n# def get_task(task_id):\n#     task = next((t for t in tasks if t["id"] == task_id), None)\n#     if task:\n#         return jsonify(task)\n#     return jsonify({"error": "未找到"}), 404\n\nprint("理解GET端点")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '实现POST端点',
      description: '创建POST请求端点，添加新资源',
      starter_code: '# from flask import Flask, jsonify, request\n\n# app = Flask(__name__)\n\n# tasks = []\n\n# @app.route(\'/api/tasks\', methods=[\'POST\'])\n# def create_task():\n#     data = request.get_json()\n#     new_task = {\n#         "id": len(tasks) + 1,\n#         "title": data.get("title"),\n#         "done": False\n#     }\n#     tasks.append(new_task)\n#     return jsonify(new_task), 201\n\nprint("理解POST端点")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '实现PUT和DELETE端点',
      description: '实现完整的CRUD API',
      starter_code: '# from flask import Flask, jsonify, request\n\n# app = Flask(__name__)\n# tasks = []\n\n# @app.route(\'/api/tasks/<int:task_id>\', methods=[\'PUT\'])\n# def update_task(task_id):\n#     task = next((t for t in tasks if t["id"] == task_id), None)\n#     if task:\n#         data = request.get_json()\n#         task["title"] = data.get("title", task["title"])\n#         task["done"] = data.get("done", task["done"])\n#         return jsonify(task)\n#     return jsonify({"error": "未找到"}), 404\n\n# @app.route(\'/api/tasks/<int:task_id>\', methods=[\'DELETE\'])\n# def delete_task(task_id):\n#     global tasks\n#     tasks = [t for t in tasks if t["id"] != task_id]\n#     return jsonify({"message": "删除成功"})\n\nprint("理解完整CRUD API")\n',
      difficulty: 'hard',
      points: 30,
    },
  ],
  30: [
    {
      title: 'Python学习总结',
      description: '回顾30天学习的所有内容',
      starter_code: '# 30天Python学习总结\n#\n# 第一周：基础语法\n# - Python基础、变量、运算符、字符串、列表\n#\n# 第二周：数据结构与控制流\n# - 元组、集合、字典、条件、循环\n#\n# 第三周：函数与高级特性\n# - 函数、模块、推导式、高阶函数、错误处理\n#\n# 第四周：专业应用\n# - 正则表达式、文件处理、OOP、网页抓取、数据分析\n#\n# 第五周：Web开发与数据库\n# - Pandas、Flask、MongoDB、API\n\n# 写出你的学习收获\nprint("30天Python学习，收获满满！")\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '知识点复习',
      description: '复习并实践所有重要知识点',
      starter_code: '# 基础知识复习\n\n# 1. 数据类型\ndata_types = {\n    "int": 10,\n    "float": 3.14,\n    "str": "Python",\n    "list": [1, 2, 3],\n    "tuple": (1, 2),\n    "dict": {"key": "value"},\n    "set": {1, 2, 3}\n}\n\n# 2. 函数\ndef greet(name):\n    return f"Hello, {name}!"\n\n# 3. 类\nclass Student:\n    def __init__(self, name):\n        self.name = name\n\nprint("复习完成！")\n',
      difficulty: 'easy',
      points: 15,
    },
    {
      title: '综合项目规划',
      description: '规划一个综合使用所学知识的项目',
      starter_code: '# 综合项目想法：\n#\n# 1. 学生管理系统\n#    - 使用类设计学生对象\n#    - 使用文件存储数据\n#    - 使用Flask创建Web界面\n#\n# 2. 数据分析工具\n#    - 使用Pandas读取数据\n#    - 使用NumPy进行计算\n#    - 使用正则表达式清理数据\n#\n# 3. API服务\n#    - 设计RESTful API\n#    - 使用MongoDB存储\n#    - 部署到云平台\n\n# 规划你的项目\nprint("开始你的Python项目之旅！")\n',
      difficulty: 'medium',
      points: 20,
    },
    {
      title: '最终挑战',
      description: '完成一个综合性的Python项目',
      starter_code: '# 最终挑战：创建一个完整的应用\n#\n# 要求：\n# 1. 使用面向对象编程\n# 2. 包含文件处理\n# 3. 包含错误处理\n# 4. 使用函数模块化\n# 5. 添加数据验证\n#\n# 示例项目：\n# - 图书管理系统\n# - 个人博客\n# - 任务管理器\n# - 数据分析工具\n\nclass Project:\n    def __init__(self, name):\n        self.name = name\n    \n    def start(self):\n        print(f"开始项目: {self.name}")\n        print("运用你学到的所有知识！")\n\n# 开始你的项目\nmy_project = Project("我的Python项目")\nmy_project.start()\n',
      difficulty: 'hard',
      points: 30,
    },
  ],
};

async function updateExercises() {
  try {
    console.log('🔄 开始更新 Day 25-30 的魔法练习题...\n');
    console.log('🎉 这是最后的冲刺！\n');

    for (let day = 25; day <= 30; day++) {
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
    for (let day = 25; day <= 30; day++) {
      if (exercisesData[day]) {
        console.log(`  Day ${day}: ${exercisesData[day].length} 个练习题`);
      }
    }
    const total = Object.values(exercisesData).reduce((sum, arr) => sum + arr.length, 0);
    console.log(`  总计: ${total} 个练习题`);
    
    console.log('\n🏆 恭喜！30天练习题全部完成！');
    console.log('🎓 100% 完成度达成！');
  } catch (error) {
    console.error('❌ 更新失败:', error);
    throw error;
  }
}

updateExercises().catch(console.error);

