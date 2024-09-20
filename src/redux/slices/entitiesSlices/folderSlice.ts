import moment from "moment";
import { IFolder } from "../../../core/model/entities";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const folderInitialState: IFolder = {
  byId: {
    "0": {
      id: "0",
      type: "folder",
      name: "First folder",
      path: "/",
      size: 10,
      date: moment().format("DD-MM-YYYY"),
      creatorName: "Adams AYO",
      parentPath: null,
      parentID: null,
    },
    "1": {
      id: "1",
      type: "folder",
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

console.log(folderInitialState);

export const folderSlice = createSlice({
  name: "folders",
  initialState: folderInitialState,
  reducers: {
    // addFolder: {
    //     reducer: (state, action: PayloadAction<IFolder>) => {
    //         state.push(action.payload)
    //     },
    //      prepare: (props: Partial<IFolder>) => {
    //         const date = moment.locale;
    //         const id = 2;
    //         return { payload: {...props, date, id}}
    //      }
    // },
    addFolder: () => {},
    deleteFolder: () => {},
  },
});

export const { addFolder, deleteFolder } = folderSlice.actions;
export default folderSlice.reducer;
