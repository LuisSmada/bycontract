import { Button } from "antd";
import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface ISimpleButtonProps {
  width: string;
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  [key: string]: any;
}

interface IPrimaryButtonProps extends ISimpleButtonProps {}

export const PrimaryButton = ({
  width,
  children,
  onClick,
  style,
  ...props
}: IPrimaryButtonProps) => {
  return (
    <ButtonPrimary
      style={style}
      width={width}
      onClick={onClick}
      {...props}
      type="primary"
    >
      {children}
    </ButtonPrimary>
  );
};

interface ISimpleButtonCss {
  width: string;
}

const ButtonPrimary = styled(Button)<ISimpleButtonCss>`
  width: ${(props) => `${props.width}`};
  height: 38px;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  border: none;
  color: white;
  font-size: ${(props) => props.theme.textSize.normalText};
  font-weight: 500;
`;

interface IOutlinedButtonProps extends ISimpleButtonProps {}

export const OutlinedButton = ({
  width,
  children,
  onClick,
}: IOutlinedButtonProps) => {
  return (
    <ButtonOutline width={width} onClick={onClick}>
      {children}
    </ButtonOutline>
  );
};

const ButtonOutline = styled(Button)<ISimpleButtonCss>`
  width: ${(props) => `${props.width}`};
  height: 30px;
  background-color: white;
  border: ${(props) => `1px solid ${props.theme.colors.borderField}`};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.disabled};
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
