const NETWORK_DELAY_MS = 800;
const FAILURE_RATE = 0.15;

const caseStudiesSeed = [
  {
    id: "cs-01",
    title: "Telehealth Booking Platform",
    category: "Web",
    summary:
      "A HIPAA-ready booking portal that cut appointment scheduling time by 62% for a multi-clinic provider.",
    year: 2024,
  },
  {
    id: "cs-02",
    title: "Field Service Mobile App",
    category: "Mobile",
    summary:
      "Offline-first React Native app that keeps 400+ technicians productive with zero connectivity.",
    year: 2023,
  },
  {
    id: "cs-03",
    title: "Document Engine",
    category: "AI",
    summary:
      "LLM pipeline that extracts structured data from contracts with 97% field-level accuracy.",
    year: 2024,
  },
  {
    id: "cs-04",
    title: "NFT Marketplace Rebuild",
    category: "Blockchain",
    summary:
      "Rebuilt minting and settlement flows, dropping gas costs per transaction by nearly half.",
    year: 2022,
  },
  {
    id: "cs-05",
    title: "Retail Analytics Dashboard",
    category: "Web",
    summary:
      "Real-time inventory and revenue dashboard serving 120 stores on a single streaming data layer.",
    year: 2023,
  },
  {
    id: "cs-06",
    title: "Fitness Coaching Companion",
    category: "Mobile",
    summary:
      "Cross-platform training app with adaptive plans that lifted 30-day retention to 48%.",
    year: 2025,
  },
  {
    id: "cs-07",
    title: "Fraud Scoring Service",
    category: "AI",
    summary:
      "Streaming risk model that flags suspicious payments in under 200ms at peak traffic.",
    year: 2025,
  },
  {
    id: "cs-08",
    title: "Supply Chain Ledger",
    category: "Blockchain",
    summary:
      "Permissioned ledger giving three logistics partners a shared, tamper-evident audit trail.",
    year: 2024,
  },
  {
    id: "cs-09",
    title: "Casino Game Portal",
    category: "Web",
    summary:
      "High-concurrency gaming portal built to stay responsive through 50k simultaneous sessions.",
    year: 2022,
  },
];

/**
 * Mock network call. Resolves after ~800ms with the seeded case studies and
 * rejects roughly 15% of the time so the UI has to handle real failure states.
 * Accepts an optional AbortSignal so in-flight requests can be cancelled.
 */
export function fetchCaseStudies({ signal } = {}) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new Error("Aborted"));
      return;
    }

    const timerId = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);

      if (Math.random() < FAILURE_RATE) {
        reject(new Error("Network failed"));
        return;
      }

      resolve(caseStudiesSeed);
    }, NETWORK_DELAY_MS);

    function onAbort() {
      clearTimeout(timerId);
      reject(new Error("Aborted"));
    }

    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

export const CASE_STUDY_CATEGORIES = ["All", "Web", "Mobile", "AI", "Blockchain"];
