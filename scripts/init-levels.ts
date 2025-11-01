import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const levelsData = [
  {
    level_number: 1,
    title: '第01天 - Python魔法入门',
    description: '欢迎来到Python魔法学院！开始你的第一步魔法之旅',
    magic_points: 100,
    content: `# 🐍 第01天 - Python魔法入门

## 欢迎来到Python世界

Python是一种高级编程语言，用于通用编程。它是一种开源的、易于学习的编程语言。

### 为什么学习Python？

- 🚀 简单易学
- 💼 就业机会多
- 🌐 广泛应用于Web开发、数据科学、人工智能等领域
- 🤝 强大的社区支持

### Python基础

#### 检查Python版本
\`\`\`python
import sys
print(sys.version)
\`\`\`

#### 第一个程序
\`\`\`python
print("Hello, Python!")
print("欢迎来到Python魔法学院!")
\`\`\`

### Python语法基础

#### 注释
\`\`\`python
# 这是单行注释

"""
这是多行注释
可以写很多行
"""
\`\`\`

#### 数据类型
- 整数 (int)
- 浮点数 (float)
- 字符串 (str)
- 布尔值 (bool)

祝你在Python魔法学院学习愉快！🎉`,
    exercises: [
      {
        title: '施展你的第一个魔法咒语',
        description: '使用print()函数输出 "我开始学习Python魔法了！"',
        starter_code: '# 在这里编写你的代码\n',
        difficulty: 'easy',
        points: 10,
      },
      {
        title: '魔法数字计算',
        description: '创建两个变量 a=10 和 b=20，然后打印它们的和',
        starter_code: '# 定义变量\na = 10\nb = 20\n# 打印和\n',
        difficulty: 'easy',
        points: 10,
      },
    ],
  },
  {
    level_number: 2,
    title: '第02天 - 变量与数据类型',
    description: '学习Python中的变量和内置数据类型',
    magic_points: 120,
    content: `# 第02天 - 变量与数据类型

## 变量

变量是存储数据值的容器。Python没有声明变量的命令，当你第一次给变量赋值时，就创建了变量。

### 变量命名规则
- 变量名必须以字母或下划线开头
- 变量名不能以数字开头
- 变量名只能包含字母、数字和下划线
- 变量名区分大小写

\`\`\`python
# 有效的变量名
first_name = "张三"
age = 25
is_student = True

# 无效的变量名
# 2nd_name = "李四"  # 不能以数字开头
# first-name = "王五"  # 不能包含连字符
\`\`\`

## 数据类型

### 数字类型
\`\`\`python
# 整数
age = 25
year = 2024

# 浮点数
pi = 3.14
price = 99.99

# 复数
complex_num = 1 + 2j
\`\`\`

### 字符串
\`\`\`python
name = "Python"
message = '学习Python很有趣'
multi_line = """这是
多行
字符串"""
\`\`\`

### 布尔值
\`\`\`python
is_true = True
is_false = False
\`\`\`

### 检查数据类型
\`\`\`python
print(type(10))          # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type("Python"))    # <class 'str'>
print(type(True))        # <class 'bool'>
\`\`\``,
    exercises: [
      {
        title: '创建魔法变量',
        description: '创建三个变量：你的名字(字符串)、年龄(整数)、和身高(浮点数)，然后打印它们',
        starter_code: '# 创建变量\nname = \nage = \nheight = \n\n# 打印变量\n',
        difficulty: 'easy',
        points: 15,
      },
    ],
  },
  {
    level_number: 3,
    title: '第03天 - 运算符',
    description: '掌握Python中的各种运算符',
    magic_points: 120,
    content: `# 第03天 - 运算符

## 算术运算符

\`\`\`python
# 加法
result = 10 + 5  # 15

# 减法
result = 10 - 5  # 5

# 乘法
result = 10 * 5  # 50

# 除法
result = 10 / 3  # 3.333...

# 整除
result = 10 // 3  # 3

# 取模
result = 10 % 3  # 1

# 幂运算
result = 2 ** 3  # 8
\`\`\`

## 比较运算符

\`\`\`python
print(5 == 5)   # True
print(5 != 3)   # True
print(5 > 3)    # True
print(5 < 3)    # False
print(5 >= 5)   # True
print(5 <= 3)   # False
\`\`\`

## 逻辑运算符

\`\`\`python
# and - 两个条件都为True时返回True
print(True and True)    # True
print(True and False)   # False

# or - 至少一个条件为True时返回True
print(True or False)    # True
print(False or False)   # False

# not - 取反
print(not True)         # False
print(not False)        # True
\`\`\``,
    exercises: [
      {
        title: '魔法计算器',
        description: '计算两个数字的所有算术运算结果',
        starter_code: 'a = 15\nb = 4\n\n# 计算并打印所有运算结果\n',
        difficulty: 'medium',
        points: 15,
      },
    ],
  },
  {
    level_number: 4,
    title: '第04天 - 字符串魔法',
    description: '深入学习字符串操作和方法',
    magic_points: 150,
    content: `# 第04天 - 字符串魔法

## 字符串创建

\`\`\`python
single = 'Python'
double = "魔法学院"
multi = """多行
字符串
内容"""
\`\`\`

## 字符串连接

\`\`\`python
first_name = "Python"
last_name = "魔法师"
full_name = first_name + " " + last_name
print(full_name)  # Python 魔法师
\`\`\`

## 字符串方法

\`\`\`python
text = "python魔法学院"

# 转大写
print(text.upper())  # PYTHON魔法学院

# 转小写
print(text.lower())  # python魔法学院

# 首字母大写
print(text.capitalize())

# 替换
print(text.replace("魔法", "编程"))

# 分割
words = "Python is awesome".split()
print(words)  # ['Python', 'is', 'awesome']

# 去除空格
text = "  Python  "
print(text.strip())  # "Python"
\`\`\`

## 字符串格式化

\`\`\`python
name = "张三"
age = 25

# f-string (推荐)
message = f"我叫{name}，今年{age}岁"

# format方法
message = "我叫{}，今年{}岁".format(name, age)

# 旧式格式化
message = "我叫%s，今年%d岁" % (name, age)
\`\`\``,
    exercises: [
      {
        title: '字符串魔法变换',
        description: '使用字符串方法对给定文本进行各种操作',
        starter_code: 'text = "  Python Magic Academy  "\n\n# 进行各种字符串操作\n',
        difficulty: 'medium',
        points: 20,
      },
    ],
  },
  {
    level_number: 5,
    title: '第05天 - 列表魔法',
    description: '学习Python中最常用的数据结构 - 列表',
    magic_points: 150,
    content: `# 第05天 - 列表魔法

## 创建列表

\`\`\`python
# 空列表
empty_list = []
empty_list = list()

# 有元素的列表
fruits = ['苹果', '香蕉', '橙子']
numbers = [1, 2, 3, 4, 5]
mixed = [1, 'Python', True, 3.14]
\`\`\`

## 访问列表元素

\`\`\`python
fruits = ['苹果', '香蕉', '橙子', '葡萄']

# 通过索引访问
print(fruits[0])   # 苹果
print(fruits[-1])  # 葡萄（最后一个）

# 切片
print(fruits[1:3])  # ['香蕉', '橙子']
print(fruits[:2])   # ['苹果', '香蕉']
print(fruits[2:])   # ['橙子', '葡萄']
\`\`\`

## 列表方法

\`\`\`python
numbers = [1, 2, 3]

# 添加元素
numbers.append(4)       # [1, 2, 3, 4]
numbers.insert(0, 0)    # [0, 1, 2, 3, 4]
numbers.extend([5, 6])  # [0, 1, 2, 3, 4, 5, 6]

# 删除元素
numbers.remove(0)       # 删除指定值
popped = numbers.pop()  # 删除并返回最后一个
numbers.pop(0)          # 删除指定索引

# 其他方法
numbers.sort()          # 排序
numbers.reverse()       # 反转
count = numbers.count(2)  # 计数
index = numbers.index(3)  # 查找索引
\`\`\``,
    exercises: [
      {
        title: '列表魔法操作',
        description: '创建一个列表并进行各种操作',
        starter_code: '# 创建一个包含5个数字的列表\nmagic_numbers = [3, 1, 4, 1, 5]\n\n# 进行各种列表操作\n',
        difficulty: 'medium',
        points: 20,
      },
    ],
  },
];

