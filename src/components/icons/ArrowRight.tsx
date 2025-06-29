interface ChevronDownIconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export default function ArrowRight({
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
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
