import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties } from "react";
import styled from "styled-components";
import {
  ENotifType,
  INotificationMessage,
} from "../../managers/notifInterfaces";
import { RootContainer } from "../../storybook/notification.stories";
import { COLORS_BYCONTRACT } from "../../theme/globalTheme";
import { CloseIcon } from "./common/SVGIcons";
import { Z_INDEX } from "./common/ZIndex";

interface ILevelStyle {
  color: string;
  bgColor: string;
  icon: string;
}

interface INotifContainerProps extends INotificationMessage {}

const levelStyles: { [key in ENotifType]: ILevelStyle } = {
  [ENotifType.info]: {
    color: COLORS_BYCONTRACT.colors.notificationInfoTitle,
    bgColor: COLORS_BYCONTRACT.colors.notificationInfoContainer,
    icon: "info",
  },
  [ENotifType.warn]: {
    color: COLORS_BYCONTRACT.colors.notificationWarningTitle,
    bgColor: COLORS_BYCONTRACT.colors.notificationWarningContainer,
    icon: "alert",
  },
  [ENotifType.success]: {
    color: COLORS_BYCONTRACT.colors.notificationSuccessTitle,
    bgColor: COLORS_BYCONTRACT.colors.notificationSuccessContainer,
    icon: "check",
  },
  [ENotifType.error]: {
    color: COLORS_BYCONTRACT.colors.notificationErrorTitle,
    bgColor: COLORS_BYCONTRACT.colors.notificationErrorContainer,
    icon: "attention",
  },
};

const circleAnimationVariant = {
  empty: { strokeDashoffset: 280, opacity: 0 },
  full: { strokeDashoffset: 0, opacity: 1 },
};

export const NotifContainer = (props: INotifContainerProps) => {
  const errotNotif = {
    type: ENotifType.error,
    title: "Erreur",
    message: "C'est une erreur",
  };
  return (
    <RootContainer data-testid="bycontract-notification-contaier">
      <AnimatePresence mode="popLayout">
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
            zIndex: Z_INDEX.NOTIFICATIONS,
          }}
          animate={{
            scale: 0.3,
            opacity: 1,
          }}
          transition={{ x: { min: 0 } }}
          layout
          style={{ position: "relative" }}
        >
          <Notif
            message={props.message}
            title={props.title}
            type={props.type}
          />
        </motion.div>
      </AnimatePresence>
    </RootContainer>
  );
};

const RootStack = styled(motion.div)`
  position: absolute;
  z-index: ${Z_INDEX.NOTIFICATIONS};
  top: 5px;
  right: 20px;
  display: block;
  transition: all 2s;
  max-width: 250px;
  max-height: 250px;
`;

const Notif = (props: INotifContainerProps) => {
  const levelStyle = levelStyles[props.type];
  const containerStyle: CSSProperties = {
    backgroundColor: levelStyle.bgColor,
    color: levelStyle.color,
    stroke: levelStyle.color,
  };
  return (
    <Container style={containerStyle} data-testid="notif-container">
      <Band>
        <Icon data-testid="notif-icon" />
      </Band>
      <CloseGroup data-testid="notif-close">
        <Cross />
      </CloseGroup>
      <Title data-testid="notif-title">{props.title}</Title>
      {/* <SubTit data-testid="notif-title">{props.title}</Title> */}
      <Message data-testid="notif-message">{props.message}</Message>
    </Container>
  );
};

const Cross = styled(CloseIcon)`
  color: ${(props) => props.theme.colors.iconGray};
`;

const Container = styled.div`
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  min-width: 250px;
  margin: 7px;
  padding: 10px 10px 10px 48px;
  max-height: 200px;
  max-width: 250px;
  text-align: left;
  overflow: hidden;
  opacity: 1;
  font-family: Arial;
  font-size: 13px;
  box-sizing: border-box;
  transition:
    padding 1s ease,
    margin 1s ease,
    max-height 1s ease,
    opacity 1s ease;
  transform: translate3d(0, 0, 0);

  &:hover {
    box-shadow:
      0 1px 15px rgba(0, 0, 0, 0.3),
      inset 0 0 0 1px rgba(255, 255, 255, 0.34);
  }
`;

const CloseGroup = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
  width: 22px;
  height: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (pointer: fine) {
    cursor: pointer;
  }

  &:hover {
    ${Cross} {
      color: #4d4d4d !important;
    }
  }
`;

const Band = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  width: 39px;
  border-left-width: 5px;
  border-left-style: solid;
  z-index: 2;
`;

const Icon = styled.span`
  margin-top: 10px;
  text-align: center;
  font-size: 22px;
`;

const Title = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
  color: ${(props) => props.theme.colors.mainText};
  max-width: 165px;
  hyphens: auto;
`;

const Message = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 10px;
  display: block;
  word-wrap: break-word;
  white-space: normal;
  color: ${(props) => props.theme.colors.mainText};
  hyphens: auto;
`;
