import React from "react";

const categoryStyles = {
  Web: "border-blue-400/40 bg-blue-500/10 text-blue-300",
  Mobile: "border-teal-400/40 bg-teal-500/10 text-teal-300",
  AI: "border-purple-400/40 bg-purple-500/10 text-purple-300",
  Blockchain: "border-pink-400/40 bg-pink-500/10 text-pink-300",
};

const CaseStudyCard = ({ title, category, summary, year }) => (
  <article className="flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 duration-300 hover:-translate-y-1 hover:border-[#3F5EFB]/60 hover:shadow-lg">
    <div className="flex items-center justify-between gap-3">
      <span
        className={`rounded-full border px-3 py-1 text-xs font-medium ${
          categoryStyles[category] || "border-white/20 bg-white/5 text-gray-300"
        }`}
      >
        {category}
      </span>
      <span className="text-xs text-gray-400">{year}</span>
    </div>

    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-400">{summary}</p>
  </article>
);

export default CaseStudyCard;
