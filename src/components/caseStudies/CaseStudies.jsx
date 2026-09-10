import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CaseStudyCard from "./CaseStudyCard";
import CaseStudySearch from "./CaseStudySearch";
import CaseStudySort from "./CaseStudySort";
import CaseStudiesEmpty from "./CaseStudiesEmpty";
import CaseStudiesError from "./CaseStudiesError";
import CaseStudiesSkeleton from "./CaseStudiesSkeleton";
import FilterChips from "./FilterChips";
import { CASE_STUDY_CATEGORIES } from "../../features/caseStudies/caseStudiesApi";
import {
  categoryChanged,
  fetchCaseStudies,
  filtersCleared,
  queryChanged,
  sortChanged,
} from "../../features/caseStudies/caseStudiesSlice";
import {
  selectCaseStudiesError,
  selectCaseStudiesStatus,
  selectCategoryCounts,
  selectCategoryFilter,
  selectQueryFilter,
  selectSortOrder,
  selectVisibleCaseStudies,
  selectVisibleCount,
} from "../../features/caseStudies/caseStudiesSelectors";

const CaseStudies = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectCaseStudiesStatus);
  const error = useSelector(selectCaseStudiesError);
  const category = useSelector(selectCategoryFilter);
  const query = useSelector(selectQueryFilter);
  const sort = useSelector(selectSortOrder);
  const categoryCounts = useSelector(selectCategoryCounts);
  const visibleCaseStudies = useSelector(selectVisibleCaseStudies);
  const visibleCount = useSelector(selectVisibleCount);

  useEffect(() => {
    const promise = dispatch(fetchCaseStudies());
    // Cancel the in-flight request if the section unmounts before it settles.
    return () => promise.abort();
  }, [dispatch]);

  const handleRetry = useCallback(() => {
    dispatch(fetchCaseStudies());
  }, [dispatch]);

  const handleQueryChange = useCallback(
    (nextQuery) => dispatch(queryChanged(nextQuery)),
    [dispatch]
  );

  const isLoading = status === "loading" || status === "idle";
  const hasResults = visibleCount > 0;

  return (
    // The existing Explore section already owns `case-study`, so this one gets
    // its own anchor to keep ids unique.
    <section id="case-studies-board" className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center text-white">
          <span className="rounded-full border border-[#3F5EFB]/50 bg-[#3F5EFB]/10 px-5 py-2 text-xs font-semibold tracking-[0.2em]">
            CASE STUDIES
          </span>
          <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">
            Work We Have{" "}
            <span className="bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] bg-clip-text text-transparent">
              Shipped
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400">
            Products delivered across web, mobile, AI, and blockchain — filter by what
            you are building.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <FilterChips
            options={CASE_STUDY_CATEGORIES}
            activeOption={category}
            counts={categoryCounts}
            onSelect={(nextCategory) => dispatch(categoryChanged(nextCategory))}
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <CaseStudySearch value={query} onChange={handleQueryChange} />
            <CaseStudySort
              value={sort}
              onChange={(nextSort) => dispatch(sortChanged(nextSort))}
            />
          </div>
        </div>

        {status === "succeeded" && (
          <p className="mt-6 text-sm text-gray-400" aria-live="polite">
            Showing {visibleCount} {visibleCount === 1 ? "case study" : "case studies"}
            {category !== "All" && ` in ${category}`}
            {query.trim() && ` matching "${query.trim()}"`}
          </p>
        )}

        <div className="mt-6">
          {isLoading && <CaseStudiesSkeleton />}

          {status === "failed" && (
            <CaseStudiesError message={error} onRetry={handleRetry} />
          )}

          {status === "succeeded" && !hasResults && (
            <CaseStudiesEmpty onClearFilters={() => dispatch(filtersCleared())} />
          )}

          {status === "succeeded" && hasResults && (
            <ul
              key={`${category}-${query}-${sort}`}
              className="grid list-none grid-cols-1 gap-6 duration-300 animate-in fade-in md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleCaseStudies.map((caseStudy) => (
                <li key={caseStudy.id} className="h-full">
                  <CaseStudyCard
                    title={caseStudy.title}
                    category={caseStudy.category}
                    summary={caseStudy.summary}
                    year={caseStudy.year}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
