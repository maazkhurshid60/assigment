import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "./app/store";

/**
 * Renders a component with a real (but fresh) Redux store, so tests exercise
 * the same wiring the app uses instead of a hand-rolled mock store.
 */
export function renderWithProviders(ui, { preloadedState, store = createStore(preloadedState), ...options } = {}) {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  return { store, ...render(ui, { wrapper: Wrapper, ...options }) };
}

export * from "@testing-library/react";
