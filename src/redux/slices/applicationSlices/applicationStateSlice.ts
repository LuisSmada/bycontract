import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IApplicationState } from "../../../core/model/entities";
import { languageInitialState, setLanguage } from "./languageSlice";
import { dashboardTabsList } from "../../../components/ui/panels/homePage/Dashboard";
import { IDashboardTabsListType } from "../../../types/DashboardTypes";

const initialState: IApplicationState = {
  core: {
    currentUser: "",
    language: languageInitialState,
    activeTab: {
      path: "/dashboard/tab:mywall",
      title: "#MyWall",
    },
    currentPath: "/",
  },
};

export const applicationStateSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      state.core.currentUser = action.payload;
    },
    setActiveTabStore: (
      state,
      action: PayloadAction<IDashboardTabsListType>
    ) => {
      state.core.activeTab = action.payload;
    },
    setCurrentPath: (state, action: PayloadAction<string>) => {
      state.core.currentPath = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLanguage, (nextState, action) => {
      nextState.core.language = action.payload;
    });
  },
});

export const { setCurrentUser, setActiveTabStore, setCurrentPath } =
  applicationStateSlice.actions;
export default applicationStateSlice.reducer;
