import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    toastShown: {
      reducer(state, action) {
        // Keep the stack small so a flurry of failures cannot bury the page.
        state.items = [...state.items, action.payload].slice(-3);
      },
      prepare({ message, tone = "info" }) {
        return { payload: { id: nanoid(), message, tone } };
      },
    },
    toastDismissed(state, action) {
      state.items = state.items.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { toastShown, toastDismissed } = toastsSlice.actions;

export const selectToasts = (state) => state.toasts.items;

export default toastsSlice.reducer;
