'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Check, CheckSquare, Square, ListChecks, Plus, HelpCircle } from 'lucide-react';

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
  onAddToSelection?: (serviceName: string, params: string[]) => void;
};

const getBranchName = (tc: string) => {
  const mapping: Record<string, string> = {
    'TC-11935': 'Kolkata Lab - 1',
    'TC-13401': 'Kolkata Lab - 2',
    'TC-15509': 'Siliguri Lab',
    'TC-16480': 'Ranchi Lab',
    'TC-17671': 'Odisha Lab',
    'NABL Accredited': 'Kolkata Lab - 2',
  };
  return mapping[tc] || tc;
};

export default function TestingModal({ material, onClose, onAddToSelection }: Props) {
  const router = useRouter();
  const [selectedParams, setSelectedParams] = useState<Set<string>>(new Set());
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [showValidationWarning, setShowValidationWarning] = useState(false);

  // Reset selections when modal changes material
  useEffect(() => {
    setSelectedParams(new Set());
    setAddedFeedback(false);
    setShowValidationWarning(false);
  }, [material?.name]);

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

  const toggleParam = (param: string) => {
    setSelectedParams(prev => {
      const next = new Set(prev);
      if (next.has(param)) {
        next.delete(param);
      } else {
        next.add(param);
      }
      return next;
    });
  };

  const selectAll = () => {
    if (material?.parameters) {
      setSelectedParams(new Set(material.parameters));
    }
  };

  const clearAll = () => {
    setSelectedParams(new Set());
  };

  // Add to selection basket (stays on page)
  const handleAddToSelection = () => {
    if (!material) return;
    const hasParams = (material.parameters ?? []).length > 0;
    if (hasParams && selectedParams.size === 0) {
      setShowValidationWarning(true);
      return;
    }
    setShowValidationWarning(false);
    if (onAddToSelection) {
      onAddToSelection(material.name, Array.from(selectedParams));
    }
    setAddedFeedback(true);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  // Direct enquire (old behaviour — goes straight to form)
  const handleEnquireDirect = () => {
    if (!material) return;
    const hasParams = (material.parameters ?? []).length > 0;
    if (hasParams && selectedParams.size === 0) {
      setShowValidationWarning(true);
      return;
    }
    setShowValidationWarning(false);
    const params = new URLSearchParams();
    params.set('service', material.name);
    params.set('parameters', Array.from(selectedParams).join('||'));
    onClose();
    setTimeout(() => {
      router.push(`/?${params.toString()}#enquiry`);
      setTimeout(() => {
        document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }, 150);
  };

  const allParams = material?.parameters ?? [];
  const allSelected = allParams.length > 0 && selectedParams.size === allParams.length;

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
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">

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
                            🏅 {getBranchName(material.nablCert)}
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
                <div className="mb-2">
                  {/* Section label + Select All / Clear All */}
                  <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
                    <h3 className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#FF6700] flex items-center gap-1.5 relative group">
                      <span className="w-4 h-[2px] bg-[#FF6700] rounded-full inline-block" />
                      Test Parameters
                      <span className="relative flex items-center">
                        <HelpCircle size={13} className="text-[#1E1B5C]/40 cursor-pointer hover:text-[#FF6700] transition-colors" />
                        {/* Tooltip */}
                        <span className="absolute left-1/2 -translate-x-1/2 top-5 hidden group-hover:block z-50 bg-[#1E1B5C] text-white text-[10px] font-medium normal-case tracking-normal p-3 rounded-lg shadow-xl w-[220px] leading-normal border border-white/10">
                          You can select multiple services and parameters, add them to your selection, and go to the form to enquire about all of them together.
                        </span>
                      </span>
                      {allParams.length > 0 && (
                        <span className="text-[#1E1B5C]/40 font-semibold normal-case tracking-normal ml-1">
                          — tap to select
                        </span>
                      )}
                    </h3>
                    {allParams.length > 0 && (
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={allSelected ? clearAll : selectAll}
                          className="flex items-center gap-1.5 text-[11px] font-bold text-[#1E1B5C]/60 hover:text-[#FF6700] transition-colors px-2.5 py-1 rounded-full border border-[#1E1B5C]/10 hover:border-[#FF6700]/30 hover:bg-[#FF6700]/5"
                        >
                          {allSelected ? (
                            <><CheckSquare size={13} /> Clear All</>
                          ) : (
                            <><Square size={13} /> Select All</>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {allParams.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {allParams.map((param, idx) => {
                        const isSelected = selectedParams.has(param);
                        return (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.18, delay: idx * 0.015 }}
                          >
                            <button
                              type="button"
                              onClick={() => toggleParam(param)}
                              className={`w-full flex items-start gap-3 text-[13px] font-semibold leading-snug text-left px-3 py-2.5 rounded-lg transition-all border-2 ${
                                isSelected
                                  ? 'bg-[#FF6700]/10 border-[#FF6700]/40 text-[#1E1B5C]'
                                  : 'bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200 text-slate-600'
                              }`}
                            >
                              <span
                                className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5 border-2 transition-all ${
                                  isSelected
                                    ? 'bg-[#FF6700] border-[#FF6700] text-white'
                                    : 'bg-white border-slate-300 text-transparent'
                                }`}
                              >
                                <Check size={10} strokeWidth={3.5} />
                              </span>
                              <span className={isSelected ? 'text-[#1E1B5C]' : ''}>{param}</span>
                            </button>
                          </motion.li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-[13px] italic">
                      Parameter list available on request.
                    </p>
                  )}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex-shrink-0 border-t border-slate-100 px-6 py-4 bg-slate-50">
                {/* Validation Warning */}
                {showValidationWarning && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-3 px-3 py-2 bg-red-50 rounded-lg border border-red-200 text-red-600 text-[12px] font-semibold"
                  >
                    ⚠️ Please select at least one test parameter before proceeding.
                  </motion.div>
                )}

                {/* Selection summary */}
                {selectedParams.size > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-3 px-3 py-2 bg-[#FF6700]/10 rounded-lg border border-[#FF6700]/20"
                  >
                    <ListChecks size={15} className="text-[#FF6700] shrink-0" />
                    <span className="text-[12px] font-bold text-[#1E1B5C]">
                      {selectedParams.size} parameter{selectedParams.size > 1 ? 's' : ''} selected
                    </span>
                    <span className="text-[11px] text-slate-400 ml-1 truncate hidden sm:block">
                      — {Array.from(selectedParams).slice(0, 2).join(', ')}{selectedParams.size > 2 ? ` +${selectedParams.size - 2} more` : ''}
                    </span>
                  </motion.div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-[12px] text-slate-500 text-center sm:text-left">
                    {onAddToSelection
                      ? 'Add to your basket and continue selecting more services.'
                      : selectedParams.size > 0
                        ? 'Your selected parameters will be pre-filled in the enquiry form.'
                        : 'Select parameters above or enquire for all tests.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0 justify-end">


                    {/* Primary: Add to selection basket */}
                    {onAddToSelection && (
                      <button
                        type="button"
                        onClick={handleAddToSelection}
                        disabled={addedFeedback}
                        className={`px-6 py-2.5 font-extrabold uppercase tracking-[0.8px] text-[12px] rounded-full transition-all flex items-center justify-center gap-1.5 group cursor-pointer ${
                          addedFeedback
                            ? 'bg-emerald-500 text-white shadow-[0_6px_20px_rgba(16,185,129,0.3)]'
                            : 'bg-[#FF6700] text-white hover:bg-[#e65c00] hover:shadow-[0_6px_20px_rgba(255,103,0,0.35)] hover:-translate-y-[1px]'
                        }`}
                      >
                        {addedFeedback ? (
                          <><Check size={14} /> Added!</>
                        ) : (
                          <><Plus size={14} /> Add to Selection</>
                        )}
                      </button>
                    )}

                    {/* Secondary: Enquire directly (single-service quick flow) */}
                    <button
                      type="button"
                      onClick={handleEnquireDirect}
                      className="px-4 py-2.5 bg-white border-2 border-[#1E1B5C]/20 text-[#1E1B5C]/70 font-bold uppercase tracking-[0.8px] text-[11px] rounded-full hover:border-[#1E1B5C]/40 hover:text-[#1E1B5C] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Enquire directly →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

