import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export const languageInitialState: string = "en";

export const languageSlice = createSlice({
  name: "language",
  initialState: languageInitialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
