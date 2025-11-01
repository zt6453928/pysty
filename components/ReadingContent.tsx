'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

interface ReadingContentProps {
  title: string;
  subtitle?: string;
  readingTime?: string;
  progress?: number;
  content: string;
  magicPoints?: number;
}

export default function ReadingContent({
  title,
  subtitle,
  readingTime = "阅读大约需要：20分钟",
  progress = 0,
  content,
  magicPoints,
}: ReadingContentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Badge variant="secondary" className="bg-purple-100 text-purple-900 hover:bg-purple-200 border-purple-200">
              <BookOpen className="w-3 h-3 mr-1" />
              学习内容
            </Badge>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{readingTime}</span>
            </div>
            {magicPoints && (
              <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 border-yellow-300">
                ⭐ {magicPoints} 魔法点数
              </Badge>
            )}
          </div>
          
          <h1 className="text-5xl font-bold text-purple-900 mb-3 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl text-gray-700 mb-6">
              {subtitle}
            </p>
          )}
          
          {/* Progress Bar */}
          {progress > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700" />
                  学习进度
                </span>
                <span className="font-semibold text-purple-900">{progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-700 to-purple-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <Separator className="my-8 bg-gray-300" />

        {/* Content Section - 高对比度阅读区域 */}
        <Card className="bg-white border-gray-200 shadow-xl p-0 overflow-hidden">
          <div className="px-8 py-8">
            <div className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:text-purple-900
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-purple-800
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-purple-700
              prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-4 prose-h4:text-purple-600
              prose-p:text-gray-900 prose-p:leading-[1.8] prose-p:my-4 prose-p:text-base
              prose-a:text-purple-700 prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-purple-900
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-em:text-gray-800 prose-em:italic
              prose-code:text-purple-800 prose-code:bg-transparent prose-code:px-0 prose-code:py-0 prose-code:font-mono prose-code:text-sm prose-code:font-semibold prose-code:before:content-[''] prose-code:after:content-['']
              prose-pre:bg-[#1a1a1a] prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-6 prose-pre:shadow-2xl prose-pre:overflow-x-auto prose-pre:border prose-pre:border-gray-700
              prose-pre>code:text-white prose-pre>code:bg-transparent prose-pre>code:p-0 prose-pre>code:text-base prose-pre>code:leading-relaxed prose-pre>code:font-normal prose-pre>code:!text-white
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
              prose-li:text-gray-900 prose-li:my-2 prose-li:leading-[1.8]
              prose-li>p:my-1
              prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:bg-purple-50 prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:rounded-r-lg
              prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-8 prose-img:border prose-img:border-gray-200 prose-img:max-w-full prose-img:h-auto
              prose-hr:border-gray-300 prose-hr:my-8
              prose-table:border-collapse prose-table:w-full prose-table:my-6 prose-table:shadow-lg prose-table:rounded-lg prose-table:overflow-hidden
              prose-thead:bg-purple-100
              prose-th:bg-purple-100 prose-th:text-purple-900 prose-th:font-bold prose-th:p-4 prose-th:border prose-th:border-gray-300 prose-th:text-left
              prose-td:p-4 prose-td:border prose-td:border-gray-300 prose-td:text-gray-900 prose-td:bg-white
              prose-tr:even:bg-gray-50
            ">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

