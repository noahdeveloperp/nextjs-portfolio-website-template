import { useEffect, useRef } from 'react';

/**
 * Scroll Progress Indicator
 * 3D animated progress bar
 */
export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      progressRef.current.style.width = `${scrollPercent}%`;
      progressRef.current.style.boxShadow = `0 0 20px rgba(59, 130, 246, ${Math.min(scrollPercent / 100, 1)})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 z-50 transition-all duration-300"
      style={{
        width: '0%',
        boxShadow: '0 0 20px rgba(59, 130, 246, 0)',
      }}
    />
  );
}