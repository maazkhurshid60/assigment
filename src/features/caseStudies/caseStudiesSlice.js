import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCaseStudies as fetchCaseStudiesApi } from "./caseStudiesApi";

export const fetchCaseStudies = createAsyncThunk(
  "caseStudies/fetchCaseStudies",
  async (_arg, { rejectWithValue, signal }) => {
    try {
      // Passing the thunk signal lets a remount/retry abort the in-flight call.
      return await fetchCaseStudiesApi({ signal });
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const SORT_OPTIONS = {
  newest: "Newest first",
  oldest: "Oldest first",
  title: "A - Z",
};

const initialState = {
  items: [],
  status: "idle",
  error: null,
  filters: {
    category: "All",
    query: "",
  },
  // Kept outside `filters` so the shape the brief asks for stays exact.
  sort: "newest",
};

const caseStudiesSlice = createSlice({
  name: "caseStudies",
  initialState,
  reducers: {
    categoryChanged(state, action) {
      state.filters.category = action.payload;
    },
    queryChanged(state, action) {
      state.filters.query = action.payload;
    },
    sortChanged(state, action) {
      state.sort = action.payload;
    },
    filtersCleared(state) {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaseStudies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCaseStudies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCaseStudies.rejected, (state, action) => {
        // An aborted request is a cancellation, not a failure the user should see.
        if (action.meta.aborted) return;
        state.status = "failed";
        state.error = action.payload || action.error.message || "Network failed";
      });
  },
});

export const { categoryChanged, queryChanged, sortChanged, filtersCleared } =
  caseStudiesSlice.actions;

export default caseStudiesSlice.reducer;
