interface ChevronDownIconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export default function Pin({
  className = "w-5 h-5",
  width,
  height,
  strokeWidth = 2,
}: ChevronDownIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}
