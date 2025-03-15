"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VoteChart from '@/components/VoteChart';
import SimpleWordCloud from '@/components/SimpleWordCloud';

const topics = [
  { 
    id: 'ai-political', 
    title: 'AI 生成內容與政治宣傳',
    description: '探討 AI 生成內容在政治宣傳中的使用規範，以及對民主選舉的影響。',
    voteData: {
      before: {
        "非常不同意": 19,
        "不同意": 27,
        "中立": 16,
        "同意": 22,
        "非常同意": 16
      },
      after: {
        "非常不同意": 14,
        "不同意": 26,
        "中立": 23,
        "同意": 11,
        "非常同意": 6
      }
    },
    keywords: [
      { text: '假新聞', value: 90, category: 'negative' as const },
      { text: '選舉', value: 85, category: 'neutral' as const },
      { text: '民主', value: 80, category: 'positive' as const },
      { text: '操控', value: 75, category: 'negative' as const },
      { text: '監管', value: 70, category: 'neutral' as const }
    ]
  },
  { 
    id: 'ai-transparency', 
    title: 'AI 透明度與信任度',
    description: '討論 AI 系統的透明度要求，以及如何建立公眾對 AI 的信任。',
    voteData: {
      before: {
        "非常不同意": 11,
        "不同意": 32,
        "中立": 22,
        "同意": 16,
        "非常同意": 19
      },
      after: {
        "非常不同意": 14,
        "不同意": 26,
        "中立": 43,
        "同意": 11,
        "非常同意": 6
      }
    },
    keywords: [
      { text: '透明度', value: 95, category: 'positive' as const },
      { text: '信任', value: 90, category: 'positive' as const },
      { text: '隱私', value: 85, category: 'negative' as const },
      { text: '監管', value: 80, category: 'neutral' as const },
      { text: '資料', value: 75, category: 'neutral' as const }
    ]
  },
  { 
    id: 'ai-industry', 
    title: 'AI 產業影響與市場機制',
    description: '分析 AI 發展對產業的影響，以及市場機制的調節作用。',
    voteData: {
      before: {
        "非常不同意": 24,
        "不同意": 36,
        "中立": 21,
        "同意": 12,
        "非常同意": 6
      },
      after: {
        "非常不同意": 23,
        "不同意": 35,
        "中立": 23,
        "同意": 13,
        "非常同意": 6
      }
    },
    keywords: [
      { text: '就業', value: 95, category: 'negative' as const },
      { text: '創新', value: 90, category: 'positive' as const },
      { text: '競爭', value: 85, category: 'neutral' as const },
      { text: '轉型', value: 80, category: 'neutral' as const },
      { text: '機會', value: 75, category: 'positive' as const }
    ]
  },
  { 
    id: 'ai-stereotypes', 
    title: 'AI 與刻板印象',
    description: '探討 AI 系統中的偏見問題，以及如何避免強化社會刻板印象。',
    voteData: {
      before: {
        "非常不同意": 15,
        "不同意": 25,
        "中立": 30,
        "同意": 20,
        "非常同意": 10
      },
      after: {
        "非常不同意": 20,
        "不同意": 30,
        "中立": 25,
        "同意": 15,
        "非常同意": 10
      }
    },
    keywords: [
      { text: '偏見', value: 95, category: 'negative' as const },
      { text: '平等', value: 90, category: 'positive' as const },
      { text: '教育', value: 85, category: 'positive' as const },
      { text: '多元', value: 80, category: 'positive' as const },
      { text: '意識', value: 75, category: 'neutral' as const }
    ]
  },
  { 
    id: 'ai-responsibility', 
    title: 'AI 開發者責任',
    description: '討論 AI 開發者的社會責任，以及相關的倫理準則。',
    voteData: {
      before: {
        "非常不同意": 10,
        "不同意": 20,
        "中立": 35,
        "同意": 25,
        "非常同意": 10
      },
      after: {
        "非常不同意": 15,
        "不同意": 25,
        "中立": 30,
        "同意": 20,
        "非常同意": 10
      }
    },
    keywords: [
      { text: '倫理', value: 95, category: 'neutral' as const },
      { text: '責任', value: 90, category: 'positive' as const },
      { text: '安全', value: 85, category: 'positive' as const },
      { text: '風險', value: 80, category: 'negative' as const },
      { text: '規範', value: 75, category: 'neutral' as const }
    ]
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 處理鍵盤事件
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % topics.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        {/* 標題區 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">台灣的人工智慧應該如何規範？</h1>
          <p className="text-xl text-gray-300">vTaiwan AI 監管討論追蹤報告</p>
        </div>

        {/* 主題內容區 */}
        <div className="space-y-16">
          {topics.map((topic, index) => (
            <motion.section
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-4">{topic.title}</h2>
              <p className="text-gray-300 mb-8">{topic.description}</p>

              <div className="grid grid-cols-1 gap-8">
                {/* 投票結果 */}
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">投票結果分析</h3>
                  <VoteChart data={topic.voteData} />
                </div>

                {/* 關鍵字分析 */}
                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-6">關鍵字分析</h3>
                  <SimpleWordCloud words={topic.keywords} />
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* 底部說明 */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>數據來源：vTaiwan 討論平台</p>
          <p>更新時間：2024-02-24</p>
        </div>
      </main>
    </div>
  );
}
