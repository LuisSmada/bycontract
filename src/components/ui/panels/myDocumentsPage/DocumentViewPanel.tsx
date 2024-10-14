import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../../../utils/hooks/reduxHooks/reduxHooks";
import {
  getAllFileList,
  getAllFolderList,
  getFolderChildrenByFolderId,
} from "../../../../redux/selectors/selectors";
import { File } from "../../common/File";

export const DocumentViewPanel = () => {
  const { documentId } = useParams();
  const parentId = documentId ? documentId : null;
  const folderList = useAppSelector(getAllFolderList);
  const fileList = useAppSelector(getAllFileList);

  const childrenById = useAppSelector((state) =>
    getFolderChildrenByFolderId(state, parentId)
  );

  const allFilesList = [...folderList, ...fileList];

  const highFiles = allFilesList.filter((file) => file.parentID === null);

  return (
    <Container>
      {parentId
        ? childrenById?.map((children) => {
            return (
              <File
                id={children.id}
                key={children.id}
                type={children.type}
                name={children.name}
              />
            );
          })
        : highFiles.map((children) => {
            return (
              <File
                id={children.id}
                key={children.id}
                type={children.type}
                name={children.name}
              />
            );
          })}
      {/* {folderList.map((folder) => {
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
          <File id={list.id} key={list.id} type={list.type} name={list.name} />
        );
      })} */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
