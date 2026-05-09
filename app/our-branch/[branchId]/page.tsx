import Image from 'next/image';

export default async function BranchPage({ params }: { params: Promise<{ branchId: string }> }) {
  const resolvedParams = await params;
  const branchId = resolvedParams.branchId || 'kolkata-lab-1';

  // Format branchId roughly for display
  const displayName = branchId
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="w-full bg-white font-montserrat min-h-screen py-12 md:py-20 px-4 md:px-12 flex flex-col items-center">

      {/* Title Section */}
      <h1 className="text-center font-extrabold text-[28px] md:text-[42px] text-[#1E1B5C] font-oswald tracking-tight mb-4">
        Our Presence
      </h1>
      <h2 className="text-center font-extrabold text-[18px] md:text-[24px] text-black font-oswald tracking-tight mb-4 max-w-3xl">
        Expanding accessibility. Delivering consistent quality across locations.
      </h2>
      <p className="text-center text-[15px] md:text-[17px] text-black max-w-4xl mb-12 leading-[1.6]">
        With multiple laboratories and dedicated collection centers, OmegaLab ensures reliable testing services are always within reach—without compromising on quality or precision.
      </p>

      {/* Main Graphic/Poster Block */}
      <div className="w-full max-w-[450px] aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl mb-10 border border-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1541888048259-251f2f811568?auto=format&fit=crop&w=800&q=80"
          alt="Lab Building Poster"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Below poster details */}
      <h3 className="text-center font-bold text-[24px] md:text-[32px] text-[#1E1B5C] font-oswald tracking-tight mb-2 border-b-2 border-[#1E1B5C] inline-block uppercase">
        {displayName}
      </h3>
      <p className="text-center text-[15px] font-bold text-black mb-1">
        NABL ACCREDITED LAB (TC-11935)
      </p>
      <p className="text-center text-[15px] text-black mb-6">
        Address: 256A, M. G. Road, Purbasan, Thakurpukur, Kolkata - 700 063
      </p>

      {/* Location Button */}
      <a href="#" className="flex items-center gap-3 bg-[#1E1B5C] text-white px-10 py-4 rounded-lg font-oswald text-[20px] font-bold hover:bg-[#FF6700] transition-colors shadow-lg">
        <span className="text-[24px]">🔍</span> Location
      </a>

    </div>
  );
}
