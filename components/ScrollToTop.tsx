"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] p-3 rounded-full bg-[#FF6700] text-white shadow-[0_4px_20px_rgba(255,103,0,0.4)] transition-all duration-300 hover:bg-[#e65c00] active:scale-95 group cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={22}
            strokeWidth={3}
            className="group-hover:-translate-y-1 transition-transform duration-300"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
