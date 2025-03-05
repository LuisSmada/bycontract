import configService from "../configService";

//export const prefixer = configService.apiUrl;
export const prefixer = "http://192.168.0.33:8080/api/v1";

export const FoldersAPIUrls = {
  CREATE_FOLDER: `${prefixer}/folders`,
  DELETE_FOLDER_BY_ID: (id: string) => `${prefixer}/folders/${id}`,
  GET_FOLDER_BY_ID: (id: string) => `${prefixer}/folders/${id}`,
  UPDATE_FOLDER_BY_ID: (id: string) => `${prefixer}/folders/${id}`,
};

export const UsersAPIUrls = {
  CREATE_USER: `${prefixer}/users`,
  DELETE_USER_BY_ID: (id: string) => `${prefixer}/users/${id}`,
  GET_USER_BY_ID: (id: string) => `${prefixer}/users/${id}`,
  UPDATE_USER_BY_ID: (id: string) => `${prefixer}/users/${id}`,
};

export const FilesAPIUrls = {
  CREATE_FILE: `${prefixer}/files`,
  DELETE_FILE_BY_ID: (id: string) => `${prefixer}/files/${id}`,
  GET_FILE_BY_ID: (id: string) => `${prefixer}/files/${id}`,
  UPDATE_FILE_BY_ID: (id: string) => `${prefixer}/files/${id}`,
  UPLOAD_FILE: `${prefixer}/files/upload`,
};
