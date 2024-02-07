import React from "react";
import styled from "styled-components";

export const ConnexionForm = () => {
  return (
    <Container>
      <TitleHome>Bienvenue sur la plateforme BYCONTRACT</TitleHome>
      <IndicationConnexion>Connectez-vous pour continuer</IndicationConnexion>
      <EmailLabel></EmailLabel>
      <PasswordLabel></PasswordLabel>
      <RememberMeWrapper></RememberMeWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleHome = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const IndicationConnexion = styled.div``;

const EmailLabel = styled.div``;

const PasswordLabel = styled.div``;

const RememberMeWrapper = styled.div``;
