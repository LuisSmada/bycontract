import { Nullable } from "../../utils/generics";
import { IFileSystemContent, IFolderItem } from "./entities";

export const isFolderItem = (
  element: Nullable<IFileSystemContent>
): element is IFolderItem => element?.type === "folder";

export const throwError = (errorMessage: string) => {
  throw new Error(errorMessage);
};
export function assertIsFolderItem(
  element: Nullable<IFileSystemContent>
): asserts element is IFolderItem {
  !isFolderItem(element) && throwError("This element should be a folder type");
}
