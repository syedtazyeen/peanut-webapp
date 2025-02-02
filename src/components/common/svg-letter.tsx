import React from "react";

type SvgLetterProps = {
  letter: string;
  size?: number;
  color?: string;
};

const SvgLetter: React.FC<SvgLetterProps> = ({
  letter,
  size = 24,
  color = "black",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="gray" stroke="black" />
      <text
        x="50%"
        y="50%"
        fontSize="52"
        fontWeight={500}
        fill={color}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {letter}
      </text>
    </svg>
  );
};

export default SvgLetter;
