import Link from 'next/link';
import VoteChart from '@/components/VoteChart';

export default function AITransparencyPage() {
  const voteData = {
    before: {
      veryDisagree: 11,
      disagree: 32,
      neutral: 22,
      agree: 16,
      veryAgree: 19,
    },
    after: {
      veryDisagree: 14,
      disagree: 26,
      neutral: 43,
      agree: 11,
      veryAgree: 6,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← 返回首頁
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">AI 透明度與信任度</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">投票結果</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-6">
                  <VoteChart
                    beforeData={voteData.before}
                    afterData={voteData.after}
                    title="AI 公司是否應該公開其演算法與資料？"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">討論前</h3>
                    <div className="space-y-2">
                      <p>不同意（43%）：包含 非常不同意 11% + 不同意 32%</p>
                      <p>中立（22%）</p>
                      <p>同意（35%）：包含 同意 16% + 非常同意 19%</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">討論後</h3>
                    <div className="space-y-2">
                      <p>不同意（40%）：包含 非常不同意 14% + 不同意 26%</p>
                      <p>中立（43%）</p>
                      <p>同意（17%）：包含 同意 11% + 非常同意 6%</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">主要觀點</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">支持公開的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-blue-800">
                    <li>透明度提升信任，促進 AI 應用</li>
                    <li>確保 AI 訓練數據的合規性</li>
                    <li>開放演算法有助於更安全的 AI 使用</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-medium text-red-900 mb-2">反對公開的觀點</h3>
                  <ul className="list-disc pl-5 space-y-2 text-red-800">
                    <li>隱私與數據安全疑慮</li>
                    <li>影響市場競爭，削弱企業優勢</li>
                    <li>全面公開可能帶來風險</li>
                    <li>可用其他方式提升透明度</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">意見轉變分析</h2>
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium text-gray-900">從「同意」或「不同意」轉為「中立」</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>質疑「透明度是否等於信任度」</li>
                  <li>發現「全面公開是否可行」的疑慮</li>
                  <li>認為應該依據 AI 產品的社會影響力來決定公開程度</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-900 mt-4">從「不同意」轉為「非常不同意」</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>認為閉源 AI 仍然能夠贏得用戶信任</li>
                  <li>擔心影響 AI 產業鏈下游公司的競爭優勢</li>
                  <li>強調市場運行模式已經證明不需要完全公開</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">結論</h2>
              <div className="prose max-w-none">
                <p>討論後，多數參與者轉向中立立場，主要考量：</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>透明度與信任度的關係需要更深入探討</li>
                  <li>應該尋求更細緻的公開標準</li>
                  <li>可以透過獨立監管、分級公開等方式來平衡透明度與企業競爭力</li>
                  <li>根據 AI 產品的影響力決定透明度要求</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 