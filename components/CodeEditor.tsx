'use client';

import Editor from '@monaco-editor/react';
import { useState, useEffect, useRef } from 'react';
import { Play, CheckCircle, XCircle } from 'lucide-react';
import MagicCard from './MagicCard';

interface CodeEditorProps {
  exerciseId: number;
  starterCode?: string;
  userId?: string;
  onSubmit?: (code: string, passed: boolean, score: number) => void;
}

export default function CodeEditor({ exerciseId, starterCode = '', userId, onSubmit }: CodeEditorProps) {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testsPassed, setTestsPassed] = useState<boolean | null>(null);
  const [pyodideReady, setPyodideReady] = useState(false);
  const pyodideRef = useRef<any>(null);

  // 加载 Pyodide
  useEffect(() => {
    const loadPyodide = async () => {
      try {
        // @ts-ignore
        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
        });
        pyodideRef.current = pyodide;
        setPyodideReady(true);
      } catch (error) {
        console.error('Pyodide 加载失败:', error);
      }
    };

    loadPyodide();
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const runCode = async () => {
    if (!pyodideReady || !pyodideRef.current) {
      setOutput('❌ Python 运行环境正在加载中，请稍候...');
      return;
    }

    setIsRunning(true);
    setOutput('正在执行代码...');
    
    try {
      const pyodide = pyodideRef.current;

      // 重定向 stdout
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
      `);

      // 创建一个 JavaScript 函数用于 input
      const jsInput = (prompt: string) => {
        const userInput = window.prompt(prompt || '请输入:');
        if (userInput === null) {
          throw new Error('用户取消输入');
        }
        return userInput;
      };

      // 将 JavaScript 函数注入到 Python 全局命名空间
      pyodide.globals.set('js_input', jsInput);

      // 替换 Python 的 input 函数
      pyodide.runPython(`
import builtins
builtins.input = js_input
      `);

      // 执行用户代码
      await pyodide.runPythonAsync(code);

      // 获取输出
      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      const stderr = pyodide.runPython('sys.stderr.getvalue()');

      if (stderr) {
        setOutput('❌ 代码执行错误：\n\n' + stderr + '\n\n💡 提示：检查你的代码语法和逻辑');
        setTestsPassed(false);
      } else {
        const finalOutput = '✅ 代码执行成功！\n\n📤 输出结果：\n' + (stdout || '(无输出)');
        setOutput(finalOutput);
        setTestsPassed(true);

        // 调用后端 API 记录成绩
        if (userId) {
          try {
            await fetch('/api/exercises/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                exerciseId, 
                code, 
                userId,
                clientExecuted: true,
                stdout: stdout || ''
              }),
            });
          } catch (error) {
            console.error('记录成绩失败:', error);
          }
        }
      
      if (onSubmit) {
          onSubmit(code, true, 10); // 简化评分逻辑
        }
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      setOutput('❌ 执行出错：\n\n' + errorMessage);
      setTestsPassed(false);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="space-y-4">
      <MagicCard className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold spell-text">魔法代码编辑器</h3>
          <div className="flex items-center gap-3">
            {!pyodideReady && (
              <span className="text-sm text-yellow-400">🔄 加载中...</span>
            )}
            {pyodideReady && (
              <span className="text-sm text-green-400">✓ 就绪</span>
            )}
          <button
            onClick={runCode}
              disabled={isRunning || !pyodideReady}
            className="magic-button flex items-center gap-2 py-2 px-4"
          >
            <Play size={16} />
            {isRunning ? '施展魔法中...' : '运行代码'}
          </button>
          </div>
        </div>
        
        <div className="code-editor">
          <Editor
            height="400px"
            defaultLanguage="python"
            value={code}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              readOnly: false,
              automaticLayout: true,
            }}
          />
        </div>
      </MagicCard>

      {output && (
        <MagicCard className="p-4">
          <div className="flex items-center gap-2 mb-2">
            {testsPassed === true && <CheckCircle className="text-green-400" size={20} />}
            {testsPassed === false && <XCircle className="text-red-400" size={20} />}
            <h4 className="font-bold">输出结果</h4>
          </div>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm text-white whitespace-pre-wrap">
            {output}
          </pre>
        </MagicCard>
      )}
    </div>
  );
}

