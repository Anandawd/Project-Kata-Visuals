interface ChevronDownIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function Star({
  className = "w-6 h-6 text-yellow-400 fill-current",
  size = 24,
  strokeWidth = 0,
}: ChevronDownIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}
