import React from "react";

const SKELETON_COUNT = 6;

const CaseStudiesSkeleton = () => (
  <div
    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    aria-hidden="true"
  >
    {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
      <div
        key={index}
        className="animate-pulse rounded-xl border border-white/10 bg-white/[0.04] p-6"
      >
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 rounded-full bg-white/10" />
          <div className="h-4 w-10 rounded bg-white/10" />
        </div>
        <div className="mt-5 h-5 w-3/4 rounded bg-white/10" />
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full rounded bg-white/10" />
          <div className="h-3 w-11/12 rounded bg-white/10" />
          <div className="h-3 w-2/3 rounded bg-white/10" />
        </div>
      </div>
    ))}
  </div>
);

export default CaseStudiesSkeleton;
