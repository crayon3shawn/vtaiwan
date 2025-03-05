"use client";

import { useEffect, useState } from 'react';
import VoteChart from '@/components/VoteChart';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* 固定導航欄 */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex space-x-6">
            <button
              onClick={() => scrollToSection('overview')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'overview' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              報告概述
            </button>
            <button
              onClick={() => scrollToSection('ai-political')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'ai-political' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 政治宣傳
            </button>
            <button
              onClick={() => scrollToSection('ai-transparency')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'ai-transparency' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 透明度
            </button>
            <button
              onClick={() => scrollToSection('ai-industry')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'ai-industry' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 產業影響
            </button>
            <button
              onClick={() => scrollToSection('ai-stereotypes')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'ai-stereotypes' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 刻板印象
            </button>
            <button
              onClick={() => scrollToSection('ai-responsibility')}
              className={`text-sm font-medium transition-colors ${
                activeSection === 'ai-responsibility' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              AI 開發者責任
            </button>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main className="pt-16">
        {/* 報告概述 */}
        <section id="overview" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-8">vTaiwan Roundtable #2 Report</h1>
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">報告概述</h2>
              <p className="text-gray-300 mb-4">
                本報告探討 AI 監理與社會影響的重要議題，包含五個主要面向：
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>AI 生成內容與政治宣傳</li>
                <li>AI 透明度與信任度</li>
                <li>AI 產業影響與市場機制</li>
                <li>AI 與刻板印象</li>
                <li>AI 開發者責任</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI 政治宣傳 */}
        <section id="ai-political" className="py-16 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">AI 生成內容與政治宣傳</h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="mb-8">
                <VoteChart
                  beforeData={{
                    veryDisagree: 19,
                    disagree: 27,
                    neutral: 16,
                    agree: 22,
                    veryAgree: 16,
                  }}
                  afterData={{
                    veryDisagree: 14,
                    disagree: 26,
                    neutral: 23,
                    agree: 11,
                    veryAgree: 6,
                  }}
                  title="AI 生成內容是否應該被禁止用於政治宣傳？"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">支持禁止的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>AI 可能加劇假訊息與選舉操控</li>
                    <li>AI 可能削弱公民的自主判斷</li>
                    <li>AI 可能成為政治操控工具</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">反對禁止的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>AI 是工具，關鍵在於使用方式</li>
                    <li>禁止 AI 內容，無法解決政治宣傳的問題</li>
                    <li>「政治宣傳」界定模糊，執行困難</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI 透明度 */}
        <section id="ai-transparency" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">AI 透明度與信任度</h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="mb-8">
                <VoteChart
                  beforeData={{
                    veryDisagree: 11,
                    disagree: 32,
                    neutral: 22,
                    agree: 16,
                    veryAgree: 19,
                  }}
                  afterData={{
                    veryDisagree: 14,
                    disagree: 26,
                    neutral: 43,
                    agree: 11,
                    veryAgree: 6,
                  }}
                  title="AI 公司是否應該公開其演算法與資料？"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">支持公開的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>透明度提升信任，促進 AI 應用</li>
                    <li>確保 AI 訓練數據的合規性</li>
                    <li>開放演算法有助於更安全的 AI 使用</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">反對公開的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>隱私與數據安全疑慮</li>
                    <li>影響市場競爭，削弱企業優勢</li>
                    <li>全面公開可能帶來風險</li>
                    <li>可用其他方式提升透明度</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI 產業影響 */}
        <section id="ai-industry" className="py-16 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">AI 產業影響與市場機制</h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="mb-8">
                <VoteChart
                  beforeData={{
                    veryDisagree: 15,
                    disagree: 28,
                    neutral: 25,
                    agree: 20,
                    veryAgree: 12,
                  }}
                  afterData={{
                    veryDisagree: 12,
                    disagree: 25,
                    neutral: 35,
                    agree: 18,
                    veryAgree: 10,
                  }}
                  title="AI 是否會對就業市場造成重大衝擊？"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">支持積極監理的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>AI 可能導致大規模失業</li>
                    <li>需要政府介入保護勞工權益</li>
                    <li>應該建立 AI 稅收機制</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">支持市場機制的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>AI 會創造新的就業機會</li>
                    <li>市場會自然調節</li>
                    <li>過度監理可能阻礙創新</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI 刻板印象 */}
        <section id="ai-stereotypes" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">AI 與刻板印象</h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="mb-8">
                <VoteChart
                  beforeData={{
                    veryDisagree: 8,
                    disagree: 25,
                    neutral: 35,
                    agree: 20,
                    veryAgree: 12,
                  }}
                  afterData={{
                    veryDisagree: 10,
                    disagree: 28,
                    neutral: 40,
                    agree: 15,
                    veryAgree: 7,
                  }}
                  title="AI 是否會加劇社會刻板印象？"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">支持監管的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>AI 訓練數據可能包含偏見</li>
                    <li>需要確保 AI 系統的公平性</li>
                    <li>應該建立 AI 倫理準則</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">支持技術解決的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>AI 可以幫助消除偏見</li>
                    <li>技術進步會自然解決問題</li>
                    <li>過度監管可能影響創新</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI 開發者責任 */}
        <section id="ai-responsibility" className="py-16 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">AI 開發者責任</h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="mb-8">
                <VoteChart
                  beforeData={{
                    veryDisagree: 5,
                    disagree: 15,
                    neutral: 30,
                    agree: 35,
                    veryAgree: 15,
                  }}
                  afterData={{
                    veryDisagree: 8,
                    disagree: 18,
                    neutral: 35,
                    agree: 30,
                    veryAgree: 9,
                  }}
                  title="AI 開發者是否應該對 AI 系統的後果負責？"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">支持嚴格責任的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>開發者應該預見並預防風險</li>
                    <li>需要建立明確的責任歸屬</li>
                    <li>應該要求開發者進行影響評估</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">支持彈性責任的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li>AI 系統的影響難以預測</li>
                    <li>過度責任可能阻礙創新</li>
                    <li>應該建立分級責任機制</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
