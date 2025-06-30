"use client";
import { useEffect, useRef, useState } from "react";

// Custom hook untuk counter animation
const useCountAnimation = (
  targetValue: number,
  duration: number = 2000,
  isVisible: boolean = false
) => {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      startTime.current = null;
      return;
    }

    const animate = (timestamp: number) => {
      if (!startTime.current) {
        startTime.current = timestamp;
      }

      const progress = (timestamp - startTime.current) / duration;

      if (progress < 1) {
        // Easing function untuk smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(targetValue * easeOutQuart));
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, duration, isVisible]);

  return count;
};

// Custom hook untuk intersection observer
const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.3
) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return [ref, isVisible] as const;
};

// Component untuk individual stat item
interface StatItemProps {
  targetValue: number;
  suffix?: string;
  label: string;
  isVisible: boolean;
}

const StatItem = ({
  targetValue,
  suffix = "",
  label,
  isVisible,
}: StatItemProps) => {
  const count = useCountAnimation(targetValue, 2000, isVisible);

  return (
    <div>
      <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
    </div>
  );
};

export default function Statistic() {
  const [containerRef, isVisible] = useIntersectionObserver(0.3);

  const statsData = [
    { value: 150, suffix: "+", label: "Trusted Clients" },
    { value: 1500, suffix: "+", label: "Photos Taken" },
    { value: 500, suffix: "+", label: "Awesome Videos" },
    { value: 98, suffix: "%", label: "Happy Clients" },
  ];

  return (
    <section>
      {/* Stats Section */}
      <div
        ref={containerRef}
        className="p-8 lg:p-12 backdrop-blur-lg bg-gray-950 border border-white/20"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
