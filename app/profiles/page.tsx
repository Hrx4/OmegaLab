'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { FileText, Award, CheckCircle2, Building2, Quote, Users } from 'lucide-react';

export default function ProfilesPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#1E1B5C] text-white py-20 relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 border-[40px] border-white rounded-full -top-20 -right-20"></div>
          <div className="absolute w-64 h-64 border-[30px] border-[#FF6700] rounded-full bottom-[-50px] left-[-50px]"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-4 md:px-12 relative z-10 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center font-black text-[36px] md:text-[52px] font-oswald tracking-wider uppercase mb-4"
          >
            Company <span className="text-[#FF6700]">Profile</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-white/80 max-w-2xl text-[16px] md:text-[18px]"
          >
            Discover our rich history, mission, and the core values that make OMEGALAB Eastern & North Eastern India&apos;s most trusted material testing laboratory.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 py-16 md:py-24">
        {/* Core Values / Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#EFF6FF] p-8 rounded-2xl border-t-4 border-[#1E1B5C] shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1E1B5C] shadow-sm mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-[22px] font-bold font-oswald uppercase text-[#1E1B5C] mb-4">Our Vision</h3>
            <p className="text-slate-700 leading-relaxed text-[15px]">
              To be the most reliable and globally recognized testing laboratory offering unparalleled accuracy, cutting-edge technology, and exceptional customer service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#EFF6FF] p-8 rounded-2xl border-t-4 border-[#FF6700] shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#FF6700] shadow-sm mb-6">
              <Building2 size={28} />
            </div>
            <h3 className="text-[22px] font-bold font-oswald uppercase text-[#1E1B5C] mb-4">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed text-[15px]">
              Committed to promoting quality and safety by providing rigorous, independent, and ethical testing services across infrastructural and industrial sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#EFF6FF] p-8 rounded-2xl border-t-4 border-[#1E1B5C] shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1E1B5C] shadow-sm mb-6">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-[22px] font-bold font-oswald uppercase text-[#1E1B5C] mb-4">Quality Policy</h3>
            <p className="text-slate-700 leading-relaxed text-[15px]">
              Strict compliance with ISO/IEC 17025. We ensure impartial, precise, and timely results with continuous improvement in our Quality Management System.
            </p>
          </motion.div>
        </div>

        {/* Corporate Profile Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] md:aspect-square bg-slate-200 rounded-lg overflow-hidden shadow-2xl relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Office"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Design accents */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#EFF6FF] rounded-full -z-10"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FF6700]/10 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#1E1B5C] font-oswald uppercase tracking-tight mb-6 leading-[1.1]">
              A Legacy of <br /><span className="text-[#FF6700]">Testing Excellence</span>
            </h2>
            <div className="w-16 h-1.5 bg-[#FF6700] mb-8"></div>
            <div className="space-y-6 text-slate-700 text-[16px] leading-[1.8]">
              <p>
                Established in 1999, <strong>OMEGALAB TESTING SERVICES PRIVATE LIMITED</strong> has grown into a premier testing institution recognized globally. We specialize in Mechanical, Chemical, and Non-Destructive Testing, catering to the exacting demands of the manufacturing, construction, and infrastructural sectors.
              </p>
              <p>
                As an <strong>ISO/IEC 17025 compliant laboratory accredited by NABL</strong>, we maintain the highest standards of accuracy, impartiality, and efficiency. Our network spans across major hubs in Eastern India, including Kolkata, Siliguri, Ranchi, and Odisha, ensuring rapid service delivery and exceptional customer support.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <button className="bg-[#1E1B5C] hover:bg-slate-800 text-white px-8 py-3.5 rounded font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl">
                <FileText size={18} /> Download Brochure
              </button>
            </div>
          </motion.div>
        </div>

        {/* Leadership Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#1E1B5C] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <Quote size={300} className="text-white transform translate-x-12 -translate-y-12 rotate-6" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#FF6700] overflow-hidden shrink-0 bg-slate-300">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                alt="Director"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div className="flex flex-col flex-1 pb-4">
              <Quote size={32} className="text-[#FF6700] mb-4 mx-auto md:mx-0 opacity-80" />
              <p className="text-[18px] md:text-[22px] font-medium leading-relaxed italic mb-6 text-white/90">
                &quot;Quality is not just a parameter to be tested, it is a continuous commitment. At Omegalab, our focus has always been on delivering undeniable facts through rigorous scientific analysis, enabling our clients to build safer and more reliable infrastructure for the future.&quot;
              </p>
              <h4 className="font-bold font-oswald text-[20px] uppercase tracking-wider text-[#FF6700]">Board of Directors</h4>
              <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mt-1">Omegalab Testing Services</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
