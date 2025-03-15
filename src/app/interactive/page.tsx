"use client";

import VoteChart from '@/components/VoteChart';
import SimpleWordCloud from '@/components/SimpleWordCloud';

const voteData = {
  before: {
    "非常不同意": 15,
    "不同意": 25,
    "中立": 30,
    "同意": 20,
    "非常同意": 10,
  },
  after: {
    "非常不同意": 20,
    "不同意": 30,
    "中立": 25,
    "同意": 15,
    "非常同意": 10,
  },
};

const keywords = [
  { text: 'AI監管', value: 100, category: 'neutral' as const },
  { text: '透明度', value: 80, category: 'positive' as const },
  { text: '隱私', value: 70, category: 'negative' as const },
  { text: '創新', value: 60, category: 'positive' as const },
  { text: '風險', value: 50, category: 'negative' as const },
  { text: '倫理', value: 40, category: 'neutral' as const },
  { text: '發展', value: 30, category: 'positive' as const },
  { text: '限制', value: 30, category: 'negative' as const },
];

export default function InteractivePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">vTaiwan AI 監管討論追蹤</h1>
      
      <div className="grid grid-cols-1 gap-8">
        {/* 投票結果 */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">投票結果分析</h2>
          <div className="space-y-4">
            <VoteChart data={voteData} />
            <div className="text-gray-400 text-sm text-center mt-4">
              點擊按鈕切換查看討論前後的投票變化
            </div>
          </div>
        </div>

        {/* 關鍵字分析 */}
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