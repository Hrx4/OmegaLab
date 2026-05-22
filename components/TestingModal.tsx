'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export type MaterialItem = {
  icon: string;
  name: string;
  category: string[];
  nablCert?: string;
  testType?: string;
  parameters?: string[];
};

type Props = {
  material: MaterialItem | null;
  onClose: () => void;
};

export default function TestingModal({ material, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (material) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [material]);

  return (
    <AnimatePresence>
      {material && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000]"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[1001] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[88vh] flex flex-col overflow-hidden">
              
              {/* Header */}
              <div className="bg-gradient-to-br from-[#1E1B5C] to-[#2d2890] px-6 pt-6 pb-5 flex-shrink-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-[32px] shrink-0 border border-white/10">
                      {material.icon}
                    </div>
                    <div>
                      <h2 className="text-white font-black text-[18px] md:text-[22px] font-oswald leading-tight">
                        {material.name}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        {material.nablCert && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-[#FF6700]/20 text-[#FF6700] border border-[#FF6700]/30">
                            🏅 NABL {material.nablCert}
                          </span>
                        )}
                        {material.testType && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15">
                            🔬 {material.testType}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition-colors shrink-0 text-[18px] leading-none"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Parameters Body */}
              <div className="flex-1 overflow-y-auto px-6 py-5">
                <div className="mb-4">
                  <h3 className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#FF6700] mb-3 flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-[#FF6700] rounded-full inline-block" />
                    Test Parameters
                  </h3>
                  {material.parameters && material.parameters.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {material.parameters.map((param, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.15, delay: idx * 0.02 }}
                          className="inline-block bg-[#EFF6FF] border border-[#1E1B5C]/10 text-[#1E1B5C] text-[12px] font-semibold px-3 py-1.5 rounded-lg leading-snug"
                        >
                          {param}
                        </motion.span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-[13px] italic">
                      Parameter list available on request.
                    </p>
                  )}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex-shrink-0 border-t border-slate-100 px-6 py-4 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[12px] text-slate-500 text-center sm:text-left">
                  Need testing for this material? Get in touch with our experts.
                </p>
                <Link
                  href="/#contact"
                  onClick={onClose}
                  className="shrink-0 px-6 py-2.5 bg-[#FF6700] text-white font-extrabold uppercase tracking-[0.8px] text-[12px] rounded-full hover:bg-[#e65c00] hover:shadow-[0_6px_20px_rgba(255,103,0,0.35)] hover:-translate-y-[1px] transition-all flex items-center gap-1.5 group"
                >
                  Enquire for this Test
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
