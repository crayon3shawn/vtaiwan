"use client";

import { useEffect } from 'react';
import VoteChart from '@/components/VoteChart';
import SimpleWordCloud from '@/components/SimpleWordCloud';

const voteData = {
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
};

export default function TopicPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg p-6">
          {/* 投票結果 */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">投票結果</h2>
            <div className="h-[300px]">
              <VoteChart data={voteData} />
            </div>
          </section>

          {/* 主要觀點 */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4">主要觀點</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-medium mb-2">支持禁止 AI 用於政治宣傳的觀點：</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>防止虛假資訊傳播</li>
                  <li>保護選舉公平性</li>
                  <li>維護民主價值</li>
                </ul>
              </div>
              <div>
                <h3 className="text-md font-medium mb-2">反對禁止 AI 用於政治宣傳的觀點：</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>言論自由限制</li>
                  <li>技術創新阻礙</li>
                  <li>難以執法</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 結論 */}
          <section>
            <h2 className="text-lg font-semibold mb-4">結論</h2>
            <p className="text-gray-300">
              討論後，參與者對 AI 在政治宣傳中的使用有了更深入的認識。建議採取平衡的監管方式，
              既保護民主價值，又不阻礙技術創新。
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 