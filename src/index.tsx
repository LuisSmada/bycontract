import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { COLORS_BYCONTRACT } from "./theme/globalTheme";
import FontStyles from "./theme/fontStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import i18next from "i18next";

import global_fr from "./nls/translate/LanguageFrame_fr.json";
import global_en from "./nls/translate/LanguageFrame_en.json";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],
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
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "navigator",
        "localStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={COLORS_BYCONTRACT}>
        <FontStyles />
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
