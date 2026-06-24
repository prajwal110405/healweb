"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

export function useSmoothScroll() {
  const lenis = useLenis();

  const scrollToSection = useCallback((targetId: string) => {
    // Ensure targetId has the # prefix
    const selector = targetId.startsWith("#") ? targetId : `#${targetId}`;
    const element = document.querySelector(selector);
    
    if (!element) return;

    if (lenis) {
      lenis.scrollTo(selector, {
        duration: 1.2, // 1200ms
        easing: (t: number) => {
          // easeOutQuart easing function
          return 1 - Math.pow(1 - t, 4);
        },
      });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
    
    // Clean up the URL format
    const path = window.location.pathname;
    window.history.pushState(null, "", `${path}${selector}`);
  }, [lenis]);

  return { scrollToSection };
}
