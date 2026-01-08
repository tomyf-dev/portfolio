'use client';

import { useEffect, useRef } from 'react';

interface GamingBorderProps {
  position: 'top' | 'bottom';
}

export function GamingBorder({ position }: GamingBorderProps) {
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const border = borderRef.current;
    if (!border) return;

    let animationId: number;
    let progress = 0;

    const animate = () => {
      progress = (progress - 0.35 + 200) % 200;
      border.style.backgroundPosition = `${progress}% 50%`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={borderRef}
      className={`absolute left-0 right-0 h-[3px] ${position === 'top' ? 'top-0' : 'bottom-0'}`}
      style={{
        background: 'linear-gradient(90deg, var(--primary), var(--glow-dawn), var(--secondary), var(--glow-dawn), var(--primary))',
        backgroundSize: '200% 100%',
      }}
    />
  );
}
