import Image from 'next/image';
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
          src={branch.posterImage}
          alt={`${branch.name} Poster`}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Below poster details */}
      <h3 className="text-center font-bold text-[24px] md:text-[32px] text-[#1E1B5C] font-oswald tracking-tight mb-2 border-b-2 border-[#1E1B5C] inline-block uppercase">
        {branch.name}
      </h3>
      {branch.accreditation && (
        <p className="text-center text-[15px] font-bold text-black mb-1">
          {branch.accreditation}
        </p>
      )}
      {branch.address && (
        <p className="text-center text-[15px] text-black mb-6 max-w-lg">
          Address: {branch.address}
        </p>
      )}

      {/* Location Button */}
      <a href={branch.mapUrl} className="flex items-center gap-3 bg-[#1E1B5C] text-white px-10 py-4 rounded-lg font-oswald text-[20px] font-bold hover:bg-[#FF6700] transition-colors shadow-lg">
        <span className="text-[24px]">🔍</span> Location
      </a>

    </div>
  );
}
