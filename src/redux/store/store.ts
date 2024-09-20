import { configureStore } from "@reduxjs/toolkit";
import applicationStateReducer from "../slices/applicationSlices/applicationStateSlice";
import entitiesReducer from "../slices/entitiesSlices/entitiesSlice";

export const store = configureStore({
  reducer: {
    appliState: applicationStateReducer,
    entities: entitiesReducer,
  },
});

export type TByContractStore = ReturnType<typeof store.getState>;
export type StoreTypeDispatch = typeof store.dispatch;
