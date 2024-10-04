import moment from "moment";
import { IFolder, IFolderItem } from "../../../core/model/entities";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { momentDateFormat, uniqueId } from "../../../utils/generics";
import { StoreTypeDispatch, TByContractStore } from "../../store/store";
import { useAppSelector } from "../../../utils/hooks/reduxHooks/reduxHooks";
import { getCurrentUser } from "../../selectors/selectors";

const idFolder1 = uniqueId();
const idFolder2 = uniqueId();

const idGenerator = uniqueId();

export const folderInitialState: IFolder = {
  byId: {
    [idFolder1]: {
      id: idFolder1,
      type: "folder",
      name: "First folder",
      path: "/",
      size: 10,
      date: moment().format(momentDateFormat),
      creatorName: "Adams AYO",
      parentPath: null,
      parentID: null,
    },
    [idFolder2]: {
      id: idFolder2,
      type: "folder",
      name: "Second folder",
      path: "/",
      size: 10,
      date: moment().format(momentDateFormat),
      creatorName: "Adams AYO",
      parentPath: null,
      parentID: null,
    },
  },
};

console.log(folderInitialState);

export const folderSlice = createSlice({
  name: "folders",
  initialState: folderInitialState,
  reducers: {
    addFolderInit: {
      reducer: (state, action: PayloadAction<IFolderItem>) => {
        const newFolder = action.payload;
        state.byId[newFolder.id] = newFolder;
      },
      prepare: (folderData: Omit<IFolderItem, "id" | "date" | "type">) => {
        const newId = uniqueId();
        const formattedDate = moment().format(momentDateFormat);
        const folderType: "folder" = "folder";
        return {
          payload: {
            ...folderData,
            id: newId,
            date: formattedDate,
            type: folderType,
            children: [],
          },
        };
      },
    },
    deleteFolder: (state, action: PayloadAction<string>) => {
      const folderId = action.payload;
      delete state.byId[folderId];
    },
  },
});

export const addFolder = (
  folderData: Omit<IFolderItem, "id" | "date" | "type" | "creatorName">
) => {
  return (dispatch: StoreTypeDispatch, getState: () => TByContractStore) => {
    const user = getCurrentUser(getState());
    dispatch(
      folderSlice.actions.addFolderInit({
        ...folderData,
        creatorName: user,
      })
    );
  };
};

export const { addFolderInit, deleteFolder } = folderSlice.actions;
export default folderSlice.reducer;
