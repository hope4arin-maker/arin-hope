import React from 'react';

export function Flower({ fill = "#FA3425", className = "w-32 h-32" }: { fill?: string, className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="40" r="40" fill={fill} />
      <circle cx="157" cy="81" r="40" fill={fill} />
      <circle cx="135" cy="148" r="40" fill={fill} />
      <circle cx="65" cy="148" r="40" fill={fill} />
      <circle cx="43" cy="81" r="40" fill={fill} />
      <circle cx="100" cy="100" r="50" fill={fill} />
      <circle cx="100" cy="100" r="16" fill="var(--color-bg)" />
    </svg>
  );
}

export function Star({ fill = "#1C23D4", className = "w-32 h-32" }: { fill?: string, className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M100 0 L125 75 L200 100 L125 125 L100 200 L75 125 L0 100 L75 75 Z" fill={fill} />
    </svg>
  );
}
