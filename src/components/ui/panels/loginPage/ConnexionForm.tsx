import { useState } from "react";
import styled from "styled-components";
import Logo from "../../../../assets/icons/BYC.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

export const ConnexionForm = () => {
  const [userLogin, setUserLogin] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const currentLng = cookies.get("i18next");

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    if (currentLng === "en") {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <Container>
      <ContainerWrapper>
        <LogoWrapper>
          <LogoImage src={Logo} alt="Logo Miniaturized" />
        </LogoWrapper>
        <FormContainer>
          <TitleHome>{t("#WelcomeOnByContract")}</TitleHome>
          <IndicationConnexion>{t("#LogToContinue")}</IndicationConnexion>
          <Label>{t("#EmailOrUsername")}</Label>
          <InputForm
            type="text"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
          />
          <Label>{t("#Password")}</Label>
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
            <Label>{t("#RememberMe")}</Label>
          </RememberMeWrapper>
          <Link to="/dashboard/tab:mywall">
            <Button>{t("#Login")}</Button>
          </Link>
          <ButtonLanguage onClick={handleChangeLanguage}>
            {currentLng === "fr" ? t("#English") : t("#French")}
          </ButtonLanguage>
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
  font-weight: 500;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: ${(props) => props.theme.textSize.normalText};
  font-weight: 500;
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
  font-weight: 500;
  cursor: pointer;
`;

const ButtonLanguage = styled.button`
  width: 6rem;
  height: 30px;
  background-color: white;
  /* border: ${(props) => `1px solid ${props.theme.colors.borderField}`}; */
  border-radius: 5px;
  /* color: ${(props) => props.theme.colors.disabled}; */
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  cursor: pointer;
  border: ${(props) => `1px solid ${props.theme.colors.main}`};
  color: ${(props) => props.theme.colors.main};
  /* &:focus {
    border: ${(props) => `1px solid ${props.theme.colors.main}`};
    color: ${(props) => props.theme.colors.main};
  } */
`;
