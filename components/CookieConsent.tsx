'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing it slightly for better UX (so it doesn't jarringly appear instantly)
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-[420px] bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 p-6 z-[99999] font-montserrat"
        >
          <button 
            onClick={declineCookies}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 hover:bg-slate-100 rounded-full p-1"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6700]/10 to-[#FF6700]/5 flex items-center justify-center shrink-0 border border-[#FF6700]/10">
              <Cookie className="text-[#FF6700]" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[#1E1B5C] mb-1.5 text-[15px]">We value your privacy</h3>
              <p className="text-[12px] md:text-[13px] text-slate-500 leading-relaxed mb-5">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <Link href="/privacy-policy" className="text-[#FF6700] hover:underline font-semibold">Read more</Link>
              </p>
              
              <div className="flex gap-2">
                <button 
                  onClick={acceptCookies}
                  className="flex-1 bg-[#1E1B5C] hover:bg-[#FF6700] text-white text-[11px] font-bold py-3 px-2 rounded-xl transition-all duration-300 uppercase tracking-widest shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Accept All
                </button>
                <button 
                  onClick={declineCookies}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[11px] font-bold py-3 px-2 rounded-xl transition-all duration-300 uppercase tracking-widest"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
