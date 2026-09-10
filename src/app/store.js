import { configureStore } from "@reduxjs/toolkit";
import caseStudiesReducer from "../features/caseStudies/caseStudiesSlice";
import whyChooseUsReducer from "../features/whyChooseUs/whyChooseUsSlice";
import toastsReducer from "../features/toasts/toastsSlice";
import { listenerMiddleware } from "./listenerMiddleware";

export const rootReducer = {
  caseStudies: caseStudiesReducer,
  whyChooseUs: whyChooseUsReducer,
  toasts: toastsReducer,
};

export const createStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  });

export const store = createStore();

export default store;
