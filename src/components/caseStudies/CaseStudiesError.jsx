import React from "react";

const CaseStudiesError = ({ message, onRetry }) => (
  <div
    role="alert"
    className="flex flex-col items-center rounded-xl border border-[#FC466B]/40 bg-[#FC466B]/10 px-6 py-14 text-center"
  >
    <h3 className="text-xl font-semibold text-white">We couldn't load the case studies</h3>
    <p className="mt-2 text-sm text-gray-300">{message || "Network failed"}</p>
    <button
      type="button"
      onClick={onRetry}
      className="mt-6 min-h-[44px] rounded-full bg-[#6318F1] px-8 py-2 font-semibold text-white duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-[#FC466B]/60 hover:to-[#3F5EFB]/60 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      Retry
    </button>
  </div>
);

export default CaseStudiesError;
