import { createSlice } from "@reduxjs/toolkit";

const UtilSlice = createSlice({
  name: "utils",
  initialState: {
    isActive: false,
  },
  reducers: {
    toggleMenu(state) {
      state.isActive = !state.isActive;
    },
  },
});

const { toggleMenu } = UtilSlice.actions;
const UtilReducer = UtilSlice.reducer;

export { UtilReducer, toggleMenu };
