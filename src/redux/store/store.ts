import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type TByContractStore = ReturnType<typeof store.getState>;
export type StoreTypeDispatch = typeof store.dispatch;
