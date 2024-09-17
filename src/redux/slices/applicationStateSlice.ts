import { createSlice } from "@reduxjs/toolkit";
import { IApplicationState } from "../../core/model/entities";
import { languageInitialState, setLanguage } from "./languageSlice";

const initialState: IApplicationState = {
  core: {
    language: languageInitialState,
  },
};

export const applicationStateSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLanguage, (nextState, action) => {
      nextState.core.language = action.payload;
    });
  },
});

export default applicationStateSlice.reducer;
