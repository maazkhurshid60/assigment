import React, { useEffect, useRef, useState } from "react";

const DEBOUNCE_MS = 300;

const CaseStudySearch = ({ value, onChange }) => {
  const [draft, setDraft] = useState(value);
  // Tracks the last value this input pushed to Redux, so a store update caused
  // by our own dispatch is not mistaken for an external reset.
  const lastPushedRef = useRef(value);

  // Adopt external changes (e.g. "Clear filters") without clobbering typing.
  useEffect(() => {
    if (value !== lastPushedRef.current) {
      lastPushedRef.current = value;
      setDraft(value);
    }
  }, [value]);

  // Debounce so every keystroke does not dispatch to Redux.
  useEffect(() => {
    if (draft === lastPushedRef.current) return undefined;

    const timerId = setTimeout(() => {
      lastPushedRef.current = draft;
      onChange(draft);
    }, DEBOUNCE_MS);

    return () => clearTimeout(timerId);
  }, [draft, onChange]);

  return (
    <div className="w-full lg:w-72">
      <label htmlFor="case-study-search" className="sr-only">
        Search case studies
      </label>
      <input
        id="case-study-search"
        type="search"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder="Search case studies..."
        className="min-h-[44px] w-full rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white placeholder:text-gray-500 duration-200 focus:border-[#3F5EFB] focus:outline-none focus:ring-1 focus:ring-[#3F5EFB]"
      />
    </div>
  );
};

export default CaseStudySearch;
