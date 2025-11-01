# 🔧 React Hooks 错误修复

## 问题描述

学习中心页面报错：

```
Console Error

React has detected a change in the order of Hooks 
called by Dashboard. This will lead to bugs and errors 
if not fixed.
```

---

## 问题原因

### React Hooks 规则

React Hooks 必须遵守两条规则：
1. **只在顶层调用 Hooks** - 不能在条件语句、循环或嵌套函数中调用
2. **保持 Hooks 调用顺序一致** - 每次渲染时 Hooks 的调用顺序必须相同

### 代码中的问题

**错误的代码结构**:
```typescript
useEffect(...);  // Hook 1

// ❌ 错误：计算值在这里
const currentLevel = ...;

if (loading) {
  return (...);  // 条件返回
}

// ❌ 错误：useMemo 在条件返回之后
const levelStatuses = useMemo(...);  // Hook 2
```

**问题**:
- 当 `loading = true` 时，提前返回，`useMemo` 不会被调用
- 当 `loading = false` 时，`useMemo` 会被调用
- Hooks 调用顺序不一致！违反规则！

---

## ✅ 修复方案

### 正确的代码结构

```typescript
// ✅ 1. 所有 useState
const [levels, setLevels] = useState(...);
const [userProgress, setUserProgress] = useState(...);
const [loading, setLoading] = useState(...);

// ✅ 2. 其他 Hooks
const user = useUser();

// ✅ 3. useEffect
useEffect(() => { ... }, [userId]);

// ✅ 4. 计算值
const currentLevel = userProgress?.reward?.current_level || 1;
const totalMagicPoints = ...;
const achievements = ...;

// ✅ 5. useMemo（在条件返回之前！）
const levelStatuses = useMemo(() => { ... }, [...]);

// ✅ 6. 普通函数/组件
const SkeletonCard = () => (...);

// ✅ 7. 条件返回（最后！）
if (loading) {
  return (...);
}

// ✅ 8. 正常渲染
return (...);
```

---

## 🎯 修复详情

### 调整顺序

**移动的内容**:

1. 把 `currentLevel`、`totalMagicPoints`、`achievements` 计算移到 useEffect 之后
2. 把 `useMemo` 移到 if (loading) 之前
3. 把 `SkeletonCard` 组件定义移到 if (loading) 之前

**结果**: Hooks 调用顺序在所有渲染路径中保持一致 ✅

---

## 📊 Hooks 调用顺序

### 修复后的正确顺序

```
渲染开始
  ↓
1. useState (levels)
2. useState (userProgress)  
3. useState (loading)
4. useUser()
5. useEffect()
6. useMemo()              ← 始终调用
  ↓
判断 loading
  ↓
if true → 返回骨架屏
if false → 返回正常内容
```

**关键**: useMemo 在条件判断之前，确保每次都被调用 ✅

---

## ✅ 验证修复

### 测试步骤

```bash
# 1. 刷新页面
按 F5 或 Cmd+R

# 2. 检查控制台
打开开发者工具 (F12)

✓ 没有红色错误
✓ 没有 Hooks 警告
✓ 页面正常加载
```

### 预期结果

- ✅ 页面正常显示
- ✅ 没有控制台错误
- ✅ 骨架屏正常工作
- ✅ 数据正常加载

---

## 💡 React Hooks 最佳实践

### 规则1: Hooks 顺序

**正确** ✅:
```typescript
function Component() {
  const [state1] = useState();    // Hook 1
  const [state2] = useState();    // Hook 2
  useEffect(() => {});            // Hook 3
  const value = useMemo(() => {}); // Hook 4
  
  if (condition) return <div />;  // 条件返回在最后
  return <div />;
}
```

**错误** ❌:
```typescript
function Component() {
  const [state1] = useState();
  
  if (condition) {
    useEffect(() => {});  // ❌ Hooks 在条件中
    return <div />;
  }
  
  const [state2] = useState();  // ❌ 顺序不一致
  return <div />;
}
```

### 规则2: 依赖数组

**正确** ✅:
```typescript
useEffect(() => {
  fetchData(userId);
}, [userId]);  // ✅ 包含所有依赖
```

**错误** ❌:
```typescript
useEffect(() => {
  fetchData(userId);
}, []);  // ❌ 缺少 userId 依赖
```

---

## 🎉 修复完成

### 修改的文件

- ✅ `app/dashboard/page.tsx`

### 修复内容

- ✅ 调整 Hooks 调用顺序
- ✅ 确保顺序一致性
- ✅ 符合 React 规则

---

## 🚀 立即测试

```bash
# 刷新页面
http://localhost:3000/dashboard

✓ 页面正常加载
✓ 没有错误提示
✓ 性能优化生效
✓ 骨架屏正常显示
```

---

**错误已修复！页面现在正常工作了！** ✅

**享受飞快的加载速度吧！** ⚡🎉

