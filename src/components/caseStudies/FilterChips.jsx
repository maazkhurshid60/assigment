import React from "react";

const FilterChips = ({
  options,
  activeOption,
  counts,
  onSelect,
  label = "Filter case studies by category",
}) => (
  <div className="flex flex-wrap gap-3" role="group" aria-label={label}>
    {options.map((option) => {
      const isActive = option === activeOption;
      const count = counts?.[option];

      return (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          aria-pressed={isActive}
          className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
            isActive
              ? "border-transparent bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-white shadow-lg"
              : "border-white/20 text-gray-300 hover:border-white/50 hover:text-white"
          }`}
        >
          {option}
          {typeof count === "number" && (
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                isActive ? "bg-white/25 text-white" : "bg-white/10 text-gray-400"
              }`}
            >
              {count}
            </span>
          )}
        </button>
      );
    })}
  </div>
);

export default FilterChips;
