import React from "react";

const CaseStudiesEmpty = ({ onClearFilters }) => (
  <div className="flex flex-col items-center rounded-xl border border-dashed border-white/20 px-6 py-14 text-center">
    <h3 className="text-xl font-semibold text-white">No case studies match your filters</h3>
    <p className="mt-2 text-sm text-gray-400">
      Try a different category or a shorter search term.
    </p>
    <button
      type="button"
      onClick={onClearFilters}
      className="mt-6 min-h-[44px] rounded-full border border-white/30 px-8 py-2 font-medium text-white duration-200 hover:border-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      Clear filters
    </button>
  </div>
);

export default CaseStudiesEmpty;