// 继续添加第6-30天的数据
const morelevelsData = [
  {
    level_number: 6,
    title: '第06天 - 元组',
    description: '学习不可变的序列类型 - 元组',
    magic_points: 130,
    content: `# 第06天 - 元组

## 元组简介
元组是不可变的有序集合，类似于列表但不能修改。

\`\`\`python
# 创建元组
empty = ()
single = (1,)  # 注意逗号
numbers = (1, 2, 3, 4, 5)
mixed = (1, 'Python', True)

# 访问元素
print(numbers[0])   # 1
print(numbers[-1])  # 5

# 元组解包
x, y, z = (1, 2, 3)
\`\`\``,
    exercises: [
      {
        title: '元组魔法',
        description: '创建元组并练习元组解包',
        starter_code: '# 创建一个包含你的信息的元组\nmy_info = ("姓名", 25, "城市")\n\n',
        difficulty: 'easy',
        points: 15,
      },
    ],
  },
  {
    level_number: 7,
    title: '第07天 - 集合',
    description: '学习无序且唯一的数据结构 - 集合',
    magic_points: 140,
    content: `# 第07天 - 集合

## 集合简介
集合是无序且不包含重复元素的集合。

\`\`\`python
# 创建集合
fruits = {'苹果', '香蕉', '橙子'}
numbers = set([1, 2, 3, 2, 1])  # {1, 2, 3}

# 添加元素
fruits.add('葡萄')

# 删除元素
fruits.remove('苹果')
fruits.discard('香蕉')  # 不存在也不报错

# 集合运算
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)  # 并集: {1, 2, 3, 4, 5, 6}
print(a & b)  # 交集: {3, 4}
print(a - b)  # 差集: {1, 2}
\`\`\``,
    exercises: [
      {
        title: '集合魔法运算',
        description: '练习集合的各种运算',
        starter_code: 'set_a = {1, 2, 3, 4, 5}\nset_b = {4, 5, 6, 7, 8}\n\n',
        difficulty: 'medium',
        points: 18,
      },
    ],
  },
  {
    level_number: 8,
    title: '第08天 - 字典',
    description: '学习键值对数据结构 - 字典',
    magic_points: 160,
    content: `# 第08天 - 字典

## 字典简介
字典是键值对的无序集合。

\`\`\`python
# 创建字典
person = {
    'name': '张三',
    'age': 25,
    'city': '北京'
}

# 访问值
print(person['name'])
print(person.get('age'))

# 添加/修改
person['email'] = 'zhangsan@example.com'
person['age'] = 26

# 删除
del person['city']
person.pop('email')

# 遍历字典
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\``,
    exercises: [
      {
        title: '字典魔法',
        description: '创建一个学生信息字典并进行操作',
        starter_code: '# 创建学生字典\nstudent = {}\n\n',
        difficulty: 'medium',
        points: 20,
      },
    ],
  },
  {
    level_number: 9,
    title: '第09天 - 条件语句',
    description: '学习if-elif-else条件控制',
    magic_points: 140,
    content: `# 第09天 - 条件语句

## if语句

\`\`\`python
age = 18

if age >= 18:
    print("你是成年人")

# if-else
if age >= 18:
    print("你是成年人")
else:
    print("你是未成年人")

# if-elif-else
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
\`\`\`

## 三元运算符

\`\`\`python
age = 18
status = "成年人" if age >= 18 else "未成年人"
\`\`\``,
    exercises: [
      {
        title: '条件魔法',
        description: '编写程序判断一个数字是正数、负数还是零',
        starter_code: 'number = 10\n\n# 判断并输出结果\n',
        difficulty: 'easy',
        points: 15,
      },
    ],
  },
  {
    level_number: 10,
    title: '第10天 - 循环',
    description: '学习for和while循环',
    magic_points: 150,
    content: `# 第10天 - 循环

## for循环

\`\`\`python
# 遍历列表
fruits = ['苹果', '香蕉', '橙子']
for fruit in fruits:
    print(fruit)

# 使用range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# 遍历字典
person = {'name': '张三', 'age': 25}
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

## while循环

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1

# break和continue
for i in range(10):
    if i == 3:
        continue  # 跳过3
    if i == 7:
        break  # 在7处停止
    print(i)
\`\`\``,
    exercises: [
      {
        title: '循环魔法',
        description: '使用循环打印1到100之间的所有偶数',
        starter_code: '# 打印1到100之间的偶数\n',
        difficulty: 'medium',
        points: 18,
      },
    ],
  },
];

