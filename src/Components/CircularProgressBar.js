import React from 'react';
import '../Styles/CircularProgressBar.css'

const CircularProgressBar = ({ progress, size }) => {
  const strokeWidthBackground = 4;
  const strokeWidthProgress = 12;
  const radius = (size - strokeWidthProgress) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="circular-progress" width={size} height={size}>
      <circle
        className="background-circle"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidthBackground}
      />
      <circle
        className="progress-circle"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidthProgress}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <text
        className="progress-text"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;

