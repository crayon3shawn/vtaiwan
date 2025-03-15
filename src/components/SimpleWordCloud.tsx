"use client";

import { useRef, useEffect, useState } from 'react';

interface Word {
  text: string;
  value: number;
  category: 'positive' | 'negative' | 'neutral';
}

interface WordCloudProps {
  words: Word[];
}

export default function SimpleWordCloud({ words }: WordCloudProps) {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 50;

    // 清除現有內容
    container.innerHTML = '';

    // 計算每個詞的位置
    words.forEach((word, index) => {
      const angle = (index / words.length) * 2 * Math.PI;
      const distance = (word.value / 100) * radius;
      const x = centerX + distance * Math.cos(angle);
      const y = centerY + distance * Math.sin(angle);
      const fontSize = 16 + (word.value / 100) * 24;

      const span = document.createElement('span');
      span.textContent = word.text;
      span.style.position = 'absolute';
      span.style.left = `${x}px`;
      span.style.top = `${y}px`;
      span.style.transform = 'translate(-50%, -50%)';
      span.style.fontSize = `${fontSize}px`;
      span.style.color = word.category === 'positive' ? '#4CAF50' : 
                        word.category === 'negative' ? '#FF5252' : '#64B5F6';
      span.style.transition = 'all 0.3s ease';
      span.style.cursor = 'pointer';
      span.style.whiteSpace = 'nowrap';
      span.style.opacity = '0.8';

      // 添加懸停效果
      span.addEventListener('mouseover', () => {
        span.style.transform = 'translate(-50%, -50%) scale(1.2)';
        span.style.fontWeight = 'bold';
        span.style.opacity = '1';
        setHoveredWord(word.text);
      });

      span.addEventListener('mouseout', () => {
        span.style.transform = 'translate(-50%, -50%)';
        span.style.fontWeight = 'normal';
        span.style.opacity = '0.8';
        setHoveredWord(null);
      });

      container.appendChild(span);
    });
  }, [words]);

  return (
    <div className="relative">
      <div 
        ref={containerRef} 
        className="w-full h-[300px] relative"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#4CAF50] opacity-80 mr-2"></div>
          <span className="text-sm text-gray-300">正面</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#FF5252] opacity-80 mr-2"></div>
          <span className="text-sm text-gray-300">負面</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#64B5F6] opacity-80 mr-2"></div>
          <span className="text-sm text-gray-300">中性</span>
        </div>
      </div>
      {hoveredWord && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 px-4 py-2 rounded-lg text-sm">
          {hoveredWord}
        </div>
      )}
    </div>
  );
} 