# vTaiwan 討論平台

這是一個基於 Next.js 開發的 vTaiwan 討論平台，用於展示和互動討論 AI 相關議題。

## 專案結構

```
vtaiwan/
├── docs/                    # 文件目錄
│   └── 12_20 紀錄文章.md    # 討論記錄文件
├── src/                     # 源代碼目錄
│   ├── app/                # Next.js 應用目錄
│   │   ├── page.tsx        # 首頁
│   │   └── topics/         # 議題頁面
│   └── components/         # React 組件
│       └── VoteChart.tsx   # 投票圖表組件
├── public/                 # 靜態資源
└── package.json           # 項目配置
```

## 開發環境設置

1. 安裝依賴：
```bash
npm install
```

2. 啟動開發服務器：
```bash
npm run dev
```

3. 訪問網站：
打開瀏覽器訪問 http://localhost:3000

## 技術棧

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Chart.js

## 功能特點

- 響應式設計
- 互動式數據可視化
- 議題討論導航
- 投票結果展示
- 意見變化追蹤

## 開發指南

1. 新增議題頁面：
   - 在 `src/app/topics/` 下創建新的目錄
   - 添加 `page.tsx` 文件
   - 更新首頁導航

2. 修改投票圖表：
   - 編輯 `src/components/VoteChart.tsx`
   - 調整樣式和交互

3. 更新內容：
   - 修改對應的頁面組件
   - 更新數據和文案

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
