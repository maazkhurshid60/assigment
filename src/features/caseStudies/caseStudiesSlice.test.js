import reducer, {
  categoryChanged,
  fetchCaseStudies,
  filtersCleared,
  queryChanged,
  sortChanged,
} from "./caseStudiesSlice";
import { fetchCaseStudies as fetchCaseStudiesApi } from "./caseStudiesApi";
import { createStore } from "../../app/store";

jest.mock("./caseStudiesApi", () => ({
  ...jest.requireActual("./caseStudiesApi"),
  fetchCaseStudies: jest.fn(),
}));

const initialState = reducer(undefined, { type: "@@INIT" });

describe("caseStudies reducer", () => {
  test("starts idle with empty filters", () => {
    expect(initialState).toEqual({
      items: [],
      status: "idle",
      error: null,
      filters: { category: "All", query: "" },
      sort: "newest",
    });
  });

  test("stores filter and sort changes", () => {
    let state = reducer(initialState, categoryChanged("AI"));
    state = reducer(state, queryChanged("ledger"));
    state = reducer(state, sortChanged("oldest"));

    expect(state.filters).toEqual({ category: "AI", query: "ledger" });
    expect(state.sort).toBe("oldest");
  });

  test("filtersCleared resets filters but keeps sort and items", () => {
    const dirty = {
      ...initialState,
      items: [{ id: "1" }],
      sort: "title",
      filters: { category: "Web", query: "portal" },
    };

    const state = reducer(dirty, filtersCleared());

    expect(state.filters).toEqual({ category: "All", query: "" });
    expect(state.sort).toBe("title");
    expect(state.items).toHaveLength(1);
  });

  test("pending clears a previous error", () => {
    const failed = { ...initialState, status: "failed", error: "Network failed" };
    const state = reducer(failed, { type: fetchCaseStudies.pending.type });

    expect(state.status).toBe("loading");
    expect(state.error).toBeNull();
  });

  test("fulfilled stores the payload", () => {
    const payload = [{ id: "1", title: "One", category: "Web", summary: "", year: 2024 }];
    const state = reducer(initialState, {
      type: fetchCaseStudies.fulfilled.type,
      payload,
    });

    expect(state.status).toBe("succeeded");
    expect(state.items).toEqual(payload);
  });

  test("rejected stores the rejectWithValue message", () => {
    const state = reducer(initialState, {
      type: fetchCaseStudies.rejected.type,
      payload: "Network failed",
      error: { message: "Rejected" },
      meta: { aborted: false },
    });

    expect(state.status).toBe("failed");
    expect(state.error).toBe("Network failed");
  });

  test("an aborted request leaves the state untouched", () => {
    const loading = { ...initialState, status: "loading" };
    const state = reducer(loading, {
      type: fetchCaseStudies.rejected.type,
      error: { message: "Aborted" },
      meta: { aborted: true },
    });

    expect(state).toEqual(loading);
  });
});

describe("fetchCaseStudies thunk", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("moves the store to succeeded on a resolved request", async () => {
    const items = [{ id: "1", title: "One", category: "Web", summary: "", year: 2024 }];
    fetchCaseStudiesApi.mockResolvedValueOnce(items);

    const store = createStore();
    await store.dispatch(fetchCaseStudies());

    expect(store.getState().caseStudies).toMatchObject({
      status: "succeeded",
      items,
      error: null,
    });
  });

  test("moves the store to failed and raises a toast on rejection", async () => {
    fetchCaseStudiesApi.mockRejectedValueOnce(new Error("Network failed"));

    const store = createStore();
    await store.dispatch(fetchCaseStudies());

    expect(store.getState().caseStudies).toMatchObject({
      status: "failed",
      error: "Network failed",
    });
    expect(store.getState().toasts.items).toHaveLength(1);
    expect(store.getState().toasts.items[0]).toMatchObject({
      message: "Network failed",
      tone: "error",
    });
  });
});
