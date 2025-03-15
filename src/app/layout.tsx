import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "台灣的人工智慧應該如何規範？",
  description: "vTaiwan AI 監管討論追蹤報告",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
