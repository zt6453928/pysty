'use client';

import Editor from '@monaco-editor/react';
import { useState } from 'react';
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

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('正在执行代码...');
    
    try {
      // 调用API运行代码
      const response = await fetch('/api/exercises/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ exerciseId, code, userId }),
      });
      
      const result = await response.json();
      setOutput(result.output);
      setTestsPassed(result.passed);
      
      if (onSubmit) {
        onSubmit(code, result.passed, result.score);
      }
    } catch (error) {
      setOutput('执行出错：' + (error as Error).message);
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
          <button
            onClick={runCode}
            disabled={isRunning}
            className="magic-button flex items-center gap-2 py-2 px-4"
          >
            <Play size={16} />
            {isRunning ? '施展魔法中...' : '运行代码'}
          </button>
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

