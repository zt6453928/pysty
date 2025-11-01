// Pyodide 类型定义
interface PyodideInterface {
  runPython(code: string): any;
  runPythonAsync(code: string): Promise<any>;
  loadPackage(packageName: string | string[]): Promise<void>;
  globals: {
    get(name: string): any;
    set(name: string, value: any): void;
  };
}

interface Window {
  loadPyodide(config: { indexURL: string }): Promise<PyodideInterface>;
}

