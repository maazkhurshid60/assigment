import { createSlice } from "@reduxjs/toolkit";

export const features = [
  {
    id: "senior-engineers",
    title: "Senior Engineers",
    desc: "Top 5% vetted developers with real production experience",
    accent: "purple",
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    desc: "Rapid execution with optimized workflows",
    accent: "blue",
  },
  {
    id: "scalable-teams",
    title: "Scalable Teams",
    desc: "Easily scale teams based on project needs",
    accent: "teal",
  },
  {
    id: "secure-by-design",
    title: "Secure by Design",
    desc: "Security-first architecture and implementation",
    accent: "pink",
  },
];

const initialState = {
  features,
  activeFeatureId: null,
};

const whyChooseUsSlice = createSlice({
  name: "whyChooseUs",
  initialState,
  reducers: {
    // Clicking the active card again clears the selection.
    featureToggled(state, action) {
      state.activeFeatureId =
        state.activeFeatureId === action.payload ? null : action.payload;
    },
  },
});

export const { featureToggled } = whyChooseUsSlice.actions;

export const selectFeatures = (state) => state.whyChooseUs.features;
export const selectActiveFeatureId = (state) => state.whyChooseUs.activeFeatureId;

export default whyChooseUsSlice.reducer;
