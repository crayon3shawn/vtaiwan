"use client";

import { useEffect, useRef } from 'react';

interface WordCloudProps {
  words: Array<{
    text: string;
    value: number;
    category: 'positive' | 'negative' | 'neutral';
  }>;
}

export default function WordCloud({ words }: WordCloudProps) {
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
                        word.category === 'negative' ? '#FF5252' : '#9E9E9E';
      span.style.transition = 'all 0.3s ease';
      span.style.cursor = 'pointer';
      span.style.whiteSpace = 'nowrap';

      // 添加懸停效果
      span.addEventListener('mouseover', () => {
        span.style.transform = 'translate(-50%, -50%) scale(1.2)';
        span.style.fontWeight = 'bold';
      });

      span.addEventListener('mouseout', () => {
        span.style.transform = 'translate(-50%, -50%)';
        span.style.fontWeight = 'normal';
      });

      container.appendChild(span);
    });
  }, [words]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[300px] relative"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    />
  );
} 