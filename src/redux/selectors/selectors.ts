import {
  IFileItem,
  IFolderItem,
  IGlobalState,
  TLanguageApplication,
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
