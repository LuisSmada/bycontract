import React, { useState } from "react";
import styled from "styled-components";

export const ConnexionForm = () => {
  const [userLogin, setUserLogin] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  return (
    <Container>
      <FormContainer>
        <TitleHome>Bienvenue sur la plateforme BYCONTRACT</TitleHome>
        <IndicationConnexion>Connectez-vous pour continuer</IndicationConnexion>
        <Label>Email ou nom d utilisateur</Label>
        <InputForm
          type="text"
          value={userLogin}
          onChange={(e) => setUserLogin(e.target.value)}
        />
        <Label>Mot de passe</Label>
        <InputForm
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <RememberMeWrapper>
          <CheckBox type="checkbox" />
          <Label>Se souvenir de moi</Label>
        </RememberMeWrapper>
        <Button>Connexion</Button>
      </FormContainer>
      <ButtonLanguage>Francais</ButtonLanguage>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleHome = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const IndicationConnexion = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.colors.disabled};
`;

const Label = styled.div``;

const RememberMeWrapper = styled.div`
  display: flex;
`;

const InputForm = styled.input``;

const CheckBox = styled.input``;

const Button = styled.button``;

const ButtonLanguage = styled.button``;
