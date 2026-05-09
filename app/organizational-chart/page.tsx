'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Briefcase, Users, CheckCircle2 } from 'lucide-react';

const ORG_HIERARCHY = {
  directors: [
    { name: "Dr. Anish Banerjee", role: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    { name: "Mrs. Sunita Verma", role: "Technical Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" }
  ],
  management: [
    { name: "Rajesh Kumar", role: "Quality Manager", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
    { name: "Amitabh Singh", role: "Operations Head", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
    { name: "Priya Sharma", role: "HR & Admin Manager", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" }
  ],
  departments: [
    {
      name: "Mechanical Testing",
      head: "Vikram Das - HOD",
      teamSize: 12,
      subroles: ["Senior Test Engineers", "Junior Analysts", "Technicians"]
    },
    {
      name: "Chemical Analysis",
      head: "Dr. Sneha Ray - HOD",
      teamSize: 8,
      subroles: ["Analytical Chemists", "Lab Assistants", "Sample Prep Team"]
    },
    {
      name: "NDT & Civil",
      head: "Rahul Bose - HOD",
      teamSize: 15,
      subroles: ["NDT LEVEL-II Experts", "Civil Engineers", "Site Inspectors"]
    }
  ]
};

const ProfileNode = ({ person, delay }: { person: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center p-6 w-full max-w-[280px] group hover:border-[#FF6700] hover:shadow-2xl transition-all relative z-10"
  >
    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#EFF6FF] group-hover:border-[#FF6700]/20 transition-colors relative shadow-md">
      <Image
        src={person.img}
        alt={person.name}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
    <h3 className="font-bold text-[#1E1B5C] text-lg font-oswald uppercase tracking-wide text-center">{person.name}</h3>
    <p className="text-[#FF6700] text-sm font-semibold text-center mt-1 uppercase tracking-wider">{person.role}</p>
  </motion.div>
);

export default function OrganizationalChartPage() {
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-32 font-montserrat">
      {/* Hero Header Area */}
      <div className="bg-[#1E1B5C] w-full pt-16 pb-32 px-4 md:px-12 relative overflow-hidden">
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
            Organizational <span className="text-[#FF6700]">Chart</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-medium tracking-widest uppercase text-sm md:text-base max-w-2xl"
          >
            Meet the dedicated leadership and structured teams driving testing excellence at Omegalab.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mt-[-60px] relative z-30 flex flex-col items-center">

        {/* Tier 1: Board of Directors */}
        <div className="w-full flex justify-center relative z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center w-full relative">
            {ORG_HIERARCHY.directors.map((director, idx) => (
              <div key={idx} className="relative z-10 flex justify-center">
                <ProfileNode person={director} delay={0.2 + (idx * 0.1)} />
                {/* Vertical drop for each director */}
                <div className="hidden md:block absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Connector from Directors to Management */}
        <div className="w-full relative z-0 flex flex-col items-center">
          {/* Horizontal join for directors */}
          <div className="hidden md:block w-[calc(280px+4rem)] lg:w-[calc(280px+4rem)] h-1 bg-slate-300 rounded-full mt-8"></div>
          {/* Center vertical stem down to Management */}
          <div className="w-1 h-12 md:h-16 bg-slate-300 rounded-full"></div>
        </div>

        {/* Tier 2: Management Team */}
        <div className="w-full relative">
          <div className="flex flex-col md:flex-row justify-center w-full relative max-w-[1000px] mx-auto">
            {/* Horizontal connecting line - Desktop only */}
            <div className="hidden md:block absolute top-0 left-[16.666%] right-[16.666%] h-1 bg-slate-300 rounded-full"></div>

            {ORG_HIERARCHY.management.map((manager, idx) => (
              <div key={idx} className="flex flex-col items-center w-full md:w-1/3 relative z-10 px-4 pt-8 md:pt-0 mb-8 md:mb-0">
                {/* Vertical stem */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-10 bg-slate-300 rounded-full mb-0"></div>
                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-300 rounded-full"></div>

                <div className="mt-0 md:mt-10 w-full flex justify-center">
                  <ProfileNode person={manager} delay={0.5 + (idx * 0.1)} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connector to Departments */}
        <div className="w-full flex justify-center py-0 relative z-0 h-10 md:h-16">
          <div className="w-1 h-full bg-slate-300 rounded-full"></div>
        </div>

        {/* Tier 3: Departments structure with stems */}
        <div className="w-full relative mt-0 z-10">
          <div className="text-center bg-white border-2 border-[#1E1B5C] rounded-2xl px-8 py-4 w-max mx-auto shadow-xl mb-0 relative z-20">
            <h2 className="text-[#1E1B5C] font-black font-oswald text-2xl uppercase tracking-widest leading-none">
              Operational <span className="text-[#FF6700]">Departments</span>
            </h2>
          </div>

          {/* Connector from title to departments */}
          <div className="w-full flex justify-center relative z-0 h-10 md:h-16">
            <div className="w-1 h-full bg-slate-300 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center w-full relative">
            {/* Horizontal connecting line - Desktop only */}
            <div className="hidden md:block absolute top-0 left-[16.666%] right-[16.666%] h-1 bg-slate-300 rounded-full"></div>

            {ORG_HIERARCHY.departments.map((dept, idx) => (
              <div key={idx} className="flex flex-col items-center w-full md:w-1/3 relative z-10 px-4 pt-10 md:pt-0 mb-8 md:mb-0">
                {/* Vertical stem */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1 h-10 bg-slate-300 rounded-full"></div>
                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-1 h-10 bg-slate-300 rounded-full"></div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="bg-[#EFF6FF] rounded-2xl p-6 md:p-8 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow border border-slate-200 w-full md:mt-10 max-w-[360px]"
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white rounded-full opacity-50 pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-white border border-slate-200 text-[#1E1B5C] flex items-center justify-center shadow-md group-hover:border-[#FF6700] transition-colors shrink-0">
                      <Briefcase size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold text-[#1E1B5C] font-oswald text-xl md:text-2xl uppercase tracking-tight leading-none">{dept.name}</h3>
                      <span className="text-[#FF6700] text-[12px] md:text-[13px] font-bold uppercase tracking-wider mt-1">{dept.head}</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 flex-grow border border-slate-100 relative z-10 shadow-sm">
                    <ul className="flex flex-col gap-3.5 text-sm text-slate-600 font-medium">
                      {dept.subroles.map((sub, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#FF6700] shrink-0 mt-0.5" />
                          <span className="leading-tight">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-slate-500 text-[13px] font-bold relative z-10 border-t border-slate-200 pt-5 uppercase tracking-wide">
                    <span className="flex items-center gap-2">
                      <Users size={18} /> Team Size
                    </span>
                    <span className="bg-[#1E1B5C] text-white px-3.5 py-1.5 rounded-md">
                      {dept.teamSize}+ Members
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
