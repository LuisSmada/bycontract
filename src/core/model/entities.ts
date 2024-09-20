export interface IGlobalState {
  appliState: IApplicationState;
  entities: IEntities;
}

export interface IApplicationState {
  core: ICoreApplicationState;
}

export interface ICoreApplicationState {
  language: string;
}

export interface IEntities {
  folders: IFolder;
  files: IFile;
}

export interface ILanguageApplication {
  language: TLanguageApplication;
}

export type TLanguageApplication = "en" | "fr";

type UniqueID = string;

type TFileSystemType = "folder" | "file";
export interface IFileSystem {
  id: UniqueID;
  name: string;
  path: string;
  size: number;
  date: string;
  creatorName: string;
  parentPath?: string | null;
  parentID?: string | null;
}

export interface IFolderItem extends IFileSystem {
  type: "folder";
  children?: (IFileItem | IFolderItem)[] | null;
}
export interface IFolder {
  byId: { [key: string]: IFolderItem };
}

export interface IFileItem extends IFileSystem {
  type: "file";
}

export interface IFile {
  byId: { [key: string]: IFileItem };
}
