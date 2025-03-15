"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const topics = [
  { id: 'ai-political', title: 'AI 生成內容與政治宣傳' },
  { id: 'ai-transparency', title: 'AI 透明度與信任度' },
  { id: 'ai-industry', title: 'AI 產業影響與市場機制' },
  { id: 'ai-stereotypes', title: 'AI 與刻板印象' },
  { id: 'ai-responsibility', title: 'AI 開發者責任' },
];

interface DotNavigationProps {
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function DotNavigation({ currentIndex, onIndexChange }: DotNavigationProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        onIndexChange((currentIndex + 1) % topics.length);
        router.push(`/topics/${topics[(currentIndex + 1) % topics.length].id}`);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        onIndexChange((currentIndex - 1 + topics.length) % topics.length);
        router.push(`/topics/${topics[(currentIndex - 1 + topics.length) % topics.length].id}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onIndexChange, router]);

  return (
    <section className="fixed bottom-8 left-0 right-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-4">
          {topics.map((topic, index) => (
            <motion.button
              key={topic.id}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-gray-600'
              }`}
              onClick={() => {
                onIndexChange(index);
                router.push(`/topics/${topic.id}`);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            {topics[currentIndex].title}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            使用方向鍵切換章節
          </p>
        </div>
      </div>
    </section>
  );
} 