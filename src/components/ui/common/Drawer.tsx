import React, { useState } from "react";
import { Drawer as DrawerElement } from "antd";
import { IFileItem, IFolderItem } from "../../../core/model/entities";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface IDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: (v: boolean) => void;
  file: IFolderItem | IFileItem;
}

export const Drawer = (props: IDrawerProps) => {
  const onClose = () => {
    props.setOpenDrawer(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <DrawerElement
        title={t("#Informations")}
        onClose={onClose}
        open={props.openDrawer}
        className="authoringPanel"
        mask={false}
      >
        <Title>Name</Title>
        <DataInfo>{props.file.name}</DataInfo>
        <Title>Creator name</Title>
        <DataInfo>{props.file.creatorName}</DataInfo>
        <Title>Created at</Title>
        <DataInfo>{props.file.createdAt}</DataInfo>
        <Title>Type</Title>
        <DataInfo>{props.file.type}</DataInfo>
        <Title>Size</Title>
        <DataInfo>{props.file.size}</DataInfo>
      </DrawerElement>
    </>
  );
};

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`;

const DataInfo = styled.div`
  font-size: ${(props) => props.theme.textSize.normalText};
  margin-bottom: 10px;
`;
