"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { useState } from "react";

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-primary text-white z-[60] relative"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
            <div className="flex items-center justify-center text-center w-full sm:w-auto">
              <span className="animate-pulse mr-2">🚨</span>
              <span className="font-medium mr-2">Dental Emergency?</span> 
              <span className="hidden sm:inline">Call Us Immediately:</span>
            </div>
            
            <div className="flex items-center justify-center w-full sm:w-auto gap-4">
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close emergency banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
