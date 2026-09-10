import React from "react";
import userEvent from "@testing-library/user-event";
import { fireEvent, renderWithProviders, screen, waitFor } from "../../test-utils";
import CaseStudies from "./CaseStudies";
import { fetchCaseStudies } from "../../features/caseStudies/caseStudiesApi";

jest.mock("../../features/caseStudies/caseStudiesApi", () => ({
  ...jest.requireActual("../../features/caseStudies/caseStudiesApi"),
  fetchCaseStudies: jest.fn(),
}));

const items = [
  {
    id: "1",
    title: "Telehealth Portal",
    category: "Web",
    summary: "Booking for clinics",
    year: 2024,
  },
  {
    id: "2",
    title: "Field Service App",
    category: "Mobile",
    summary: "Offline first tooling",
    year: 2023,
  },
  {
    id: "3",
    title: "Fraud Scoring",
    category: "AI",
    summary: "Flags suspicious payments",
    year: 2025,
  },
];

const findAllCards = () => screen.findAllByRole("heading", { level: 3 });

beforeEach(() => {
  jest.clearAllMocks();
});

test("shows a skeleton while loading, then renders the case studies", async () => {
  fetchCaseStudies.mockResolvedValueOnce(items);
  const { container } = renderWithProviders(<CaseStudies />);

  expect(container.querySelectorAll(".animate-pulse").length).toBeGreaterThan(0);

  expect(await screen.findByText("Telehealth Portal")).toBeInTheDocument();
  expect(container.querySelectorAll(".animate-pulse")).toHaveLength(0);
  expect(await findAllCards()).toHaveLength(3);
  expect(screen.getByText(/showing 3 case studies/i)).toBeInTheDocument();
});

test("orders newest first by default and re-orders on sort change", async () => {
  fetchCaseStudies.mockResolvedValueOnce(items);
  renderWithProviders(<CaseStudies />);

  const initial = await findAllCards();
  expect(initial.map((node) => node.textContent)).toEqual([
    "Fraud Scoring",
    "Telehealth Portal",
    "Field Service App",
  ]);

  fireEvent.change(screen.getByLabelText(/sort/i), { target: { value: "oldest" } });

  await waitFor(async () => {
    const sorted = await findAllCards();
    expect(sorted.map((node) => node.textContent)).toEqual([
      "Field Service App",
      "Telehealth Portal",
      "Fraud Scoring",
    ]);
  });
});

test("filters by category chip and highlights the active chip", async () => {
  fetchCaseStudies.mockResolvedValueOnce(items);
  renderWithProviders(<CaseStudies />);
  await screen.findByText("Telehealth Portal");

  const mobileChip = screen.getByRole("button", { name: /^Mobile/ });
  userEvent.click(mobileChip);

  await waitFor(() => {
    expect(screen.queryByText("Telehealth Portal")).not.toBeInTheDocument();
  });
  expect(screen.getByText("Field Service App")).toBeInTheDocument();
  expect(mobileChip).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("button", { name: /^All/ })).toHaveAttribute(
    "aria-pressed",
    "false"
  );
});

test("search matches title and summary, and shows an empty state with a reset", async () => {
  fetchCaseStudies.mockResolvedValueOnce(items);
  renderWithProviders(<CaseStudies />);
  await screen.findByText("Telehealth Portal");

  const search = screen.getByLabelText(/search case studies/i);

  // Case-insensitive match against the summary text.
  fireEvent.change(search, { target: { value: "OFFLINE" } });
  expect(await screen.findByText("Field Service App")).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.queryByText("Telehealth Portal")).not.toBeInTheDocument();
  });

  fireEvent.change(search, { target: { value: "nothing-matches-this" } });
  expect(await screen.findByText(/no case studies match your filters/i)).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: /clear filters/i }));
  expect(await screen.findByText("Telehealth Portal")).toBeInTheDocument();
  // The input mirrors the store, so the reset lands once the debounce settles.
  await waitFor(() => expect(search).toHaveValue(""));
});

test("renders an error state with a working retry", async () => {
  fetchCaseStudies
    .mockRejectedValueOnce(new Error("Network failed"))
    .mockResolvedValueOnce(items);

  renderWithProviders(<CaseStudies />);

  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent("Network failed");

  userEvent.click(screen.getByRole("button", { name: /retry/i }));

  expect(await screen.findByText("Telehealth Portal")).toBeInTheDocument();
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});

test("aborts the in-flight request when the section unmounts", async () => {
  let capturedSignal;
  fetchCaseStudies.mockImplementationOnce(
    ({ signal }) =>
      new Promise((resolve) => {
        capturedSignal = signal;
        signal.addEventListener("abort", () => resolve([]), { once: true });
      })
  );

  const { unmount } = renderWithProviders(<CaseStudies />);
  await waitFor(() => expect(capturedSignal).toBeDefined());
  expect(capturedSignal.aborted).toBe(false);

  unmount();
  expect(capturedSignal.aborted).toBe(true);
});
