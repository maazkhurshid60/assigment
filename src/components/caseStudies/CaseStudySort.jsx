import React from "react";
import { SORT_OPTIONS } from "../../features/caseStudies/caseStudiesSlice";

const CaseStudySort = ({ value, onChange }) => (
  <div className="flex items-center gap-3">
    <label htmlFor="case-study-sort" className="text-sm text-gray-400">
      Sort
    </label>
    <select
      id="case-study-sort"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="min-h-[44px] rounded-full border border-white/20 bg-[#0d002d] px-4 py-2 text-sm text-white duration-200 focus:border-[#3F5EFB] focus:outline-none focus:ring-1 focus:ring-[#3F5EFB]"
    >
      {Object.entries(SORT_OPTIONS).map(([key, optionLabel]) => (
        <option key={key} value={key}>
          {optionLabel}
        </option>
      ))}
    </select>
  </div>
);

export default CaseStudySort;
