import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../../../assets/icons/BYC.svg";

export const ConnexionForm = () => {
  const [userLogin, setUserLogin] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Container>
      <ContainerWrapper>
        <LogoWrapper>
          <LogoImage src={Logo} alt="Logo Miniaturized" />
        </LogoWrapper>
        <FormContainer>
          <TitleHome>Bienvenue sur la plateforme BYCONTRACT</TitleHome>
          <IndicationConnexion>
            Connectez-vous pour continuer
          </IndicationConnexion>
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
            <CheckBox
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              $isChecked={isChecked}
            />
            <Label>Se souvenir de moi</Label>
          </RememberMeWrapper>
          <Button>Connexion</Button>
          <ButtonLanguage>Francais</ButtonLanguage>
        </FormContainer>
      </ContainerWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 72px;
`;

const LogoWrapper = styled.div`
  width: auto;
  height: auto;
`;

const LogoImage = styled.img`
  width: 100px;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleHome = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 30px 0;
`;

const IndicationConnexion = styled.div`
  font-size: ${(props) => props.theme.textSize.normalText};
  color: ${(props) => props.theme.colors.disabled};
  font-weight: 600;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: ${(props) => props.theme.textSize.normalText};
  font-weight: 600;
  color: ${(props) => props.theme.colors.mainText};
  margin-bottom: 0.3rem;
`;

const RememberMeWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`;

const InputForm = styled.input`
  width: 402px;
  height: 30px;
  border: ${(props) => `1px solid ${props.theme.colors.disabled}`};
  border-radius: 5px;
  margin-bottom: 10px;
  outline: none;
  &:focus {
    border: ${(props) => `1px solid ${props.theme.colors.main}`};
  }
`;

interface ICheckBox {
  $isChecked: boolean;
}

const CheckBox = styled.input<ICheckBox>`
  border-radius: 5px;
  border: none;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.$isChecked && `#000`};
`;

const Button = styled.button`
  width: 410px;
  height: 38px;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  border: none;
  color: white;
  font-size: ${(props) => props.theme.textSize.normalText};
  font-weight: 600;
  cursor: pointer;
`;

const ButtonLanguage = styled.button`
  width: 6rem;
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
  cursor: pointer;
  &:focus {
    border: ${(props) => `1px solid ${props.theme.colors.main}`};
    color: ${(props) => props.theme.colors.main};
  }
`;
