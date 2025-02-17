import React, { useState } from "react";
import { Drawer as DrawerElement } from "antd";
import { IFileItem, IFolderItem } from "../../../core/model/entities";

interface IDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: (v: boolean) => void;
  file: IFolderItem | IFileItem;
}

export const Drawer = (props: IDrawerProps) => {
  const onClose = () => {
    props.setOpenDrawer(false);
  };

  return (
    <>
      <DrawerElement
        title={props.file.name}
        onClose={onClose}
        open={props.openDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </DrawerElement>
    </>
  );
};
