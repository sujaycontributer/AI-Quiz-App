"use client"
import { useState } from "react";

export default function CircularProgress() {
  const [progress, setProgress] = useState(88); // Change this dynamically

  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center md: shadow-2xl">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb" // light gray background circle
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle className=""
          stroke="rgb(22, 163, 74)" // green 400 progress color
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>
      <div className="absolute mt-[35px] flex flex-col text-sm font-semibold"> <div className="text-gray-400">Accuracy</div> <div className="text-center">{progress}%</div></div>
    </div>
  );
}
