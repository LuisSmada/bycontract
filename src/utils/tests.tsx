import { Provider } from "react-redux";
import { TByContractStore } from "../redux/store/store";
import { ThemeProvider } from "styled-components";
import { COLORS_BYCONTRACT } from "../theme/globalTheme";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_en from "../nls/translate/LanguageFrame_en.json";
import global_fr from "../nls/translate/LanguageFrame_fr.json";

i18next.init({
  resources: {
    en: {
      translation: global_en,
    },
    fr: {
      translation: global_fr,
    },
  },
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

interface IRootContainer {
  store: TByContractStore;
  children?: ReactNode;
}
export const RootContainer = ({ store, children }: IRootContainer) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={COLORS_BYCONTRACT}>{children}</ThemeProvider>
      </I18nextProvider>
    </Provider>
  );
};
