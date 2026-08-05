# React + Redux Toolkit + Tailwind — Frontend Challenge

## Overview

You are given a **React + Tailwind CSS landing page** starter.

**Time limit: 1.5 hours**

Upgrade this project with **Redux Toolkit**, solid **React** structure, and strong **Tailwind** UI — focused on one async state problem, plus one new section.

You will be evaluated on Redux architecture, async handling, derived data, edge cases, and responsive UI quality under time pressure.

**Design reference (Why Choose Us):**
```
https://github.com/accurasofthire/landingpage-frontend/blob/main/why_choose_us.png
```

### What this test evaluates
- Redux Toolkit (store, slices, thunks, selectors)
- Async state (`idle | loading | succeeded | failed`)
- React composition and reusable components
- Tailwind responsive layout and interaction states
- Empty / loading / error UX
- Clean code under a hard time limit

---

## Suggested order (read this first)

Finish in this order. A correct partial solution scores higher than unfinished work across every task.

| Order | Task | Target time |
|-------|------|-------------|
| Setup | Redux store + Provider | ~10 min |
| Problem 1 | Case Studies async board (core) | ~50–60 min |
| Problem 2 | Why Choose Us section | ~20–25 min |
| Problem 3 | Contact form validation | remaining time |
| Stretch | Only after Problems 1–2 are solid | if time left |

---

## Setup (required)

```bash
npm install @reduxjs/toolkit react-redux
```

Suggested structure:

```text
src/
  app/
    store.js
  features/
    caseStudies/
      caseStudiesSlice.js
      caseStudiesSelectors.js
      caseStudiesApi.js
    whyChooseUs/
      whyChooseUsSlice.js
  components/
    ...
```

Wire `<Provider store={store}>` in `src/index.js`.

---

## Problem 1 — Case Studies board (core challenge)

### Goal
Build a **filterable async Case Studies board** fully powered by Redux. Place it in a sensible spot on the landing page (e.g. after Services / Explore, before Contact).

### Mock API
Create `caseStudiesApi.js`:

```js
// Required behavior
fetchCaseStudies()
// - resolves after ~800ms
// - returns an array of case studies
// - rejects ~15% of the time with Error("Network failed")
```

Seed at least **8** items:

```js
{
  id: string,
  title: string,
  category: "Web" | "Mobile" | "AI" | "Blockchain",
  summary: string,
  year: number
}
```

### Slice shape
```js
{
  items: [],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: null | string,
  filters: {
    category: "All" | "Web" | "Mobile" | "AI" | "Blockchain",
    query: string
  }
}
```

### Required Redux work
- `fetchCaseStudies` via `createAsyncThunk`
- Use `rejectWithValue` for errors
- Fetch on mount
- Keep filters in Redux (not only local `useState`)

### Required selectors (separate file)
- `selectFilteredCaseStudies` — category + case-insensitive search on title/summary
- `selectVisibleCount` — number of items after filtering  
Do **not** store the filtered list as writable state; derive it with selectors.

### Required UI
- Loading skeleton (Tailwind `animate-pulse`), not only text
- Error state with **Retry** button
- Filter chips: All / Web / Mobile / AI / Blockchain
- Search input bound to Redux `filters.query`
- Active filter visually highlighted
- Empty state when nothing matches
- Responsive: 1 col mobile / 2 tablet / 3 desktop
- Light transition when filters change (opacity or fade)

---

## Problem 2 — Why Choose Us section

### Placement
Between **Services / Explore** and **About Us** (or nearest equivalent). Match the design reference.

### Data
Store features in a small `whyChooseUs` slice (or a constant imported into the slice as initial state). Do not hardcode the full card list only inside JSX without a data source.

```js
const features = [
  {
    id: "senior-engineers",
    title: "Senior Engineers",
    desc: "Top 5% vetted developers with real production experience"
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    desc: "Rapid execution with optimized workflows"
  },
  {
    id: "scalable-teams",
    title: "Scalable Teams",
    desc: "Easily scale teams based on project needs"
  },
  {
    id: "secure-by-design",
    title: "Secure by Design",
    desc: "Security-first architecture and implementation"
  }
];
```

### Requirements
- Responsive grid: **1 col mobile / 2 tablet / 4 desktop**
- Centered heading
- Reusable `FeatureCard` component
- Optional but valued: `activeFeatureId` in Redux + clear active styles on click

---

## Problem 3 — Contact form validation (if time remains)

Improve `ContactUs` (local state is acceptable here; Redux optional).

### Required
- Validate: Name, Email, Message (all required)
- Email format validation
- Inline errors under fields
- Block invalid submit
- Success message on valid submit (mock only — no real API)

### Nice to have
- Disable submit while invalid
- Brief loading state on submit
- Focus/hover polish

---

## Responsive & UI rules

### Breakpoints
- Mobile: `320px+`
- Tablet: `768px+`
- Desktop: `1024px+`

### Must pass
- No horizontal scrolling
- No overlapping elements
- Touch-friendly controls on mobile
- Readable type and spacing
- Desktop content constrained with `max-w-*`
- Prefer Tailwind utilities; avoid inline styles

---

## Code quality rules

### Required
- Functional components + hooks only
- Redux for Case Studies shared/async/filter state
- Meaningful names; small reusable components
- No duplicated filter-chip markup

### Avoid
- Class components
- Saving derived filtered lists back into the slice
- Fake Redux (dispatch once, then mirror everything in `useState`)
- Giant monolithic files
- Over-engineering Problem 3 while Problem 1 is incomplete

---

## Stretch (only after Problems 1–2)

Pick at most one if time remains:

- Abort in-flight fetch on remount/retry (`thunkAPI.signal`)
- Debounced search (300ms)
- Toast on fetch failure / contact success
- `createEntityAdapter` for case studies
- Unit test for `selectFilteredCaseStudies`

---

## Evaluation rubric

| Area | Weight | Look for |
|------|--------|----------|
| Redux architecture | 35% | slice shape, thunk, selectors, no derived-state duplication |
| Async + edge cases | 20% | loading / error / retry / empty |
| React structure | 15% | reusable components, readable folders |
| Tailwind + UX | 20% | responsive grids, skeletons, active states |
| Code quality | 10% | naming, minimal state, no over-engineering |

---

## Notes

- You may keep existing landing sections; do not rebuild the whole site.
- Match the existing visual language where possible.
- Mock APIs only — no backend.
- **Problem 1 quality matters more than finishing every task.**
