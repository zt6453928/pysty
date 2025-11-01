'use client';

import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ message = '加载中...' }: LoadingSpinnerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="animate-spin text-purple-400 mx-auto mb-4" size={64} />
        <p className="text-purple-300 text-xl">{message}</p>
      </div>
    </div>
  );
}

