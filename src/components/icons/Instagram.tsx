interface ChevronDownIconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

export default function Instagram({
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
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.789C4.915 14.313 4.736 13.26 4.736 12c0-1.26.179-2.313.697-3.199.568-1.059 1.719-1.789 3.016-1.789s2.448.73 3.016 1.789c.518.886.697 1.939.697 3.199 0 1.26-.179 2.313-.697 3.199-.568 1.059-1.719 1.789-3.016 1.789zm7.718-3.512c0 2.485-2.019 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5z"
      />
    </svg>
  );
}
