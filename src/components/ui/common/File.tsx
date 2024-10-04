import React from "react";
import styled from "styled-components";
import { FileIcon, FolderIcon } from "./SVGIcons";

interface IFile {
  id: string;
  name: string;
  type: "file" | "folder";
}

export const File = (props: IFile) => {
  const fileNameSplited: String[] = props.name.split(".");
  const ext: String = fileNameSplited.length === 2 ? fileNameSplited[1] : "txt";

  return (
    <Container id={`${props.type}-id-${props.id}`}>
      <Logo>
        {props.type === "folder" ? <FolderIconStyled /> : <FileIconStyled />}
        {props.type === "file" ? <span>{`.${ext}`}</span> : ""}
      </Logo>
      <Name>{props.name}</Name>
    </Container>
  );
};

const Container = styled.div`
  height: 100px;
  width: 96px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
  padding: 8px 7px 10px 10px;
  border-radius: 8px;
  transition: background 230ms ease-in;
  &:hover {
    background: rgba(116, 64, 239, 0.2);
  }
`;

const FileIconStyled = styled(FileIcon)`
  height: 76px;
  width: 100px;
`;

const FolderIconStyled = styled(FolderIcon)`
  height: 76px;
  width: 100px;
`;

const Logo = styled.div`
  position: relative;

  & span {
    position: absolute;
    bottom: 20px;
    left: 35px;
    width: 96%;
    font-weight: 600;
    color: white;
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.textSize.buttonText};
`;
