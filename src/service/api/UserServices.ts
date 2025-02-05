import { IUser, IUserPayload } from "../../core/model/entities";
import BaseServices from "./BaseServices";
import { UsersAPIUrls } from "./urls";

export default class UserServices {
  static createUser = (payload: IUserPayload): Promise<IUser> => {
    return BaseServices.postRequest(UsersAPIUrls.CREATE_USER, payload);
  };

  static getUserById = (idUser: string): Promise<IUser> => {
    return BaseServices.getRequest(UsersAPIUrls.GET_USER_BY_ID(idUser));
  };

  static updateUserById = (
    idUser: string,
    payload: IUserPayload
  ): Promise<IUser> => {
    return BaseServices.putRequest(
      UsersAPIUrls.UPDATE_USER_BY_ID(idUser),
      payload
    );
  };

  static deleteUserById = (idUser: string): Promise<void> => {
    return BaseServices.deleteRequest(UsersAPIUrls.DELETE_USER_BY_ID(idUser));
  };
}
