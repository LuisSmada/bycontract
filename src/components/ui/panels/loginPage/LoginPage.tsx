import React from "react";
import styled from "styled-components";
import HomeImage from "../../../../assets/illustrations/homemeeting.png";
import { ConnexionForm } from "./ConnexionForm";
import { motion } from "framer-motion";
import { BYCONTRACTLogo } from "../../common/SVGIcons";

export const LoginPage = () => {
  return (
    <Container>
      <ContainerWrapper>
        <IllustrationContainer>
          <LogoContainer>
            <NormalLogo src={BYCONTRACTLogo} alt="Normal Logo" />
          </LogoContainer>
          <ImageContainer>
            <Image src={HomeImage} alt="HomeImage" />
          </ImageContainer>
        </IllustrationContainer>
        <FormContainer
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ConnexionForm />
        </FormContainer>
      </ContainerWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const LogoContainer = styled.div`
  width: auto;
  height: auto;
`;

const NormalLogo = styled.img`
  width: 160px;
`;

const IllustrationContainer = styled.div`
  grid-row: 1;
  grid-column: 1/2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 120px;
`;

const FormContainer = styled(motion.div)`
  grid-row: 1;
  grid-column: 2/3;

  box-shadow: ${(props) => `-1px 1px 10px ${props.theme.colors.disabled}`};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Image = styled.img`
  width: 571px;
  height: 429px;
`;
