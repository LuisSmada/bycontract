import moment from "moment";
import { IFolder, IFolderItem } from "../../../core/model/entities";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { momentDateFormat, uniqueId } from "../../../utils/generics";
import { StoreTypeDispatch, TByContractStore } from "../../store/store";
import {
  getCurrentUser,
  getFolderIdByPathSelector,
  getParentPathByIdSelector,
  getPathActiveTabSelector,
} from "../../selectors/selectors";

const idFolder1 = uniqueId();
const idFolder2 = uniqueId();
const idFolder3 = uniqueId();
const idFile1 = uniqueId();

export const folderInitialState: IFolder = {
  byId: {
    [idFolder1]: {
      id: idFolder1,
      type: "folder",
      name: "First folder",
      path: "/First folder",
      size: 10,
      date: moment().format(momentDateFormat),
      creatorName: "Adams AYO",
      parentPath: "/",
      parentID: null,
      children: [
        {
          id: idFolder3,
          type: "folder",
          name: "First child folder",
          path: "/First child folder",
          size: 10,
          date: moment().format(momentDateFormat),
          creatorName: "Adams AYO",
          parentPath: "/",
          parentID: idFolder1,
        },
        {
          id: idFile1,
          type: "file",
          name: "First child file",
          path: "/First child file",
          size: 10,
          date: moment().format(momentDateFormat),
          creatorName: "Adams AYO",
          parentPath: "/",
          parentID: idFolder1,
        },
      ],
    },
    [idFolder2]: {
      id: idFolder2,
      type: "folder",
      name: "Second folder",
      path: "/Second folder",
      size: 10,
      date: moment().format(momentDateFormat),
      creatorName: "Adams AYO",
      parentPath: "/",
      parentID: null,
      children: [],
    },
  },
  allFolderIds: [idFolder1, idFolder2],
};

export const folderSlice = createSlice({
  name: "folders",
  initialState: folderInitialState,
  reducers: {
    addFolderInit: {
      reducer: (state, action: PayloadAction<IFolderItem>) => {
        const newFolder = action.payload;
        state.byId[newFolder.id] = newFolder;
        state.allFolderIds.push(newFolder.id);
      },
      prepare: (folderData: IFolderItem) => {
        return {
          payload: {
            ...folderData,
          },
        };
      },
    },
    deleteFolder: (state, action: PayloadAction<string>) => {
      const folderId = action.payload;
      delete state.byId[folderId];
    },
  },
});

export const addFolder = (
  folderData: Omit<
    IFolderItem,
    | "id"
    | "date"
    | "type"
    | "creatorName"
    | "children"
    | "parentID"
    | "parentPath"
    | "path"
  >
) => {
  return (dispatch: StoreTypeDispatch, getState: () => TByContractStore) => {
    const newId = uniqueId();
    const user = getCurrentUser(getState());
    const activeTab = getPathActiveTabSelector(getState());
    const parentPath =
      activeTab === "/dashboard/tab:mydocuments"
        ? "/"
        : getParentPathByIdSelector(getState(), newId);
    const parentID =
      parentPath === "/"
        ? null
        : getFolderIdByPathSelector(getState(), parentPath);
    const path =
      parentPath === "/"
        ? `${parentPath}${folderData.name}`
        : `${parentPath}/${folderData.name}`;
    const formattedDate = moment().format(momentDateFormat);
    const folderType: "folder" = "folder";
    dispatch(
      folderSlice.actions.addFolderInit({
        ...folderData,
        id: newId,
        creatorName: user,
        parentPath,
        parentID,
        path,
        date: formattedDate,
        type: folderType,
        children: [],
      })
    );
  };
};

export const { addFolderInit, deleteFolder } = folderSlice.actions;
export default folderSlice.reducer;
