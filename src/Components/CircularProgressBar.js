import React from 'react';

const CircularProgressBar = ({ myTime }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const renderProgress = () => {
    let offset = 0;

    return myTime.map(({ Color, Percentage }, index) => {
      const progressColor = Color;
      const dashOffset = ((100 - Percentage) / 100) * circumference - offset;

      offset += (Percentage / 100) * circumference;

      return (
        <circle
          key={index}
          className="progress-ring__circle"
          cx={radius}
          cy={radius}
          r={radius}
          fill="transparent"
          stroke={progressColor}
          strokeWidth={10}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      );
    });
  }

  return (
    <svg className="progress-ring" viewBox={`0 0 ${2 * radius} ${2 * radius}`}>
      {renderProgress()}
    </svg>
  );
};

export default CircularProgressBar;
