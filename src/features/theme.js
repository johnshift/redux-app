import { createSlice } from "@reduxjs/toolkit";

const emptyState = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: emptyState },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
