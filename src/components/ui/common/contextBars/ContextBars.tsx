import React from "react";
import { useTranslation } from "react-i18next";
import { styled } from "styled-components";
import { AddIcon } from "../SVGIcons";

export const DocumentContextBar = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Title>{t("#MyDocuments")}</Title>
        <ButtonSelection>
          {t("#New")} <AddIconStyle />
        </ButtonSelection>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 49px;
  background-color: #f4f4f4;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.textSize.normalText};
  color: ${(props) => props.theme.textSize.mainText};
`;

const ButtonSelection = styled.button`
  width: 100px;
  height: 28px;
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px; //Mettre ca sous forme de variable
  padding: 0 10px;
`;

const AddIconStyle = styled(AddIcon)`
  fill: ${(props) => props.theme.colors.white};
  width: 10px;
  height: 10px;
`;
