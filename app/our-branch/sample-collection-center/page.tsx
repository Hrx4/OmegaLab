import CollectionAccordion from '@/components/CollectionAccordion';

export const metadata = {
  title: "Sample Collection Centres | OmegaLab Testing Services",
  description: "Extending our reach beyond laboratories, our collection centers enable seamless sample submission with assured quality, consistency, and timely processing.",
};

export default function SampleCollectionPage() {
  return (
    <div className="w-full bg-[#F4F7FA] font-montserrat min-h-screen py-16 px-4 md:px-8 lg:px-12 flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-[#FF6700] font-black text-[32px] md:text-[44px] uppercase font-oswald tracking-wide mb-4 drop-shadow-sm">
          SAMPLE COLLECTION CENTRE
        </h1>
        <h2 className="text-[#1E1B5C] font-extrabold text-[20px] md:text-[26px] font-oswald tracking-tight mb-4">
          Expanding accessibility. Delivering consistent quality across locations.
        </h2>
        <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed font-semibold max-w-3xl mx-auto">
          Extending our reach beyond laboratories, our collection centers enable seamless sample submission with assured quality, consistency, and timely processing.
        </p>
      </div>

      <CollectionAccordion />
    </div>
  );
}
