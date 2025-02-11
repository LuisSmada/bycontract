import React, { useState } from "react";
import { Drawer as DrawerElement } from "antd";

interface IDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: (v: boolean) => void;
}

export const Drawer = (props: IDrawerProps) => {
  const onClose = () => {
    props.setOpenDrawer(false);
  };

  return (
    <>
      <DrawerElement
        title="Basic Drawer"
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
