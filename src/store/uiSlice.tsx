import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isVisibleLiveSearching: boolean;
}

const initialState: uiState = {
  isVisibleLiveSearching: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisibleLiveSearching = !state.isVisibleLiveSearching;
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
