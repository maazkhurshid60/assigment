import {
  selectCategoryCounts,
  selectFilteredCaseStudies,
  selectHasActiveFilters,
  selectVisibleCaseStudies,
  selectVisibleCount,
} from "./caseStudiesSelectors";

const items = [
  { id: "1", title: "Telehealth Portal", category: "Web", summary: "Booking for clinics", year: 2024 },
  { id: "2", title: "Field Service App", category: "Mobile", summary: "Offline first tooling", year: 2023 },
  { id: "3", title: "Fraud Scoring", category: "AI", summary: "Flags suspicious payments", year: 2025 },
  { id: "4", title: "Analytics Board", category: "Web", summary: "Realtime revenue view", year: 2022 },
];

const makeState = (category = "All", query = "", sort = "newest") => ({
  caseStudies: {
    items,
    status: "succeeded",
    error: null,
    filters: { category, query },
    sort,
  },
});

describe("selectFilteredCaseStudies", () => {
  test("returns every item when no filters are applied", () => {
    expect(selectFilteredCaseStudies(makeState())).toHaveLength(4);
  });

  test("filters by category", () => {
    expect(selectFilteredCaseStudies(makeState("Mobile")).map((i) => i.id)).toEqual(["2"]);
  });

  test("searches title and summary case-insensitively", () => {
    expect(selectFilteredCaseStudies(makeState("All", "TELEHEALTH"))).toHaveLength(1);
    expect(selectFilteredCaseStudies(makeState("All", "suspicious"))).toHaveLength(1);
  });

  test("ignores a whitespace-only query", () => {
    expect(selectFilteredCaseStudies(makeState("All", "   "))).toHaveLength(4);
  });

  test("combines category and query", () => {
    expect(selectFilteredCaseStudies(makeState("Web", "field"))).toHaveLength(0);
    expect(selectFilteredCaseStudies(makeState("Web", "clinics"))).toHaveLength(1);
  });

  test("returns an empty array when nothing matches", () => {
    expect(selectFilteredCaseStudies(makeState("All", "no-such-thing"))).toEqual([]);
  });
});

describe("selectVisibleCount", () => {
  test("counts the filtered items", () => {
    expect(selectVisibleCount(makeState("AI"))).toBe(1);
    expect(selectVisibleCount(makeState("All", "nothing-matches"))).toBe(0);
  });
});

describe("selectVisibleCaseStudies", () => {
  test("sorts newest first by default", () => {
    expect(selectVisibleCaseStudies(makeState()).map((i) => i.year)).toEqual([
      2025, 2024, 2023, 2022,
    ]);
  });

  test("sorts oldest first", () => {
    expect(
      selectVisibleCaseStudies(makeState("All", "", "oldest")).map((i) => i.year)
    ).toEqual([2022, 2023, 2024, 2025]);
  });

  test("sorts alphabetically by title", () => {
    expect(
      selectVisibleCaseStudies(makeState("All", "", "title")).map((i) => i.title)
    ).toEqual(["Analytics Board", "Field Service App", "Fraud Scoring", "Telehealth Portal"]);
  });

  test("does not mutate the source list", () => {
    const state = makeState("All", "", "oldest");
    selectVisibleCaseStudies(state);
    expect(state.caseStudies.items.map((i) => i.id)).toEqual(["1", "2", "3", "4"]);
  });
});

describe("selectCategoryCounts", () => {
  test("counts every category plus an All total", () => {
    expect(selectCategoryCounts(makeState())).toEqual({
      All: 4,
      Web: 2,
      Mobile: 1,
      AI: 1,
      Blockchain: 0,
    });
  });

  test("respects the query but ignores the selected category", () => {
    expect(selectCategoryCounts(makeState("Mobile", "clinics"))).toEqual({
      All: 1,
      Web: 1,
      Mobile: 0,
      AI: 0,
      Blockchain: 0,
    });
  });
});

describe("selectHasActiveFilters", () => {
  test("is false only when the defaults are in place", () => {
    expect(selectHasActiveFilters(makeState())).toBe(false);
    expect(selectHasActiveFilters(makeState("Web"))).toBe(true);
    expect(selectHasActiveFilters(makeState("All", "portal"))).toBe(true);
  });
});
