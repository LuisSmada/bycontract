import moment from "moment";
import { IFolder, IFolderItem } from "../../../core/model/entities";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { momentDateFormat, uniqueId } from "../../../utils/generics";
import { StoreTypeDispatch, TByContractStore } from "../../store/store";
import {
  getCurrentPathSelector,
  getCurrentUser,
  getFolderById,
  getParentByIdSelector,
  getParentIdByCurrentPathSelector,
  getPathActiveTabSelector,
} from "../../selectors/selectors";

const idFolder1 = uniqueId();
const idFolder2 = uniqueId();
export const idFolder3 = uniqueId();
const idFile1 = uniqueId();

export const folderInitialState: IFolder = {
  byId: {
    [idFolder1]: {
      id: idFolder1,
      type: "folder",
      name: "First folder",
      path: `${idFolder1}`,
      size: 10,
      date: moment().format(momentDateFormat),
      creatorName: "Adams AYO",
      parentPath: "/",
      parentID: null,
      children: {
        [idFolder3]: {
          id: idFolder3,
          type: "folder",
          name: "First child folder",
          path: `${idFolder3}`,
          size: 10,
          date: moment().format(momentDateFormat),
          creatorName: "Adams AYO",
          parentPath: "/",
          parentID: idFolder1,
          children: null,
        },
        [idFile1]: {
          id: idFile1,
          type: "file",
          name: "First child file",
          path: `${idFile1}`,
          size: 10,
          date: moment().format(momentDateFormat),
          creatorName: "Adams AYO",
          parentPath: "/",
          parentID: idFolder1,
        },
      },
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
      children: null,
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
    updateParentFolder: {
      reducer: (state, action: PayloadAction<IFolderItem>) => {
        const updatedFolder = action.payload;
        state.byId[updatedFolder.id] = updatedFolder;
      },
      prepare: (updatedFolder: IFolderItem) => {
        return {
          payload: updatedFolder,
        };
      },
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
    const currentPath = getCurrentPathSelector(getState());
    const parentPath =
      currentPath === "/dashboard/tab:mydocuments" ? "/" : currentPath;
    const parentID =
      currentPath === "/" ? null : getParentIdByCurrentPathSelector(getState());
    const path =
      parentPath === "/" ? `${parentPath}${newId}` : `${parentPath}/${newId}`;
    const formattedDate = moment().format(momentDateFormat);
    const folderType: "folder" = "folder";

    console.log("parentID", parentID);
    console.log("currentPath ", currentPath);

    const currentFolder: IFolderItem = Object.assign({
      ...folderData,
      id: newId,
      creatorName: user,
      parentPath,
      parentID,
      path,
      date: formattedDate,
      type: folderType,
      children: null,
    });
    if (parentID) {
      const parentFolder = getFolderById(getState(), parentID);

      if (parentFolder) {
        const updatedParentFolder = {
          ...parentFolder,
          children: {
            ...parentFolder.children,
            [currentFolder.id]: currentFolder,
          },
        };
        dispatch(folderSlice.actions.updateParentFolder(updatedParentFolder));
      }
    }
    dispatch(folderSlice.actions.addFolderInit(currentFolder));
  };
};

export const { addFolderInit, deleteFolder, updateParentFolder } =
  folderSlice.actions;
export default folderSlice.reducer;
