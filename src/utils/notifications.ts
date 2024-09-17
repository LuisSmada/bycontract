import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

interface IOpenNotificationProps {
  type: NotificationType;
  message: string;
  description: string;
}

export const openNotification = ({
  type,
  message,
  description,
}: IOpenNotificationProps) => {
  notification[type]({
    message: message,
    description: description,
    placement: "topRight",
    duration: 3,
    style: {
      width: 270,
      borderRadius: "none",
    },
  });
};
