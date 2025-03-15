"use client";

import { useState } from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: 'start' | 'discussion' | 'vote' | 'end';
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const getEventColor = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'start':
        return 'bg-green-500';
      case 'discussion':
        return 'bg-blue-500';
      case 'vote':
        return 'bg-purple-500';
      case 'end':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="w-1/2 px-4">
              <div
                className={`p-4 rounded-lg shadow-md cursor-pointer transition-all ${
                  activeEvent === index
                    ? 'bg-gray-800 scale-105'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => setActiveEvent(activeEvent === index ? null : index)}
              >
                <div className="text-sm text-gray-400 mb-1">{event.date}</div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm">{event.description}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center z-10">
              <div
                className={`w-4 h-4 rounded-full ${getEventColor(event.type)}`}
              ></div>
            </div>
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
} 