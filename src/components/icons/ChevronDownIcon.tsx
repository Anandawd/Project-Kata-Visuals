interface ChevronDownIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function ChevronDownIcon({
  className = "w-6 h-6",
  size,
  strokeWidth = 2,
}: ChevronDownIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}
