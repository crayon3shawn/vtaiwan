"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface VoteData {
  veryDisagree: number;
  disagree: number;
  neutral: number;
  agree: number;
  veryAgree: number;
}

interface VoteChartProps {
  beforeData: VoteData;
  afterData: VoteData;
  title: string;
}

export default function VoteChart({ beforeData, afterData, title }: VoteChartProps) {
  const [isClient, setIsClient] = useState(false);
  const [showBefore, setShowBefore] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 12,
          padding: 10,
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 14,
        },
        padding: {
          bottom: 10,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: '百分比 (%)',
          font: {
            size: 12,
          },
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart' as const,
    },
  };

  const data = {
    labels: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    datasets: [
      {
        label: showBefore ? '討論前' : '討論後',
        data: showBefore
          ? [
              beforeData.veryDisagree,
              beforeData.disagree,
              beforeData.neutral,
              beforeData.agree,
              beforeData.veryAgree,
            ]
          : [
              afterData.veryDisagree,
              afterData.disagree,
              afterData.neutral,
              afterData.agree,
              afterData.veryAgree,
            ],
        backgroundColor: showBefore ? 'rgba(53, 162, 235, 0.5)' : 'rgba(255, 99, 132, 0.5)',
        borderColor: showBefore ? 'rgb(53, 162, 235)' : 'rgb(255, 99, 132)',
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  if (!isClient) {
    return <div className="h-[300px] bg-gray-700 animate-pulse rounded-lg"></div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setShowBefore(true)}
          className={`px-4 py-2 rounded-lg transition-colors text-sm ${
            showBefore
              ? 'bg-blue-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          討論前
        </button>
        <button
          onClick={() => setShowBefore(false)}
          className={`px-4 py-2 rounded-lg transition-colors text-sm ${
            !showBefore
              ? 'bg-red-500 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          討論後
        </button>
      </div>
      <div className="relative h-[300px]">
        <Bar options={options} data={data} />
        {!showBefore && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-red-500/10 border-2 border-red-500/20 rounded-lg p-3">
              <div className="text-red-400 font-medium text-sm">
                變化：{calculateChange(beforeData, afterData)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function calculateChange(before: VoteData, after: VoteData): string {
  const beforeTotal = Object.values(before).reduce((a: number, b: number) => a + b, 0);
  const afterTotal = Object.values(after).reduce((a: number, b: number) => a + b, 0);
  
  const changes = {
    veryDisagree: after.veryDisagree - before.veryDisagree,
    disagree: after.disagree - before.disagree,
    neutral: after.neutral - before.neutral,
    agree: after.agree - before.agree,
    veryAgree: after.veryAgree - before.veryAgree,
  };

  const significantChanges = Object.entries(changes)
    .filter(([_, value]) => Math.abs(value) > 0)
    .map(([key, value]) => {
      const percentage = ((value / beforeTotal) * 100).toFixed(1);
      const direction = value > 0 ? '增加' : '減少';
      const label = {
        veryDisagree: '非常不同意',
        disagree: '不同意',
        neutral: '中立',
        agree: '同意',
        veryAgree: '非常同意',
      }[key];
      return `${label}${direction}${Math.abs(percentage)}%`;
    });

  return significantChanges.join('、');
} 