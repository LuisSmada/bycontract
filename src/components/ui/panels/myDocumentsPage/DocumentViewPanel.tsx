import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../../../utils/hooks/reduxHooks/reduxHooks";
import {
  getAllFileListMemo,
  getAllFolderListMemo,
  getFolderChildrenByFolderId,
} from "../../../../redux/selectors/selectors";
import { File } from "../../common/File";
import {
  IFileItem,
  IFolder,
  IFolderItem,
} from "../../../../core/model/entities";
import { Drawer } from "../../common/Drawer";

export const DocumentViewPanel = () => {
  const { "*": pathParam } = useParams();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<
    IFolderItem | IFileItem | null
  >(null);

  const documentIds = pathParam?.split("/") ?? [];
  const parentId =
    documentIds.length > 0 ? documentIds[documentIds.length - 1] : null;
  const folderList = useAppSelector(getAllFolderListMemo);
  const fileList = useAppSelector(getAllFileListMemo);

  const childrenById = useAppSelector((state) =>
    getFolderChildrenByFolderId(state, parentId)
  );

  const allFilesList = [...folderList, ...fileList];

  const highFiles = allFilesList.filter((file) => file.parentID === null);

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent,
    document: IFolderItem | IFileItem
  ) => {
    e.preventDefault();
    console.log("Right click");
    setOpenDrawer(true);
    setSelectedDocument(document);
  };

  // document.addEventListener("contextmenu", (event: MouseEvent) =>
  //   handleRightClick(event)
  // );

  const isChildrenByIdExistsFc = (): boolean => {
    return childrenById !== null && childrenById !== undefined;
  };

  const isChildrenByIdExists = isChildrenByIdExistsFc();

  return (
    <Container>
      {parentId
        ? childrenById &&
          Object.values(childrenById)?.map((children) => {
            return (
              <File
                id={children.id}
                key={children.id}
                type={children.type}
                name={children.name}
                onRightClick={(e) => handleRightClick(e, children)}
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
                onRightClick={(e) => handleRightClick(e, children)}
              />
            );
          })}

      {selectedDocument && (
        <Drawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          file={selectedDocument}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
