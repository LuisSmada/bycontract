import { useTranslation } from "react-i18next";
import { css, styled } from "styled-components";
import { AddIcon } from "../SVGIcons";
import { PrimaryButton } from "../Buttons";
import { CSSProperties, useState } from "react";
import { Modal } from "antd";
import { ModalDocument } from "../modals/ModalDocument";

export const DocumentContextBar = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ButtonSelectionCss = {
    width: "100px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    border: "none",
    borderRadius: "5px",
    fontSize: "12px", //Mettre ca sous forme de variable
    padding: "0 10px",
    fontWeight: "normal",
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>{t("#MyDocuments")}</Title>
          <PrimaryButton
            width="100px"
            style={ButtonSelectionCss}
            onClick={openModal}
          >
            {t("#New")}
            <AddIconStyle />
          </PrimaryButton>
        </Wrapper>
      </Container>
      <ModalDocument isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
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
  color: ${(props) => props.theme.textSize.normalText};
`;

const ButtonSelection = styled(PrimaryButton)`
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
