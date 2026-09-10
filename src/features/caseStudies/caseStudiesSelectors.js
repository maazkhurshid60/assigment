import { createSelector } from "@reduxjs/toolkit";
import { CASE_STUDY_CATEGORIES } from "./caseStudiesApi";

export const selectCaseStudiesState = (state) => state.caseStudies;
export const selectAllCaseStudies = (state) => state.caseStudies.items;
export const selectCaseStudiesStatus = (state) => state.caseStudies.status;
export const selectCaseStudiesError = (state) => state.caseStudies.error;
export const selectCaseStudiesFilters = (state) => state.caseStudies.filters;
export const selectCategoryFilter = (state) => state.caseStudies.filters.category;
export const selectQueryFilter = (state) => state.caseStudies.filters.query;
export const selectSortOrder = (state) => state.caseStudies.sort;

const matchesQuery = (item, normalizedQuery) =>
  !normalizedQuery ||
  item.title.toLowerCase().includes(normalizedQuery) ||
  item.summary.toLowerCase().includes(normalizedQuery);

/**
 * Derived list: category match + case-insensitive search across title/summary.
 * The filtered result is never written back into the slice.
 */
export const selectFilteredCaseStudies = createSelector(
  [selectAllCaseStudies, selectCategoryFilter, selectQueryFilter],
  (items, category, query) => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        matchesQuery(item, normalizedQuery)
    );
  }
);

export const selectVisibleCount = createSelector(
  [selectFilteredCaseStudies],
  (filtered) => filtered.length
);

/**
 * The list actually rendered: filtered, then ordered. Sorting is kept separate
 * from `selectFilteredCaseStudies` so the filter logic stays easy to test.
 */
export const selectVisibleCaseStudies = createSelector(
  [selectFilteredCaseStudies, selectSortOrder],
  (filtered, sort) => {
    const ordered = [...filtered];

    switch (sort) {
      case "oldest":
        return ordered.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
      case "title":
        return ordered.sort((a, b) => a.title.localeCompare(b.title));
      case "newest":
      default:
        return ordered.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
    }
  }
);

/**
 * How many items each chip would show if it were selected. Respects the search
 * term but ignores the active category, so the counts stay useful while filtering.
 */
export const selectCategoryCounts = createSelector(
  [selectAllCaseStudies, selectQueryFilter],
  (items, query) => {
    const normalizedQuery = query.trim().toLowerCase();
    const matching = items.filter((item) => matchesQuery(item, normalizedQuery));

    return CASE_STUDY_CATEGORIES.reduce((counts, category) => {
      counts[category] =
        category === "All"
          ? matching.length
          : matching.filter((item) => item.category === category).length;
      return counts;
    }, {});
  }
);

export const selectHasActiveFilters = createSelector(
  [selectCategoryFilter, selectQueryFilter],
  (category, query) => category !== "All" || query.trim() !== ""
);
