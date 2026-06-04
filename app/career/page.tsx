'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, CheckCircle, Send, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // DO NOT prevent default - let the browser submit to the hidden iframe
    const form = e.currentTarget;
    
    // Dynamically set subject
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const name = nameInput?.value || 'Applicant';
    const date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    
    const subjectInput = form.elements.namedItem('_subject') as HTMLInputElement;
    if (subjectInput) {
      subjectInput.value = `Job Application from ${name} on ${date}`;
    }

    setIsSubmitting(true);
    
    // Because cross-origin iframe load events can be flaky or blocked by browsers,
    // we simulate the success callback after a short delay (FormSubmit processes very quickly).
    setTimeout(() => {
      setSuccess(true);
      setIsSubmitting(false);
      formRef.current?.reset();
      setSelectedFileName(null);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFileName(null);
    }
  };

  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero Header */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-24 px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#EFF6FF] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6700]/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-100px] w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none"></div>

        <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-black text-[32px] md:text-[48px] lg:text-[56px] font-oswald tracking-tight uppercase leading-[1.1] mb-6"
          >
            Build Your Career With <span className="text-[#FF6700]">Omegalab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-medium tracking-widest uppercase text-sm md:text-base max-w-2xl"
          >
            Join our team of experts and contribute to world-class testing and calibration services. We are always looking for passionate professionals.
          </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-12 mt-[-40px] relative z-30">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#FF6700] p-6 justify-center flex lg:p-12 relative">

          <div className="w-full max-w-4xl flex flex-col">
            <div className="mb-10 text-center">
              <h2 className="text-[24px] md:text-[32px] font-black text-[#1E1B5C] font-oswald tracking-tight uppercase mb-2">Job Application Form</h2>
              <div className="w-16 h-1 bg-[#FF6700] mx-auto mb-4"></div>
              <p className="text-slate-600 text-sm">Please fill out the form below with your details and attach your latest resume.</p>
            </div>

            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
            <form 
              ref={formRef}
              action="https://formsubmit.co/omegalabinfo98@gmail.com"
              method="POST"
              encType="multipart/form-data" 
              target="hidden_iframe"
              onSubmit={handleSubmit} 
              className="flex flex-col gap-6 relative"
            >
              {/* FormSubmit Configuration Inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Job Application" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_cc" value="info@omegalabtesting.com" />
              
              {success && (
                <>
                  <style>{`
                    @keyframes toastProgress {
                      0% { width: 100%; }
                      100% { width: 0%; }
                    }
                    @keyframes slideInRight {
                      0% { transform: translateX(100%); opacity: 0; }
                      100% { transform: translateX(0); opacity: 1; }
                    }
                    .animate-toast {
                      animation: slideInRight 0.3s ease-out forwards;
                    }
                    .animate-progress {
                      animation: toastProgress 5s linear forwards;
                    }
                  `}</style>
                  <div className="fixed top-24 right-6 z-[9999] bg-white border-l-4 border-green-500 rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden animate-toast max-w-[320px]">
                    <div className="p-4 flex items-start gap-3">
                      <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-[14px]">Application Sent!</span>
                        <span className="text-slate-600 text-[12px] leading-snug mt-0.5">Thank you for your interest. Our HR team will review it soon.</span>
                      </div>
                    </div>
                    <div className="h-[3px] bg-slate-100 w-full">
                      <div className="h-full bg-green-500 animate-progress" />
                    </div>
                  </div>
                </>
              )}

              {/* Personal Details Section */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-[#1E1B5C] text-lg mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                    Personal Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <input required name="name" id="name" type="text" className="px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all" placeholder="John Doe" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <input required name="email" id="email" type="email" className="px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all" placeholder="john.doe@example.com" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                      <input required name="phone" id="phone" type="tel" className="px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all" placeholder="+91 98765 43210" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="dob" className="text-sm font-semibold text-slate-700">Date of Birth <span className="text-red-500">*</span></label>
                      <input required name="dob" id="dob" type="date" className="px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all text-slate-700" />
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700">Gender <span className="text-red-500">*</span></label>
                      <div className="flex items-center gap-6 mt-1">
                        <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                          <input type="radio" name="gender" value="male" className="w-4 h-4 text-[#1E1B5C] focus:ring-[#1E1B5C] focus:ring-2" required />
                          Male
                        </label>
                        <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                          <input type="radio" name="gender" value="female" className="w-4 h-4 text-[#1E1B5C] focus:ring-[#1E1B5C] focus:ring-2" required />
                          Female
                        </label>
                        <label className="flex items-center gap-2 text-slate-700 cursor-pointer">
                          <input type="radio" name="gender" value="other" className="w-4 h-4 text-[#1E1B5C] focus:ring-[#1E1B5C] focus:ring-2" required />
                          Other
                        </label>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label htmlFor="address" className="text-sm font-semibold text-slate-700">Current Address</label>
                      <textarea name="address" id="address" rows={2} className="px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all" placeholder="Enter your full address"></textarea>
                    </div>
                  </div>
                </div>

                {/* Professional Details Section */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-[#1E1B5C] text-lg mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                    Professional & Educational Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="education" className="text-sm font-semibold text-slate-700">Highest Educational Qualification <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select required defaultValue="" name="education" id="education" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all appearance-none bg-white text-slate-700">
                          <option value="" disabled>Select Qualification</option>
                          <option value="phd">Ph.D.</option>
                          <option value="masters">Master&apos;s Degree (MTech/MSc etc.)</option>
                          <option value="bachelors">Bachelor&apos;s Degree (BTech/BSc etc.)</option>
                          <option value="diploma">Diploma</option>
                          <option value="secondary">Higher Secondary / High School</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="experience" className="text-sm font-semibold text-slate-700">Total Experience <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select
                          required
                          name="experience"
                          id="experience"
                          defaultValue=""
                          className="w-full px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all appearance-none bg-white text-slate-700"
                        >
                          <option value="" disabled>Select Experience</option>
                          <option value="fresher">Fresher (0 years)</option>
                          <option value="0-1">0 to 1 Year</option>
                          <option value="1-3">1 - 3 Years</option>
                          <option value="3-5">3 - 5 Years</option>
                          <option value="5-10">5 - 10 Years</option>
                          <option value="10+">10+ Years</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upload & Questions Section */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-[#1E1B5C] text-lg mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
                    Documents & Additional Information
                  </h3>

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">Resume / CV Upload <span className="text-red-500">*</span></label>
                      <div
                        className="border-2 border-dashed border-slate-300 rounded-xl px-6 py-10 bg-white hover:bg-slate-50 transition-colors cursor-pointer flex flex-col items-center justify-center text-center group"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <input
                          type="file"
                          name="attachment"
                          ref={fileInputRef}
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                        />
                        <div className="w-12 h-12 bg-slate-100 text-slate-400 group-hover:text-[#FF6700] rounded-full flex items-center justify-center mb-3 transition-colors">
                          {selectedFileName ? <FileText size={24} /> : <UploadCloud size={24} />}
                        </div>

                        {selectedFileName ? (
                          <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-[#1E1B5C] mb-1">{selectedFileName}</span>
                            <span className="text-xs text-green-600 block">File attached successfully</span>
                            <span className="text-xs text-slate-500 mt-2 hover:underline">Click to change file</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-sm font-bold text-slate-700 mb-1">Click to Upload or drag and drop</span>
                            <span className="text-xs text-slate-500">PDF, DOC, DOCX (Max 5MB)</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="reason" className="text-sm font-semibold text-slate-700">Why do you want to join Omegalab? <span className="text-red-500">*</span></label>
                      <textarea required name="reason" id="reason" rows={3} className="px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all" placeholder="Tell us briefly about your motivation..."></textarea>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="notes" className="text-sm font-semibold text-slate-700">Additional Notes / Cover Letter (Optional)</label>
                      <textarea name="notes" id="notes" rows={3} className="px-4 py-3 rounded border border-slate-300 focus:border-[#1E1B5C] focus:ring-1 focus:ring-[#1E1B5C] outline-none transition-all" placeholder="Any other details you'd like to share..."></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#FF6700] hover:bg-orange-600 shadow-md text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed group w-full md:w-auto justify-center"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Send Application'}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
}
