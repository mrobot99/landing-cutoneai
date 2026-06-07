import React from "react";

interface CutOneLogoProps {
  className?: string;
  size?: number;
}

export default function CutOneLogo({ className = "", size = 40 }: CutOneLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Hexagon border, vertex-pointed at top and bottom */}
      <polygon
        points="50,6 90,29 90,71 50,94 10,71 10,29"
        stroke="white"
        strokeWidth="4"
        strokeLinejoin="miter"
        fill="black"
      />

      {/* Styled "C" Letter: Circular arc with flat terminals */}
      {/* Center at 50,50. Radius 23. From 40 deg to 320 deg */}
      <path
        d="M 67.6 64.8 A 23 23 0 1 1 67.6 35.2"
        stroke="white"
        strokeWidth="11"
        strokeLinecap="butt"
      />

      {/* Bold Central Dot */}
      <circle cx="50" cy="50" r="4.5" fill="white" />

      {/* Stylized diagonal tick, parallel to top-left hexagon wall (slope ~0.575) */}
      <line
        x1="36"
        y1="54"
        x2="13"
        y2="67.2"
        stroke="white"
        strokeWidth="6.5"
        strokeLinecap="butt"
      />
    </svg>
  );
}