// 添加第11-20天
const advancedLevelsData = [
  {
    level_number: 11,
    title: '第11天 - 函数',
    description: '学习如何定义和使用函数',
    magic_points: 170,
    content: `# 第11天 - 函数

## 定义函数

\`\`\`python
def greet():
    print("你好！")

greet()  # 调用函数

# 带参数的函数
def greet_person(name):
    print(f"你好，{name}！")

greet_person("张三")

# 返回值
def add(a, b):
    return a + b

result = add(5, 3)  # 8

# 默认参数
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9
print(power(3, 3))   # 27
\`\`\``,
    exercises: [
      {
        title: '函数魔法',
        description: '创建一个计算圆面积的函数',
        starter_code: 'import math\n\ndef circle_area(radius):\n    # 你的代码\n    pass\n\n',
        difficulty: 'medium',
        points: 20,
      },
    ],
  },
  {
    level_number: 12,
    title: '第12天 - 模块',
    description: '学习如何导入和使用模块',
    magic_points: 150,
    content: `# 第12天 - 模块

## 导入模块

\`\`\`python
# 导入整个模块
import math
print(math.pi)

# 从模块导入特定函数
from math import sqrt, pi
print(sqrt(16))

# 导入并重命名
import math as m
print(m.sqrt(25))

# 导入所有
from math import *
\`\`\`

## 常用内置模块

- math: 数学函数
- random: 随机数
- datetime: 日期时间
- os: 操作系统接口
- sys: 系统特定参数
\`\`\``,
    exercises: [
      {
        title: '模块魔法',
        description: '使用random模块生成10个随机数',
        starter_code: 'import random\n\n# 生成随机数\n',
        difficulty: 'easy',
        points: 15,
      },
    ],
  },
  {
    level_number: 13,
    title: '第13天 - 列表推导式',
    description: '学习Python的列表推导式',
    magic_points: 160,
    content: `# 第13天 - 列表推导式

## 基本语法

\`\`\`python
# 传统方式
squares = []
for i in range(10):
    squares.append(i ** 2)

# 列表推导式
squares = [i ** 2 for i in range(10)]

# 带条件的列表推导式
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]

# 嵌套列表推导式
matrix = [[i+j for j in range(3)] for i in range(3)]
\`\`\``,
    exercises: [
      {
        title: '推导式魔法',
        description: '使用列表推导式创建1-50之间所有3的倍数',
        starter_code: '# 使用列表推导式\nmultiples_of_3 = \n\n',
        difficulty: 'medium',
        points: 18,
      },
    ],
  },
  {
    level_number: 14,
    title: '第14天 - 高阶函数',
    description: '学习map、filter、reduce等高阶函数',
    magic_points: 180,
    content: `# 第14天 - 高阶函数

## map函数

\`\`\`python
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]
\`\`\`

## filter函数

\`\`\`python
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6]
\`\`\`

## reduce函数

\`\`\`python
from functools import reduce
numbers = [1, 2, 3, 4, 5]
sum_all = reduce(lambda x, y: x + y, numbers)
print(sum_all)  # 15
\`\`\``,
    exercises: [
      {
        title: '高阶函数魔法',
        description: '使用map和filter处理数据',
        starter_code: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# 使用高阶函数\n',
        difficulty: 'hard',
        points: 25,
      },
    ],
  },
  {
    level_number: 15,
    title: '第15天 - 错误处理',
    description: '学习异常处理',
    magic_points: 150,
    content: `# 第15天 - 错误处理

## try-except

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零！")

# 多个异常
try:
    number = int("abc")
except ValueError:
    print("无效的数字")
except Exception as e:
    print(f"发生错误：{e}")

# finally
try:
    file = open("file.txt")
    # 处理文件
finally:
    file.close()  # 总是执行

# raise抛出异常
def validate_age(age):
    if age < 0:
        raise ValueError("年龄不能为负数")
    return age
\`\`\``,
    exercises: [
      {
        title: '错误处理魔法',
        description: '编写带有错误处理的除法函数',
        starter_code: 'def safe_divide(a, b):\n    # 你的代码\n    pass\n\n',
        difficulty: 'medium',
        points: 20,
      },
    ],
  },
];

