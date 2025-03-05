import Link from 'next/link';
import VoteChart from '@/components/VoteChart';

export default function AIPoliticalPage() {
  const voteData = {
    before: {
      veryDisagree: 19,
      disagree: 27,
      neutral: 16,
      agree: 22,
      veryAgree: 16,
    },
    after: {
      veryDisagree: 14,
      disagree: 26,
      neutral: 23,
      agree: 11,
      veryAgree: 6,
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-gray-900 hover:text-blue-600 font-medium">
            ← 返回首頁
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">AI 生成內容與政治宣傳</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">投票結果</h2>
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                <div className="mb-6">
                  <VoteChart
                    beforeData={voteData.before}
                    afterData={voteData.after}
                    title="AI 生成內容是否應該被禁止用於政治宣傳？"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">討論前</h3>
                    <div className="space-y-2 text-gray-900">
                      <p>不同意（46%）：包含 非常不同意 19% + 不同意 27%</p>
                      <p>中立（16%）</p>
                      <p>同意（38%）：包含 同意 22% + 非常同意 16%</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">討論後</h3>
                    <div className="space-y-2 text-gray-900">
                      <p>不同意（40%）：包含 非常不同意 14% + 不同意 26%</p>
                      <p>中立（23%）</p>
                      <p>同意（17%）：包含 同意 11% + 非常同意 6%</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">主要觀點</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-300">
                  <h3 className="font-bold text-blue-900 mb-3">支持禁止的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-blue-900">
                    <li>AI 可能加劇假訊息與選舉操控</li>
                    <li>AI 可能削弱公民的自主判斷</li>
                    <li>AI 可能成為政治操控工具</li>
                  </ul>
                </div>
                <div className="bg-red-100 p-6 rounded-lg border-2 border-red-300">
                  <h3 className="font-bold text-red-900 mb-3">反對禁止的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-red-900">
                    <li>AI 是工具，關鍵在於使用方式</li>
                    <li>禁止 AI 內容，無法解決政治宣傳的問題</li>
                    <li>「政治宣傳」界定模糊，執行困難</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">意見轉變分析</h2>
              <div className="prose max-w-none">
                <h3 className="text-lg font-bold text-gray-900 mb-2">從「同意」轉為「中立」或「不同意」</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-900">
                  <li>質疑禁令的實際效果</li>
                  <li>發現全面禁止的可行性問題</li>
                  <li>理解 AI 的應用範圍更廣</li>
                  <li>考量國際競爭與國安因素</li>
                </ul>

                <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">從「不同意」轉為「同意」</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-900">
                  <li>意識到 AI 假訊息與選舉操控風險</li>
                  <li>對公眾媒體識讀能力信心下降</li>
                  <li>接受細化管制的可能性</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">結論</h2>
              <div className="prose max-w-none">
                <p className="text-gray-900">多數人認為 AI 在政治宣傳的影響需審慎考量，但意見不一：</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-900">
                  <li>反對者強調媒體識讀與使用方式才是關鍵，而非禁止技術本身</li>
                  <li>支持者則認為 AI 可能加劇選舉操控與假訊息問題，應該嚴格規範</li>
                  <li>中立者建議折衷方案，如標示 AI 生成內容，而非全面禁止</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 