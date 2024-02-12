import React from "react";
import styled from "styled-components";
import HomeImage from "../../../../assets/illustrations/homemeeting.png";
import { ConnexionForm } from "./ConnexionForm";

export const HomePage = () => {
  return (
    <Container>
      <ContainerWrapper>
        <IllustrationContainer>
          <ImageContainer>
            <Image src={HomeImage} alt="HomeImage" />
          </ImageContainer>
        </IllustrationContainer>
        <FormContainer>
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

const IllustrationContainer = styled.div`
  grid-row: 1;
  grid-column: 1/2;
`;

const FormContainer = styled.div`
  grid-row: 1;
  grid-column: 2/3;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 655px;
  height: 500px;
`;
