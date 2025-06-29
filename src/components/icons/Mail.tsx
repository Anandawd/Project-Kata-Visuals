interface ChevronDownIconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export default function Mail({
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
        d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
