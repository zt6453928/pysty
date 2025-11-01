# 🐳 Docker Python 代码执行环境（备用方案）

## 📋 概述

如果需要更强大的控制和自定义能力，可以使用 Docker 容器来执行 Python 代码。

---

## 🔧 Docker 方案优势

### 优点
- ✅ 完全控制执行环境
- ✅ 支持任何 Python 包
- ✅ 自定义资源限制
- ✅ 本地部署
- ✅ 无外部依赖

### 缺点
- ⚠️ 需要 Docker 服务
- ⚠️ 服务器资源消耗
- ⚠️ 维护成本较高
- ⚠️ 部署复杂度增加

---

## 📦 实现步骤

### 1. 创建 Dockerfile

```dockerfile
# Dockerfile.python-runner
FROM python:3.10-slim

# 设置工作目录
WORKDIR /app

# 安装常用包（可选）
RUN pip install --no-cache-dir \
    numpy \
    pandas \
    requests

# 创建执行脚本
COPY execute.py /app/

# 设置安全用户
RUN useradd -m -u 1000 runner && \
    chown -R runner:runner /app
USER runner

# 默认命令
CMD ["python", "execute.py"]
```

### 2. 创建执行脚本

```python
# execute.py
import sys
import json
import traceback
from io import StringIO

def execute_code(code):
    """安全执行 Python 代码"""
    # 捕获标准输出
    old_stdout = sys.stdout
    sys.stdout = StringIO()
    
    try:
        # 执行代码
        exec(code, {'__builtins__': __builtins__})
        
        # 获取输出
        output = sys.stdout.getvalue()
        return {
            'success': True,
            'stdout': output,
            'stderr': ''
        }
    except Exception as e:
        return {
            'success': False,
            'stdout': sys.stdout.getvalue(),
            'stderr': traceback.format_exc()
        }
    finally:
        sys.stdout = old_stdout

if __name__ == '__main__':
    # 从标准输入读取代码
    code = sys.stdin.read()
    result = execute_code(code)
    print(json.dumps(result))
```

### 3. 构建 Docker 镜像

```bash
# 构建镜像
docker build -f Dockerfile.python-runner -t python-runner:latest .

# 测试镜像
echo 'print("Hello, Docker!")' | docker run -i --rm python-runner:latest
```

---

## 🔌 Next.js API 集成

### 创建 Docker 执行服务

```typescript
// lib/docker-executor.ts
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function executeWithDocker(code: string): Promise<{
  stdout: string;
  stderr: string;
  success: boolean;
}> {
  try {
    // 转义代码中的特殊字符
    const escapedCode = code.replace(/'/g, "'\\''");
    
    // 使用 Docker 执行代码
    const { stdout, stderr } = await execAsync(
      `echo '${escapedCode}' | docker run -i --rm \
       --memory="128m" \
       --cpus="0.5" \
       --network="none" \
       --read-only \
       --tmpfs /tmp \
       python-runner:latest`,
      {
        timeout: 5000, // 5秒超时
        maxBuffer: 1024 * 1024 // 1MB 输出限制
      }
    );

    const result = JSON.parse(stdout);
    
    return {
      stdout: result.stdout,
      stderr: result.stderr,
      success: result.success
    };
  } catch (error) {
    console.error('Docker 执行错误:', error);
    throw error;
  }
}
```

### 更新 API 路由

```typescript
// app/api/exercises/run/route.ts
import { executeWithDocker } from '@/lib/docker-executor';

export async function POST(request: NextRequest) {
  const { exerciseId, code } = await request.json();
  
  // 使用 Docker 执行
  const result = await executeWithDocker(code);
  
  // 处理结果...
}
```

---

## 🔒 安全配置

### Docker 安全参数

```bash
docker run -i --rm \
  --memory="128m"        # 限制内存 128MB
  --cpus="0.5"           # 限制 CPU 50%
  --network="none"       # 禁用网络
  --read-only            # 只读文件系统
  --tmpfs /tmp           # 临时文件系统
  --pids-limit 50        # 限制进程数
  --security-opt=no-new-privileges \
  python-runner:latest
```

### 代码沙箱

```python
# 限制可用的内置函数
safe_builtins = {
    'print': print,
    'range': range,
    'len': len,
    'int': int,
    'str': str,
    'float': float,
    'list': list,
    'dict': dict,
    'tuple': tuple,
    'set': set,
    # ... 其他安全函数
}

# 执行代码时使用受限的内置函数
exec(code, {'__builtins__': safe_builtins})
```

---

## 📊 性能优化

### 1. 容器预热
```bash
# 预先拉取镜像
docker pull python:3.10-slim

# 预创建容器
docker create --name python-runner python-runner:latest
```

### 2. 容器池
```typescript
// 维护一个容器池，避免频繁创建销毁
class ContainerPool {
  private containers: Container[] = [];
  
  async getContainer(): Promise<Container> {
    // 从池中获取或创建新容器
  }
  
  async releaseContainer(container: Container): Promise<void> {
    // 归还容器到池中
  }
}
```

### 3. 缓存结果
```typescript
// 缓存相同代码的执行结果
const codeCache = new Map<string, ExecutionResult>();

function getCachedResult(code: string) {
  const hash = createHash('md5').update(code).digest('hex');
  return codeCache.get(hash);
}
```

---

## 🚀 部署指南

### 本地部署

```bash
# 1. 构建镜像
docker build -t python-runner .

# 2. 启动应用
npm run dev

# 3. 测试执行
curl -X POST http://localhost:3000/api/exercises/run \
  -H "Content-Type: application/json" \
  -d '{"exerciseId": 1, "code": "print(\"Hello!\")"}'
```

### 生产部署

```bash
# 1. 构建优化镜像
docker build --target production -t python-runner:prod .

# 2. 推送到仓库
docker tag python-runner:prod your-registry/python-runner:latest
docker push your-registry/python-runner:latest

# 3. 在服务器上拉取
docker pull your-registry/python-runner:latest
```

---

## 📈 监控和日志

### 执行日志
```typescript
logger.info('代码执行开始', {
  exerciseId,
  codeLength: code.length,
  userId
});

logger.info('代码执行完成', {
  success: result.success,
  executionTime: duration,
  outputLength: result.stdout.length
});
```

### 性能监控
- 执行时间统计
- 成功率统计
- 错误类型分析
- 资源使用情况

---

## 🔄 切换方案

### 从 Piston 切换到 Docker

1. 安装 Docker
2. 构建镜像
3. 更新 API 路由
4. 测试验证

```typescript
// 配置开关
const USE_DOCKER = process.env.USE_DOCKER === 'true';

if (USE_DOCKER) {
  result = await executeWithDocker(code);
} else {
  result = await executePythonCode(code); // Piston API
}
```

---

## ✅ 对比总结

| 特性 | Piston API | Docker |
|------|-----------|--------|
| 部署难度 | ⭐ 简单 | ⭐⭐⭐ 复杂 |
| 性能 | ⭐⭐⭐ 良好 | ⭐⭐⭐⭐⭐ 优秀 |
| 可控性 | ⭐⭐ 一般 | ⭐⭐⭐⭐⭐ 完全 |
| 成本 | 免费 | 服务器成本 |
| 维护 | 无需维护 | 需要维护 |
| 包支持 | 标准库 | 任意包 |
| 推荐场景 | 学习平台 | 企业应用 |

---

**当前使用**: Piston API ✅  
**备用方案**: Docker 📝  
**状态**: 已文档化  

**选择最适合你的方案！** 🚀

