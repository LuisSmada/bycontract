import { createSlice } from "@reduxjs/toolkit";
import { IEntities } from "../../../core/model/entities";
import {
  addFolderInit,
  folderInitialState,
  updateParentFolder,
} from "./folderSlice";
import { addFileInit, fileInitialState } from "./fileSlice";

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
      nextState.folders.allFolderIds.push(newId);
    }),
      builder.addCase(addFileInit, (nextState, action) => {
        const newId = action.payload.id;
        nextState.files.byId[newId] = action.payload;
        nextState.files.allFileIds.push(newId);
      }),
      builder.addCase(updateParentFolder, (nextState, action) => {
        const idFolder = action.payload.id;
        nextState.folders.byId[idFolder] = action.payload;
      });
  },
});

export default entitiesSlice.reducer;
