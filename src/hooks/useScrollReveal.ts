import { useEffect } from 'react';

/**
 * useScrollReveal
 * Lightweight, high-performance IntersectionObserver hook for subtle scroll-triggered reveals.
 * Fully honors prefers-reduced-motion and gracefully degrades.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const elements = document.querySelectorAll<HTMLElement>('.reveal-init, [data-reveal]');
    
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
