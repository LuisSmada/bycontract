import moment from "moment";
import { IFile } from "../../../core/model/entities";
import { createSlice } from "@reduxjs/toolkit";
import { momentDateFormat, uniqueId } from "../../../utils/generics";

const idFile1 = uniqueId();

export const fileInitialState: IFile = {
  byId: {
    [idFile1]: {
      id: idFile1,
      type: "file",
      name: "First file",
      path: "/",
      size: 10,
      date: moment().format(momentDateFormat),
      creatorName: "Adams AYO",
      parentPath: null,
      parentID: null,
    },
  },
  allFileIds: [idFile1],
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
