import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
import { NotifContainer } from "../components/ui/NotifContainer";
import { ENotifType } from "../managers/notifInterfaces";

const meta: Meta<typeof NotifContainer> = {
  title: "Notification container",
  component: NotifContainer,
};

export default meta;

type Story = StoryObj<typeof NotifContainer>;

export const Error: Story = {
  args: {
    type: ENotifType.error,
    title: "Erreur",
    message: "C est une erreur",
  },
};

export const Success: Story = {
  args: {
    type: ENotifType.success,
    title: "Succes",
    message: "Operation reussi",
  },
};

export const Warning: Story = {
  args: {
    type: ENotifType.warn,
    title: "Warning",
    message: "Operation warn",
  },
};

export const Info: Story = {
  args: {
    type: ENotifType.info,
    title: "Info",
    message: "Operation info",
  },
};

export const RootContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
