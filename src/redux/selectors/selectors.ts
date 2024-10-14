import {
  IFileItem,
  IFolderItem,
  IGlobalState,
} from "../../core/model/entities";

export const getLanguage = (state: IGlobalState): string => {
  return state.appliState.core.language;
};

export const getCurrentUser = (state: IGlobalState): string => {
  return state.appliState.core.currentUser;
};

export const getAllFolderList = (state: IGlobalState): IFolderItem[] => {
  const folders = state.entities.folders.byId;
  const folderList = Object.values(folders);
  return folderList;
};

export const getAllFileList = (state: IGlobalState): IFileItem[] => {
  const files = state.entities.files.byId;
  const fileList = Object.values(files);
  return fileList;
};

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

const find = (
  id: string,
  byId: { [key: string]: IFolderItem | IFileItem }
): IFolderItem | IFileItem | null => {
  const currentItem = byId[id];
  if (currentItem) {
    return currentItem;
  }

  for (const elementId in byId) {
    const element = byId[elementId];
    if (
      element.type === "folder" &&
      element.children &&
      element.children?.length > 0
    ) {
      for (const childId of element.children) {
        const found = find(childId.id, byId);
        if (found) {
          return found;
        }
      }
    }
  }
  return null;
};

export const getParentPathByIdSelector = (state: IGlobalState, id: string) => {
  const { folders, files } = state.entities;
  const byId = { ...folders.byId, ...files.byId };

  const element = find(id, byId); // Find the element recursively

  if (!element) {
    return "/";
  }

  return element.parentPath || "/";
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
