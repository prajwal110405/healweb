"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  
  const [mounted, setMounted] = useState(false);
  
  // High-performance Framer Motion values bypassing React state for 60fps smooth animation
  const progressValue = useMotionValue(0);
  const progressWidth = useTransform(progressValue, [0, 100], ["0%", "100%"]);
  const progressText = useTransform(progressValue, (latest) => `${Math.round(latest)}%`);

  useEffect(() => {
    setMounted(true);
    
    // Smooth easeOutQuart easing for natural, elegant motion
    const controls = animate(progressValue, 100, {
      duration: 2.5,
      ease: [0.25, 1, 0.5, 1],
      onComplete: () => {
        // Pause briefly at 100% before smoothly fading out
        setTimeout(() => setIsLoading(false), 400);
      }
    });

    return () => controls.stop();
  }, [progressValue]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }} // easeInOutCubic
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          {/* Outer Loading Bar Container */}
          <div className="flex flex-col items-center w-full max-w-[380px] sm:max-w-[450px] px-6">
            <div className="relative w-full h-[28px] bg-white rounded-full border-[2.5px] border-[#bae6fd] shadow-[0_8px_24px_rgba(14,165,233,0.15)] p-[3px]">
              {/* Inner Progress Fill */}
              <motion.div
                style={{ width: progressWidth }}
                className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] relative"
              >
                {/* Attached Logo Indicator */}
                <motion.div 
                  className="absolute right-0 top-1/2 flex items-center justify-center z-10 w-12 h-12 bg-white rounded-full shadow-[0_6px_16px_rgba(14,165,233,0.4)] p-1 border-2 border-[#bae6fd]"
                  style={{ y: "-50%", x: "50%" }}
                  animate={{ y: ["-50%", "-54%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="tooth-premium-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="70%" stopColor="#f0f9ff" />
                        <stop offset="100%" stopColor="#e0f2fe" />
                      </linearGradient>
                    </defs>
                    
                    {/* Main Tooth Body */}
                    <path
                      fill="url(#tooth-premium-grad)"
                      stroke="#1e3a8a" /* Deep Medical Blue */
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.5c-1-1.5-2.5-2.5-4.5-2.5-2.5 0-4.5 2-4.5 4.5 0 3 2.5 4.5 3 7 .5 2.5 1.5 4.5 3.5 4.5 1.5 0 2-1 2.5-3 .5-2 1-3 1.5-3 .5 0 1 1 1.5 3 .5 2 1 3 2.5 3 2 0 3-2 3.5-4.5.5-2.5 3-4 3-7 0-2.5-2-4.5-4.5-4.5-2 0-3.5 1-4.5 2.5z"
                    />
                    
                    {/* Soft Cyan Highlights */}
                    <path
                      fill="none"
                      stroke="#22d3ee" /* Soft Cyan */
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      d="M5 7.5c1-1 2-1.5 3.5-1.5"
                    />
                    <path
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      d="M15 6.5c1.5 0 2.5.5 3.5 1.5"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Percentage Text */}
            <motion.div className="mt-3 text-[#0EA5E9] font-medium tracking-wide">
              <motion.span>{progressText}</motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
