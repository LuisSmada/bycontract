import { configureStore } from "@reduxjs/toolkit";
import applicationStateReducer from "../slices/applicationStateSlice";

export const store = configureStore({
  reducer: {
    appliState: applicationStateReducer,
  },
});

export type TByContractStore = ReturnType<typeof store.getState>;
export type StoreTypeDispatch = typeof store.dispatch;
