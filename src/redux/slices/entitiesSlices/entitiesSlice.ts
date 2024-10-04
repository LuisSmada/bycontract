import { createSlice } from "@reduxjs/toolkit";
import { IEntities } from "../../../core/model/entities";
import { addFolder, addFolderInit, folderInitialState } from "./folderSlice";
import { fileInitialState } from "./fileSlice";

export const entitiesInitialState: IEntities = {
  folders: folderInitialState,
  files: fileInitialState,
};

export const entitiesSlice = createSlice({
  name: "entities",
  initialState: entitiesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addFolderInit, (nextState, action) => {
      const newId = action.payload.id;
      nextState.folders.byId[newId] = action.payload;
    });
  },
});

export default entitiesSlice.reducer;
