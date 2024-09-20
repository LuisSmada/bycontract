import { createSlice } from "@reduxjs/toolkit";
import { IEntities } from "../../../core/model/entities";
import { folderInitialState } from "./folderSlice";
import { fileInitialState } from "./fileSlice";

export const entitiesInitialState: IEntities = {
  folders: folderInitialState,
  files: fileInitialState,
};

export const entitiesSlice = createSlice({
  name: "entities",
  initialState: entitiesInitialState,
  reducers: {},
});

export default entitiesSlice.reducer;
