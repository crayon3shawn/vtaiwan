"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface TopicLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function TopicLayout({ title, children }: TopicLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 頂部導航 */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link 
              href="/"
              className="text-gray-400 hover:text-white transition-colors mr-4"
            >
              ← 返回首頁
            </Link>
            <h1 className="text-xl font-bold flex-1 text-center">{title}</h1>
          </div>
        </div>
      </header>

      {/* 主要內容 */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 pt-20 pb-8"
      >
        {children}
      </motion.main>
    </div>
  );
} 