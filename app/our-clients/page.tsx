'use client';

import { motion } from 'motion/react';
import { Star, Quote, Building2, ShieldCheck, Factory } from 'lucide-react';
import Image from 'next/image';
import CLIENT_DATA from '../../data/clients.json';

const CLIENT_CATEGORIES = [
  { name: 'Construction & Civil', icon: Building2 },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Government & Defense', icon: ShieldCheck },
];



const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Chief Engineer, Apex Infrastructure",
    text: "Omegalab's precision in civil material testing has been a cornerstone for our major highway projects. Their NABL accreditation and prompt reporting give us immense confidence."
  },
  {
    name: "Dr. Ananya Singh",
    role: "QA Head, BioChem Industries",
    text: "We rely heavily on their chemical analysis division. The optical emission spectroscopy results are always accurate, and their team is highly responsive to urgent testing needs."
  },
  {
    name: "Manoj Agarwal",
    role: "Production Manager, SteelTech Ltd.",
    text: "For mechanical testing, particularly tensile and impact properties, Omegalab is our go-to partner. Their expertise ensures our products meet international standards."
  }
];

export default function OurClientsPage() {
  return (
    <div className="w-full bg-[#EFF6FF] min-h-screen pb-24 font-montserrat">
      {/* Hero Header Area */}
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
            Our Esteemed <span className="text-[#FF6700]">Clients</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-medium tracking-widest uppercase text-sm md:text-base max-w-2xl"
          >
            Trusted by industry leaders and large-scale enterprises across India for uncompromising quality and precise testing.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mt-[-40px] relative z-30 mb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#FF6700] p-6 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b border-slate-100 pb-12 mb-12">
            <div>
              <div className="text-[#FF6700] font-black text-[40px] md:text-[56px] font-oswald leading-none mb-2">500+</div>
              <div className="text-[#1E1B5C] font-bold uppercase tracking-wider text-sm">Enterprise Clients</div>
            </div>
            <div className="md:border-l md:border-r border-slate-100">
              <div className="text-[#FF6700] font-black text-[40px] md:text-[56px] font-oswald leading-none mb-2">15+</div>
              <div className="text-[#1E1B5C] font-bold uppercase tracking-wider text-sm">Years of Trust</div>
            </div>
            <div>
              <div className="text-[#FF6700] font-black text-[40px] md:text-[56px] font-oswald leading-none mb-2">10M+</div>
              <div className="text-[#1E1B5C] font-bold uppercase tracking-wider text-sm">Samples Tested</div>
            </div>
          </div>

          <h2 className="text-center font-oswald font-bold text-2xl text-[#1E1B5C] uppercase tracking-widest mb-10">Trusted By The Best</h2>

          {/* Client Brand Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 mb-8">
            {CLIENT_DATA.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.1 }}
                className="aspect-[3/2] border border-slate-100 bg-slate-50 flex items-center justify-center rounded-xl p-4 hover:shadow-lg transition-all group overflow-hidden relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#FF6700]/0 group-hover:bg-[#FF6700]/5 transition-colors z-0"></div>
                <div className="flex flex-col items-center justify-center gap-3 relative z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105 w-full h-full">
                  <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>
                  <span className="font-bold text-[11px] md:text-[13px] tracking-wider text-[#1E1B5C] uppercase text-center">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sectors Served */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-12 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-[#1E1B5C] font-oswald font-black text-[28px] md:text-[40px] uppercase mb-4">Sectors We <span className="text-[#FF6700]">Serve</span></h2>
          <div className="w-20 h-1 bg-[#1E1B5C] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md p-8 border border-slate-100 hover:border-[#FF6700] hover:shadow-xl transition-all group text-center"
            >
              <div className="w-20 h-20 bg-[#EFF6FF] text-[#1E1B5C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6700] group-hover:text-white transition-colors duration-300">
                <cat.icon size={36} />
              </div>
              <h3 className="font-bold font-oswald text-[22px] text-[#1E1B5C] uppercase mb-3">{cat.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Delivering uncompromising accuracy and adherence to national and international standards for the {cat.name.toLowerCase()} sector.</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#1E1B5C] py-24 w-full relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6700]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-[1300px] mx-auto px-4 md:px-12 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <Quote className="text-[#FF6700] opacity-50 mb-6" size={48} />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center font-black text-[32px] md:text-[42px] text-white font-oswald tracking-tight uppercase"
            >
              Client <span className="text-[#FF6700]">Testimonials</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FF6700]/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} className="text-[#FF6700]" fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 leading-[1.8] text-[15px] italic mb-8 flex-grow">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-white/10 pt-6 flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EFF6FF] to-[#1E1B5C] border-2 border-[#FF6700] flex items-center justify-center font-black text-[#1E1B5C] text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base font-oswald tracking-wider">{testimonial.name}</h4>
                    <span className="text-[#FF6700] font-medium tracking-wide text-xs uppercase">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

