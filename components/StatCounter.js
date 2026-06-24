'use client';
import { useEffect, useState, useRef } from 'react';

export default function StatCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const numMatch = value.match(/([0-9.,]+)/);
    const suffix = value.replace(numMatch ? numMatch[0] : '', '');
    const target = numMatch ? parseFloat(numMatch[0].replace(/,/g, '')) : 0;
    const isFloat = value.includes('.');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const startTime = performance.now();

          const animate = (timestamp) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const ease = progress * (2 - progress);
            const currentVal = ease * target;
            
            setCount(isFloat ? currentVal.toFixed(1) : Math.floor(currentVal));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [value, duration]);

  const formatNumber = (num) => {
    if (value.includes(',')) {
      return num.toLocaleString();
    }
    return num;
  };

  const getSuffix = () => {
    const numMatch = value.match(/([0-9.,]+)/);
    return value.replace(numMatch ? numMatch[0] : '', '');
  };

  return (
    <span ref={elementRef}>
      {formatNumber(count)}
      {getSuffix()}
    </span>
  );
}
