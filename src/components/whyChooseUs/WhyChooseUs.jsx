import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import FeatureCard from "./FeatureCard";
import {
  featureToggled,
  selectActiveFeatureId,
  selectFeatures,
} from "../../features/whyChooseUs/whyChooseUsSlice";

// Icons stay in the view layer so the slice holds serializable data only.
const featureIcons = {
  "senior-engineers": UsersIcon,
  "fast-delivery": RocketLaunchIcon,
  "scalable-teams": UserGroupIcon,
  "secure-by-design": ShieldCheckIcon,
};

const WhyChooseUs = () => {
  const dispatch = useDispatch();
  const features = useSelector(selectFeatures);
  const activeFeatureId = useSelector(selectActiveFeatureId);

  return (
    <section id="why-choose-us" className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-purple-500/50 bg-purple-500/10 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Why Companies{" "}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#3F5EFB] to-[#2dd4bf] bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base text-gray-400">
            We deliver scalable, secure, and future-ready solutions.
          </p>

          <span className="mt-6 block h-1 w-40 rounded-full bg-gradient-to-r from-[#a855f7] to-[#2dd4bf]" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              desc={feature.desc}
              accent={feature.accent}
              icon={featureIcons[feature.id]}
              isActive={activeFeatureId === feature.id}
              onSelect={() => dispatch(featureToggled(feature.id))}
            />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#6318F1] to-[#FC466B] px-10 py-4 text-lg font-semibold text-white duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Start Your Project
            <span aria-hidden="true">&rarr;</span>
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
