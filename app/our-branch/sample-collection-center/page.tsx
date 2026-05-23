import Image from 'next/image';
import CollectionAccordion from '@/components/CollectionAccordion';

export const metadata = {
  title: "Sample Collection Centres | OmegaLab Testing Services",
  description: "Extending our reach beyond laboratories, our collection centers enable seamless sample submission with assured quality, consistency, and timely processing.",
};

export default function SampleCollectionPage() {
  return (
    <div className="w-full bg-[#f8fafc] relative font-montserrat min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1E1B5C]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#FF6700]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-12 flex flex-col items-center relative z-10">

        {/* Title Block */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E1B5C]/5 text-[#1E1B5C] font-bold text-[14px] uppercase tracking-widest mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FF6700]"></span> Collection Network
          </div>
          <h1 className="text-[#1E1B5C] font-black text-[30px] md:text-[44px] uppercase font-oswald tracking-wide mb-4 drop-shadow-sm">
            Sample Collection Centres
          </h1>
          <p className="text-slate-500 text-[15px] md:text-[17px] leading-relaxed font-medium max-w-3xl mx-auto">
            Extending our reach beyond laboratories, our collection centers enable seamless sample submission with assured quality, consistency, and timely processing.
          </p>
        </div>

        {/* Side-by-Side Layout handled by CollectionAccordion */}
        <CollectionAccordion />
      </div>
    </div>
  );
}
