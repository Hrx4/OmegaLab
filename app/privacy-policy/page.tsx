'use client';

import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPolicy() {
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
            Privacy <span className="text-[#FF6700]">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-medium tracking-widest uppercase text-sm md:text-base max-w-2xl"
          >
            How we collect, use, and protect your data.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 md:px-12 mt-[-40px] relative z-30">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#FF6700] p-6 lg:p-12">
          
          <div className="prose prose-slate max-w-none">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-[#FF6700]" size={28} />
              <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald m-0">1. Information We Collect</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We collect information that you provide directly to us when you fill out contact forms, submit testing requirements, apply for careers, or provide feedback. This may include your name, email address, phone number, company name, address, and any specific details related to your testing needs or job application.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <Database className="text-[#FF6700]" size={28} />
              <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald m-0">2. How We Use Your Information</h2>
            </div>
            <ul className="space-y-3 text-slate-600 mb-8 list-disc pl-5">
              <li>To provide, operate, and maintain our testing services.</li>
              <li>To process your transactions and send you related information, including reports and invoices.</li>
              <li>To communicate with you regarding updates, support, and administrative messages.</li>
              <li>To evaluate job applications and communicate with candidates.</li>
              <li>To improve our website and services based on user feedback.</li>
            </ul>

            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-[#FF6700]" size={28} />
              <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald m-0">3. Information Sharing</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers. We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
            </p>

            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-[#FF6700]" size={28} />
              <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald m-0">4. Data Security</h2>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
            </p>

            <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald mb-4 mt-8">5. Changes to This Privacy Policy</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Omegalab Testing Services has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>

            <h2 className="text-2xl font-black text-[#1E1B5C] font-oswald mb-4 mt-8">6. Contact Us</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at omegalabinfo98@gmail.com.
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
