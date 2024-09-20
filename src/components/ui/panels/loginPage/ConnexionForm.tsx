import cookies from "js-cookie";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { openNotification } from "../../../../utils/notifications";
import { OutlinedButton, PrimaryButton } from "../../common/Buttons";
import { InputCheckbox, InputForm } from "../../common/Inputs";
import { BYCLogo } from "../../common/SVGIcons";
import { useSelector } from "react-redux";
import { getLanguage } from "../../../../redux/selectors/selectors";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../utils/hooks/reduxHooks/reduxHooks";
import { setLanguage } from "../../../../redux/slices/applicationSlices/languageSlice";

export const ConnexionForm = () => {
  const [userLogin, setUserLogin] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  // const [userCredentials, setUserCredentials] = useState({ userLogin: "", userPassword: ""})
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispacth = useAppDispatch();

  const { t, i18n } = useTranslation();

  const currentLng = i18n.language;

  const defaultCredentials = {
    login: "root",
    pwd: "root",
  };

  const langSelector = useAppSelector(getLanguage);

  const handleChangeLanguage = () => {
    if (currentLng === "en") {
      i18n.changeLanguage("fr");
      dispacth(setLanguage(i18n.language));
    } else {
      i18n.changeLanguage("en");
      dispacth(setLanguage(i18n.language));
    }
  };

  const handleLogin = () => {
    if (!userLogin || !userPassword) {
      openNotification({
        type: "error",
        message: t("#CompleteFields"),
        description: t("#YouMustCompleteAllTheFields"),
      });
    } else if (
      userLogin !== defaultCredentials.login ||
      userPassword !== defaultCredentials.pwd
    ) {
      openNotification({
        type: "error",
        message: t("#InvalidFields"),
        description: t("#OneOrManyFieldsAreInvalids"),
      });
    } else {
      // openNotification({
      //   type: "success",
      //   message: "Login sucess",
      //   description: "Login success",
      // });
      navigate("/dashboard/tab:mywall");
    }
  };

  return (
    <Container>
      <ContainerWrapper>
        <LogoWrapper>
          <LogoImage src={BYCLogo} alt="Logo Miniaturized" />
        </LogoWrapper>
        <FormContainer data-testid="form-login-container">
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
            <InputCheckbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <Label>{t("#RememberMe")}</Label>
          </RememberMeWrapper>
          <PrimaryButton width="410px" onClick={handleLogin}>
            {t("#Login")}
          </PrimaryButton>
          <OutlinedButton width={"6rem"} onClick={handleChangeLanguage}>
            {langSelector === "fr" ? t("#English") : t("#French")}
          </OutlinedButton>
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

const FormContainer = styled.form`
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
