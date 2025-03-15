"use client";

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface VoteData {
  before: {
    [key: string]: number;
  };
  after: {
    [key: string]: number;
  };
}

interface VoteChartProps {
  data: VoteData;
}

export default function VoteChart({ data }: VoteChartProps) {
  const [showAfter, setShowAfter] = useState(false);

  // 檢查數據是否存在
  if (!data?.before || !data?.after) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        暫無數據
      </div>
    );
  }

  const chartData = {
    labels: ["非常不同意", "不同意", "中立", "同意", "非常同意"],
    datasets: [
      {
        label: showAfter ? "討論後" : "討論前",
        data: Object.values(showAfter ? data.after : data.before),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          color: 'rgba(255, 255, 255, 0.6)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <div className="relative h-[300px]">
      <div className="absolute top-0 right-0 z-10">
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors text-sm"
        >
          {showAfter ? "查看討論前" : "查看討論後"}
        </button>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
} 