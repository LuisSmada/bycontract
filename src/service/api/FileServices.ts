import BaseServices from "./BaseServices";
import { FilesAPIUrls } from "./urls";

export default class FileServices {
  static getFileById = (idFile: string) => {
    return BaseServices.getRequest(FilesAPIUrls.GET_FILE_BY_ID(idFile));
  };

  static updateFileById = (idFile: string, payload: object) => {
    return BaseServices.putRequest(
      FilesAPIUrls.UPDATE_FILE_BY_ID(idFile),
      payload
    );
  };

  static deleteFileById = (idFile: string) => {
    return BaseServices.deleteRequest(FilesAPIUrls.DELETE_FILE_BY_ID(idFile));
  };
}
