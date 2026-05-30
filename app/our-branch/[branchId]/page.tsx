import Image from 'next/image';
import { MapPin, Award, FlaskConical, Phone, ClipboardCheck } from 'lucide-react';
import branchesData from '../../../data/branches.json';

export async function generateMetadata({ params }: { params: Promise<{ branchId: string }> }) {
  const resolvedParams = await params;
  const branchId = resolvedParams.branchId;
  const branch = branchesData.find(b => b.id === branchId) || branchesData[0];
  
  return {
    title: branch.seoTitle,
    description: branch.seoDescription
  };
}

export default async function BranchPage({ params }: { params: Promise<{ branchId: string }> }) {
  const resolvedParams = await params;
  const branchId = resolvedParams.branchId;
  const branch = branchesData.find(b => b.id === branchId) || branchesData[0];

  return (
    <div className="w-full bg-[#f8fafc] relative font-montserrat min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1E1B5C]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#FF6700]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-12 flex flex-col items-center relative z-10">

        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1B5C]/5 text-[#1E1B5C] font-bold text-[14px] uppercase tracking-widest mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF6700]"></span> Lab Network
          </div>
          <h1 className="font-extrabold text-[32px] md:text-[48px] text-[#1E1B5C] font-oswald tracking-tight mb-4 drop-shadow-sm">
            {branch.name}
          </h1>
          <p className="text-slate-500 text-[15px] md:text-[17px] leading-[1.7] font-medium max-w-3xl mx-auto">
            Equipped with advanced instrumentation and operated by experienced professionals, this facility delivers precise, NABL-accredited testing services you can trust.
          </p>
        </div>

        {/* Side-by-Side Layout: Image+Details Left, Map Right */}
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Left Side: Image + Details Card */}
          <div className="flex flex-col text-left bg-white rounded-3xl shadow-[0_15px_40px_rgba(30,27,92,0.1)] relative overflow-hidden h-full border border-slate-100">
            {/* Side Accent Line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#1E1B5C] to-[#FF6700] z-20"></div>
            
            {/* Top Clear Image Banner */}
            <div className="w-full h-64 md:h-80 relative shrink-0 bg-slate-100">
              <Image 
                src={branch.posterImage || "https://res.cloudinary.com/de4cnpfm1/image/upload/v1778432629/offc_rp2lzu.jpg"} 
                alt={`${branch.name} Office`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Details Content */}
            <div className="flex flex-col items-start p-6 md:p-8 grow bg-white relative z-10">
              
              {/* Branch Type Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E1B5C]/5 text-[#1E1B5C] font-bold text-[12px] uppercase tracking-widest mb-4">
                <FlaskConical size={14} /> {branch.isMainLab ? 'Accredited Laboratory' : 'Collection Center'}
              </div>

              <h2 className="font-black text-[28px] md:text-[36px] text-[#1E1B5C] font-oswald tracking-tight mb-3">
                {branch.name}
              </h2>
              
              {branch.accreditation && (
                <div className="bg-[#FF6700]/10 text-[#FF6700] px-4 py-2 rounded-full text-[13px] font-bold tracking-wide uppercase mb-5 inline-flex items-center gap-2 border border-[#FF6700]/20">
                  <Award size={16} /> {branch.accreditation}
                </div>
              )}
              
              {branch.address && (
                <div className="flex items-start gap-3 mb-4 w-full text-left bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <MapPin size={20} className="text-[#FF6700] shrink-0 mt-0.5" />
                  <p className="text-[14px] md:text-[15px] text-slate-700 leading-relaxed font-semibold">
                    {branch.address}
                  </p>
                </div>
              )}

              {branch.phone && (
                <div className="flex items-center gap-3 mb-4 w-full text-left bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <Phone size={18} className="text-[#FF6700] shrink-0" />
                  <a href={`tel:${branch.phone.split('/')[0].trim()}`} className="text-[14px] md:text-[15px] text-slate-700 font-bold hover:text-[#FF6700] transition-colors">
                    {branch.phone}
                  </a>
                </div>
              )}

              {branch.email && (
                <div className="flex items-center gap-3 mb-6 w-full text-left bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="text-[16px] shrink-0">✉️</span>
                  <a href={`mailto:${branch.email}`} className="text-[14px] md:text-[15px] text-slate-700 font-bold hover:text-[#FF6700] transition-colors">
                    {branch.email}
                  </a>
                </div>
              )}

              {/* Get Directions Button */}
              <a 
                href={branch.mapUrl && branch.mapUrl !== "#" ? branch.mapUrl : `https://maps.google.com/?q=${branch.address}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-[#1E1B5C] text-white px-6 py-3.5 rounded-xl font-oswald text-[16px] md:text-[18px] font-bold hover:bg-[#FF6700] transition-all duration-300 shadow-[0_8px_20px_rgba(30,27,92,0.2)] hover:shadow-[0_8px_25px_rgba(255,103,0,0.4)] overflow-hidden w-full sm:w-auto mt-auto"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300">
                  <Image src="https://cdn-icons-png.flaticon.com/512/2335/2335353.png" alt="Google Maps" fill className="object-contain" unoptimized />
                </span>
                <span className="relative tracking-wide">Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Side: Map Block */}
          <div className="w-full h-full min-h-[400px] lg:min-h-0 relative rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(30,27,92,0.1)] border border-slate-100 group bg-slate-100 flex items-center justify-center">
            {branch.mapEmbedUrl ? (
              <iframe 
                src={branch.mapEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            ) : (
              <div className="text-[#1E1B5C]/40 font-medium font-oswald text-xl tracking-widest uppercase">
                Map Not Available
              </div>
            )}
          </div>

        </div>

        {/* Feature Cards */}
        <div className="w-full max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          
          <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_6px_20px_rgba(30,27,92,0.04)] flex flex-col items-center text-center hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1E1B5C] flex items-center justify-center mb-4 group-hover:bg-[#1E1B5C] group-hover:text-white transition-colors duration-300">
              <FlaskConical size={22} />
            </div>
            <h4 className="font-bold text-[#1E1B5C] text-[17px] mb-2 font-oswald tracking-wide">Advanced Testing</h4>
            <p className="text-slate-500 text-[13px] leading-relaxed">State-of-the-art machinery for highly accurate material testing.</p>
          </div>

          <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_6px_20px_rgba(30,27,92,0.04)] flex flex-col items-center text-center hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] text-[#FF6700] flex items-center justify-center mb-4 group-hover:bg-[#FF6700] group-hover:text-white transition-colors duration-300">
              <ClipboardCheck size={22} />
            </div>
            <h4 className="font-bold text-[#1E1B5C] text-[17px] mb-2 font-oswald tracking-wide">NABL Accredited</h4>
            <p className="text-slate-500 text-[13px] leading-relaxed">ISO/IEC 17025:2017 certified ensuring global standard compliance.</p>
          </div>

          <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_6px_20px_rgba(30,27,92,0.04)] flex flex-col items-center text-center hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1E1B5C] flex items-center justify-center mb-4 group-hover:bg-[#1E1B5C] group-hover:text-white transition-colors duration-300">
              <Phone size={22} />
            </div>
            <h4 className="font-bold text-[#1E1B5C] text-[17px] mb-2 font-oswald tracking-wide">Expert Support</h4>
            <p className="text-slate-500 text-[13px] leading-relaxed">Dedicated professionals for sampling, reporting & technical queries.</p>
          </div>

          <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_6px_20px_rgba(30,27,92,0.04)] flex flex-col items-center text-center hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] text-[#FF6700] flex items-center justify-center mb-4 group-hover:bg-[#FF6700] group-hover:text-white transition-colors duration-300">
              <Award size={22} />
            </div>
            <h4 className="font-bold text-[#1E1B5C] text-[17px] mb-2 font-oswald tracking-wide">Quality Assured</h4>
            <p className="text-slate-500 text-[13px] leading-relaxed">Rigorous quality control for reliable, repeatable test results.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
