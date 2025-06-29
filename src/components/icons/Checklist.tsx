interface ChevronDownIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function Checklist({
  className = "w-5 h-5 text-gray-50",
  size = 24,
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
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