// 添加第16-30天
const expertLevelsData = [
  {
    level_number: 16,
    title: '第16天 - 日期时间',
    description: '学习datetime模块',
    magic_points: 140,
    content: `# 第16天 - 日期时间

\`\`\`python
from datetime import datetime, date, timedelta

# 当前时间
now = datetime.now()
print(now)

# 创建日期
birthday = date(1990, 1, 15)

# 格式化
formatted = now.strftime("%Y-%m-%d %H:%M:%S")

# 时间运算
tomorrow = now + timedelta(days=1)
\`\`\``,
    exercises: [
      {
        title: '时间魔法',
        description: '计算两个日期之间的天数差',
        starter_code: 'from datetime import date\n\n',
        difficulty: 'medium',
        points: 18,
      },
    ],
  },
  {
    level_number: 17,
    title: '第17天 - 文件操作',
    description: '学习读写文件',
    magic_points: 160,
    content: `# 第17天 - 文件操作

\`\`\`python
# 写文件
with open('file.txt', 'w', encoding='utf-8') as f:
    f.write("Hello, Python!")

# 读文件
with open('file.txt', 'r', encoding='utf-8') as f:
    content = f.read()
    print(content)

# 逐行读取
with open('file.txt', 'r') as f:
    for line in f:
        print(line.strip())
\`\`\``,
    exercises: [
      {
        title: '文件魔法',
        description: '读取文件内容并统计单词数',
        starter_code: '# 文件操作代码\n',
        difficulty: 'medium',
        points: 20,
      },
    ],
  },
  {
    level_number: 18,
    title: '第18天 - 正则表达式',
    description: '学习使用正则表达式',
    magic_points: 170,
    content: `# 第18天 - 正则表达式

\`\`\`python
import re

# 匹配
pattern = r'\\d+'  # 匹配数字
text = "我有100个苹果和50个橙子"
numbers = re.findall(pattern, text)

# 替换
new_text = re.sub(r'\\d+', 'X', text)

# 分割
parts = re.split(r'\\s+', "Python  is   awesome")
\`\`\``,
    exercises: [
      {
        title: '正则魔法',
        description: '验证邮箱格式',
        starter_code: 'import re\n\ndef is_valid_email(email):\n    # 你的代码\n    pass\n\n',
        difficulty: 'hard',
        points: 25,
      },
    ],
  },
  {
    level_number: 19,
    title: '第19天 - 装饰器',
    description: '学习Python装饰器',
    magic_points: 180,
    content: `# 第19天 - 装饰器

\`\`\`python
def my_decorator(func):
    def wrapper():
        print("函数执行前")
        func()
        print("函数执行后")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
\`\`\``,
    exercises: [
      {
        title: '装饰器魔法',
        description: '创建一个计时装饰器',
        starter_code: 'import time\n\ndef timer(func):\n    # 你的代码\n    pass\n\n',
        difficulty: 'hard',
        points: 25,
      },
    ],
  },
  {
    level_number: 20,
    title: '第20天 - 面向对象编程',
    description: '学习类和对象',
    magic_points: 200,
    content: `# 第20天 - 面向对象编程

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"你好，我是{self.name}"

# 创建对象
person = Person("张三", 25)
print(person.greet())

# 继承
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
\`\`\``,
    exercises: [
      {
        title: 'OOP魔法',
        description: '创建一个计算器类',
        starter_code: 'class Calculator:\n    # 你的代码\n    pass\n\n',
        difficulty: 'medium',
        points: 22,
      },
    ],
  },
];

