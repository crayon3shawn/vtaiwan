"use client";

import { useState } from 'react';
import VoteChart from '@/components/VoteChart';
import SimpleWordCloud from '@/components/SimpleWordCloud';

const voteData = {
  before: {
    veryDisagree: 15,
    disagree: 25,
    neutral: 30,
    agree: 20,
    veryAgree: 10,
  },
  after: {
    veryDisagree: 20,
    disagree: 30,
    neutral: 25,
    agree: 15,
    veryAgree: 10,
  },
};

const keywords = [
  { text: 'AI監管', value: 100, category: 'neutral' },
  { text: '透明度', value: 80, category: 'positive' },
  { text: '隱私', value: 70, category: 'negative' },
  { text: '創新', value: 60, category: 'positive' },
  { text: '風險', value: 50, category: 'negative' },
  { text: '倫理', value: 40, category: 'neutral' },
  { text: '發展', value: 30, category: 'positive' },
  { text: '限制', value: 30, category: 'negative' },
];

export default function InteractivePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">vTaiwan AI 監管討論追蹤</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左側：投票結果 */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">投票結果分析</h2>
          <div className="space-y-4">
            <VoteChart
              beforeData={voteData.before}
              afterData={voteData.after}
              title="討論前後投票變化"
            />
            <div className="text-gray-400 text-sm text-center mt-4">
              點擊按鈕切換查看討論前後的投票變化
            </div>
          </div>
        </div>

        {/* 右側：關鍵字分析 */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">關鍵字分析</h2>
          <div className="space-y-4">
            <SimpleWordCloud words={keywords} />
            <div className="text-gray-400 text-sm text-center mt-4">
              滑鼠懸停在關鍵字上可查看詳細信息
            </div>
          </div>
        </div>
      </div>

      {/* 底部說明 */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>數據來源：vTaiwan 討論平台</p>
        <p>更新時間：2024-02-24</p>
      </div>
    </div>
  );
} 