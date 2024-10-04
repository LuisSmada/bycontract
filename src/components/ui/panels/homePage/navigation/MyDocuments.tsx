import { DocumentContextBar } from "../../../common/contextBars/ContextBars";
import { useAppSelector } from "../../../../../utils/hooks/reduxHooks/reduxHooks";
import { File } from "../../../common/File";
import styled from "styled-components";
import {
  getAllFileList,
  getAllFolderList,
} from "../../../../../redux/selectors/selectors";

export const MyDocuments = () => {
  const folderList = useAppSelector(getAllFolderList);
  const fileList = useAppSelector(getAllFileList);
  return (
    <>
      <DocumentContextBar />
      <ViewPanel id="document-view-panel">
        {folderList.map((folder) => {
          return (
            <File
              id={folder.id}
              key={folder.id}
              type={folder.type}
              name={folder.name}
            />
          );
        })}
        {fileList.map((list) => {
          return (
            <File
              id={list.id}
              key={list.id}
              type={list.type}
              name={list.name}
            />
          );
        })}
      </ViewPanel>
    </>
  );
};

const ViewPanel = styled.div`
  display: flex;
  padding: 0 11px;
  flex-wrap: wrap;
  justify-content: start;
`;
