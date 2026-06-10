'use client';

import { motion } from 'motion/react';
import { ShieldCheck, FileText, AlertCircle } from 'lucide-react';

export default function TermsAndConditions() {
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
            Terms & <span className="text-[#FF6700]">Conditions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-medium tracking-widest uppercase text-sm md:text-base max-w-2xl"
          >
            Please read these terms and conditions carefully before using our testing services.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 md:px-12 mt-[-40px] relative z-30">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#FF6700] p-6 lg:p-12">
          
          <div className="prose prose-slate max-w-none">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-[#FF6700]" size={28} />
              <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald m-0">1. Acceptance of Terms</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              By accessing and using the services provided by Omegalab Testing Services Private Limited ("Omegalab", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-[#FF6700]" size={28} />
              <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald m-0">2. Testing Services & Reports</h2>
            </div>
            <ul className="space-y-3 text-slate-600 mb-8 list-disc pl-5">
              <li>All test reports issued by Omegalab are valid only for the specific sample tested at the time of testing.</li>
              <li>Test reports are strictly confidential and will only be shared with the authorized individual or organization that requested the test.</li>
              <li>Omegalab reserves the right to reject any sample that is deemed hazardous, insufficiently labeled, or inappropriate for the requested testing parameters.</li>
              <li>Turnaround times provided are estimates and may vary based on testing complexities and equipment availability.</li>
            </ul>

            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-[#FF6700]" size={28} />
              <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald m-0">3. Liability and Limitations</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              While Omegalab strives for the highest accuracy and adheres strictly to NABL and ISO/IEC 17025:2017 standards, our liability in the event of any proven testing error or omission shall be strictly limited to the amount paid for the specific test in question. Omegalab shall not be liable for any indirect, consequential, or special damages arising from the use or inability to use our test reports.
            </p>

            <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald mb-4 mt-8">4. Payment Terms</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Unless otherwise agreed upon in writing, all payments for testing services are due upon receipt of the invoice. Test reports will only be released upon full clearance of outstanding dues.
            </p>

            <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald mb-4 mt-8">5. Amendments</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Omegalab reserves the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of our services following any changes constitutes your acceptance of the revised Terms and Conditions.
            </p>

            <hr className="my-10 border-slate-200" />
            
            <p className="text-sm text-slate-400 italic">
              Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
