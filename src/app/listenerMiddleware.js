import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { fetchCaseStudies } from "../features/caseStudies/caseStudiesSlice";
import { toastShown } from "../features/toasts/toastsSlice";

export const listenerMiddleware = createListenerMiddleware();

// Side effects live here instead of inside components, so the board stays a
// pure view of Redux state and the toast never fires twice on a re-render.
listenerMiddleware.startListening({
  matcher: isAnyOf(fetchCaseStudies.rejected),
  effect: (action, listenerApi) => {
    // A cancelled request is not a failure worth announcing.
    if (action.meta.aborted) return;

    listenerApi.dispatch(
      toastShown({
        message: action.payload || "We could not load the case studies.",
        tone: "error",
      })
    );
  },
});

export default listenerMiddleware;
