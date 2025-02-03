import moment from "moment";
import { IFile, IFileItem, IFolderItem } from "../../../core/model/entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { momentDateFormat, uniqueId } from "../../../utils/generics";
import type { StoreTypeDispatch, TByContractStore } from "../../store/store";
import {
  getCurrentPathSelector,
  getCurrentUser,
  getFolderById,
  getParentByIdSelector,
  getParentIdByCurrentPathSelector,
  getPathActiveTabSelector,
} from "../../selectors/selectors";
import { folderSlice } from "./folderSlice";

const idFile1 = uniqueId();

export const fileInitialState: IFile = {
  byId: {
    [idFile1]: {
      id: idFile1,
      type: "file",
      name: "First file",
      path: `${idFile1}`,
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
    addFileInit: {
      reducer: (state, action: PayloadAction<IFileItem>) => {
        const newFile = action.payload;
        state.byId[newFile.id] = newFile;
        state.allFileIds.push(newFile.id);
      },
      prepare: (fileData: IFileItem) => {
        return {
          payload: {
            ...fileData,
          },
        };
      },
    },
    deleteFile: (state, action: PayloadAction<string>) => {
      const fileId = action.payload;
      delete state.byId[fileId];
    },
  },
});

export const addFile = (
  fileData: Omit<
    IFileItem,
    "id" | "date" | "type" | "creatorName" | "parentID" | "parentPath" | "path"
  >
) => {
  return (dispatch: StoreTypeDispatch, getState: () => TByContractStore) => {
    const newId = uniqueId();
    const user = getCurrentUser(getState());
    const activeTab = getPathActiveTabSelector(getState());
    const currentPath = getCurrentPathSelector(getState());
    const parentPath =
      currentPath === "/dashboard/tab:mydocuments" ? "/" : currentPath;
    const parentID =
      currentPath === "/" ? null : getParentIdByCurrentPathSelector(getState());
    const path =
      parentPath === "/" ? `${parentPath}${newId}` : `${parentPath}/${newId}`;
    const formattedDate = moment().format(momentDateFormat);

    const currentFile: IFileItem = Object.assign({
      ...fileData,
      id: newId,
      creatorName: user,
      parentPath,
      parentID,
      path,
      date: formattedDate,
      type: "file",
    });
    if (parentID) {
      const parentFolder = getFolderById(getState(), parentID);

      if (parentFolder) {
        const updatedParentFolder = {
          ...parentFolder,
          children: {
            ...parentFolder.children,
            [currentFile.id]: currentFile,
          },
        };
        dispatch(folderSlice.actions.updateParentFolder(updatedParentFolder));
      }
    }
    dispatch(fileSlice.actions.addFileInit(currentFile));
  };
};

export const { addFileInit, deleteFile } = fileSlice.actions;
export default fileSlice.reducer;
