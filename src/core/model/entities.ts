import { IDashboardTabsListType } from "../../types/DashboardTypes";

export interface IGlobalState {
  appliState: IApplicationState;
  entities: IEntities;
}

export interface IApplicationState {
  core: ICoreApplicationState;
}

export interface ICoreApplicationState {
  currentUser: string;
  language: string;
  activeTab: IDashboardTabsListType;
  currentPath: string;
}

export interface IEntities {
  files: IFile;
  folders: IFolder;
}

export interface ILanguageApplication {
  language: TLanguageApplication;
}

export type TLanguageApplication = "en" | "fr";

export type UniqueID = string;

type TFileSystemType = "folder" | "file";
export interface IFileSystem {
  id: UniqueID;
  creatorName: string;
  date: string;
  name: string;
  parentID: string | null;
  parentPath: string | null;
  path: string;
  size?: number;
}

export interface IFolderItem extends IFileSystem {
  type: "folder";
  children?: (IFileItem | IFolderItem)[] | null;
}
export interface IFolder {
  byId: { [key: string]: IFolderItem };
  allFolderIds: string[];
}

export interface IFileItem extends IFileSystem {
  type: "file";
}

export interface IFile {
  byId: { [key: string]: IFileItem };
  allFileIds: string[];
}
