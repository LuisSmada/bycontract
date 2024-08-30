import styled from "styled-components";

interface IBadgeProps {
  userName: string;
  isPointer: boolean;
}

export const Badge = (props: IBadgeProps) => {
  const { userName, isPointer } = props;

  const getInitials = (userName: string) => {
    const words = userName.split(" ");
    const initials = words.map((word) => word.charAt(0)).join("");
    return initials.toUpperCase();
  };
  return <Container $isPointer={isPointer}>{getInitials(userName)}</Container>;
};

interface IContainer {
  $isPointer: boolean;
}

const Container = styled.div<IContainer>`
  width: 33px;
  height: 33px;
  border-radius: 100%;
  background-color: #2875a1;
  font-size: ${(props) => props.theme.textSize.normalText};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: ${(props) => (props.$isPointer ? `pointer` : `default`)};
`;
