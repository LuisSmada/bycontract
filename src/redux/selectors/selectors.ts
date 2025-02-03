import { createSelector } from "@reduxjs/toolkit";
import {
  IFileItem,
  IFolderItem,
  IGlobalState,
} from "../../core/model/entities";
import { idFolder3 } from "../slices/entitiesSlices/folderSlice";

export const getLanguage = (state: IGlobalState): string => {
  return state.appliState.core.language;
};

export const getCurrentUser = (state: IGlobalState): string => {
  return state.appliState.core.currentUser;
};

//Recover the path in the navigator
export const getCurrentPathSelector = (state: IGlobalState): string => {
  return state.appliState.core.currentPath;
};

export const getParentIdByCurrentPathSelector = (
  state: IGlobalState
): string => {
  const currentPath = getCurrentPathSelector(state);
  const ids = currentPath.split("/");
  return ids[ids.length - 1];
};

export const getAllFolderList = (state: IGlobalState): IFolderItem[] => {
  const folders = state.entities.folders.byId;
  const folderList = Object.values(folders);
  return folderList;
};

//! This first is a memoised selector using a selector already created
//export getAllFolderListMemo = createSelector([getAllFolderList], (folderList) => folderList)

//! this is a memoised selector completely created without any selector alreay created
export const getAllFolderListMemo = createSelector(
  (state: IGlobalState) => state.entities.folders.byId,
  (folders) => Object.values(folders)
);

export const getAllFileList = (state: IGlobalState): IFileItem[] => {
  const files = state.entities.files.byId;
  const fileList = Object.values(files);
  return fileList;
};

export const getAllFileListMemo = createSelector(
  (state: IGlobalState) => state.entities.files.byId,
  (files) => Object.values(files)
);

export const getCurrentFolderPathSelector = (
  state: IGlobalState,
  id: string
): string => {
  const folder = state.entities.folders.byId[id];
  return folder ? folder.path : "";
};

export const getFolderIdByPathSelector = (
  state: IGlobalState,
  path: string
) => {
  const folderList = getAllFolderList(state);
  const folder = folderList.find((folder) => folder.path === path);
  return folder?.id ?? null;
};

export const getPathActiveTabSelector = (state: IGlobalState) => {
  const { path } = state.appliState.core.activeTab;
  return path;
};

const findPath = (
  id: string,
  byId: { [key: string]: IFolderItem }
): IFolderItem | null => {
  for (const folder of Object.values(byId)) {
    if (folder.children && folder.children[id]) {
      return folder;
    }

    if (folder.children) {
      const folderChildren: { [key: string]: IFolderItem } = {};

      for (const childId in folder.children) {
        const child = folder.children[childId];
        if (child.type === "folder") {
          folderChildren[childId] = child as IFolderItem;
        }
      }

      const foundParent = findPath(id, folderChildren);
      if (foundParent) return foundParent;
    }
  }

  return null;
};

export const getParentByIdSelector = (state: IGlobalState, id: string) => {
  const { folders } = state.entities;
  const byId = { ...folders.byId };

  const element = findPath(id, byId);

  if (!element) {
    return null;
  }

  return element;
};

export const getFolderById = (
  state: IGlobalState,
  folderId: string
): IFolderItem | null => {
  const folder = state.entities.folders.byId[folderId];
  return folder ?? null;
};

export const getFolderChildrenByFolderId = (
  state: IGlobalState,
  folderId: string | null
) => {
  if (folderId) {
    const folder = getFolderById(state, folderId);
    return folder?.children;
  }
  return null;
};