// 第21-30天简化版本
const finalLevelsData = Array.from({ length: 10 }, (_, i) => ({
  level_number: 21 + i,
  title: `第${String(21 + i).padStart(2, '0')}天 - 高级主题${i + 1}`,
  description: [
    'Web开发基础',
    '数据库操作',
    'API开发',
    '异步编程',
    '测试',
    '性能优化',
    '项目实战(1)',
    '项目实战(2)',
    '项目实战(3)',
    '总结与展望'
  ][i],
  magic_points: 200 + i * 10,
  content: `# 第${String(21 + i).padStart(2, '0')}天 - ${[
    'Web开发基础',
    '数据库操作',
    'API开发',
    '异步编程',
    '测试',
    '性能优化',
    '项目实战(1)',
    '项目实战(2)',
    '项目实战(3)',
    '总结与展望'
  ][i]}

这是进阶内容，继续深入学习Python！

\`\`\`python
# 示例代码
print("继续学习，成为Python大师！")
\`\`\``,
  exercises: [
    {
      title: `第${21 + i}天练习`,
      description: '完成本天的练习题',
      starter_code: '# 编写你的代码\n',
      difficulty: 'hard',
      points: 25 + i * 2,
    },
  ],
}));

async function initLevels() {
  try {
    console.log('开始初始化关卡数据...');

    const allLevels = [
      ...levelsData,
      ...morelevelsData,
      ...advancedLevelsData,
      ...expertLevelsData,
      ...finalLevelsData,
    ];

    for (const levelData of allLevels) {
      // 插入关卡
      const [level] = await sql`
        INSERT INTO levels (level_number, title, description, content, magic_points, unlock_requirement)
        VALUES (
          ${levelData.level_number},
          ${levelData.title},
          ${levelData.description},
          ${levelData.content},
          ${levelData.magic_points},
          ${levelData.level_number > 1 ? levelData.level_number - 1 : null}
        )
        ON CONFLICT (level_number) DO UPDATE SET
          title = EXCLUDED.title,
          description = EXCLUDED.description,
          content = EXCLUDED.content,
          magic_points = EXCLUDED.magic_points
        RETURNING id
      `;

      console.log(`✓ 关卡 ${levelData.level_number} 已创建`);

      // 插入练习题
      if (levelData.exercises) {
        for (let i = 0; i < levelData.exercises.length; i++) {
          const exercise = levelData.exercises[i];
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
            ON CONFLICT DO NOTHING
          `;
        }
        console.log(`  ✓ ${levelData.exercises.length} 个练习题已创建`);
      }
    }

    console.log('\\n🎉 所有关卡数据初始化完成！');
    console.log(`总共创建了 ${allLevels.length} 个关卡`);
  } catch (error) {
    console.error('初始化失败:', error);
    throw error;
  }
}

initLevels();

