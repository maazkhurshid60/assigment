import React from "react";

// Full class strings per accent so Tailwind can statically detect them.
const accentStyles = {
  purple: {
    card: "border-purple-500/40 hover:border-purple-400 from-purple-500/10",
    active: "border-purple-400 shadow-[0_0_30px_-5px_#a855f7]",
    tile: "border-purple-500/40 bg-purple-500/10 text-purple-300",
    divider: "bg-purple-400",
  },
  blue: {
    card: "border-blue-500/40 hover:border-blue-400 from-blue-500/10",
    active: "border-blue-400 shadow-[0_0_30px_-5px_#3b82f6]",
    tile: "border-blue-500/40 bg-blue-500/10 text-blue-300",
    divider: "bg-blue-400",
  },
  teal: {
    card: "border-teal-500/40 hover:border-teal-400 from-teal-500/10",
    active: "border-teal-400 shadow-[0_0_30px_-5px_#2dd4bf]",
    tile: "border-teal-500/40 bg-teal-500/10 text-teal-300",
    divider: "bg-teal-400",
  },
  pink: {
    card: "border-pink-500/40 hover:border-pink-400 from-pink-500/10",
    active: "border-pink-400 shadow-[0_0_30px_-5px_#ec4899]",
    tile: "border-pink-500/40 bg-pink-500/10 text-pink-300",
    divider: "bg-pink-400",
  },
};

const FeatureCard = ({ title, desc, icon: Icon, accent = "purple", isActive, onSelect }) => {
  const styles = accentStyles[accent] || accentStyles.purple;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`group flex h-full w-full flex-col items-center rounded-2xl border bg-gradient-to-b to-transparent px-6 py-10 text-center duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
        styles.card
      } ${isActive ? styles.active : ""}`}
    >
      <span
        className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border duration-300 group-hover:scale-105 ${styles.tile}`}
      >
        {Icon ? <Icon className="h-10 w-10" aria-hidden="true" /> : null}
      </span>

      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className={`my-4 block h-[2px] w-10 rounded-full ${styles.divider}`} />
      <p className="text-sm leading-relaxed text-gray-400">{desc}</p>
    </button>
  );
};

export default FeatureCard;
