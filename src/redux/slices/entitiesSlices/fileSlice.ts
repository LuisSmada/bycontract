import moment from "moment";
import { IFile } from "../../../core/model/entities";
import { createSlice } from "@reduxjs/toolkit";

export const fileInitialState: IFile = {
  byId: {
    "0": {
      id: "0",
      type: "file",
      name: "First folder",
      path: "/",
      size: 10,
      date: moment().format("DD-MM-YYYY"),
      creatorName: "Adams AYO",
      parentPath: null,
      parentID: null,
    },
  },
};

export const fileSlice = createSlice({
  name: "files",
  initialState: fileInitialState,
  reducers: {
    addFile: () => {},
    deleteFile: () => {},
  },
});

export const { addFile, deleteFile } = fileSlice.actions;
export default fileSlice.reducer;
