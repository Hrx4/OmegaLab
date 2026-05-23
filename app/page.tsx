import HomeSections from "@/components/HomeSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50 text-[#1E1B5C] font-semibold">Loading Omegalab...</div>}>
        <HomeSections />
      </Suspense>
    </div>
  );
}
