import { DefaultTheme } from "styled-components";

export const COLORS_BYCONTRACT = {
  colors: {
    borderField: "#E2E4E3",
    disabled: "#B1B1B1",
    iconGray: "#b4b6ba",
    main: "#7440EF",
    mainText: "#3D3D3D",
    notificationErrorContainer: "#fff0ee",
    notificationErrorTitle: "#ea4f37",
    notificationInfoContainer: "#f2f5f7",
    notificationInfoTitle: "#00B8DE",
    notificationSuccessContainer: "#edf6eb",
    notificationSuccessTitle: "#57b847",
    notificationWarningContainer: "#fff3e9",
    notificationWarningTitle: "#e87b00",
    white: "#ffffff",
  },
  textSize: {
    title: "20px",
    normalText: "14px",
  },
} as const satisfies DefaultTheme;

export const globalThemeAntd = {
  token: {
    colorPrimary: COLORS_BYCONTRACT.colors.main,
    colorPrimaryBorder: COLORS_BYCONTRACT.colors.main,
    colorPrimaryHover: COLORS_BYCONTRACT.colors.main,
    colorText: COLORS_BYCONTRACT.colors.mainText,
    fontFamily: "Inter",
  },
  components: {
    Button: {
      defaultHoverBorderColor: COLORS_BYCONTRACT.colors.main,
      defaultHoverColor: COLORS_BYCONTRACT.colors.main,
      colorPrimaryBorder: COLORS_BYCONTRACT.colors.main,
      colorPrimaryHover: COLORS_BYCONTRACT.colors.main,
      colorPrimary: COLORS_BYCONTRACT.colors.main,
      defaultBorderColor: COLORS_BYCONTRACT.colors.disabled,
      borderColorDisabled: COLORS_BYCONTRACT.colors.disabled,
      groupBorderColor: COLORS_BYCONTRACT.colors.main,
    },
    Input: {
      activeBorderColor: COLORS_BYCONTRACT.colors.main,
      hoverBorderColor: COLORS_BYCONTRACT.colors.main,
      colorPrimary: COLORS_BYCONTRACT.colors.main,
      colorPrimaryHover: COLORS_BYCONTRACT.colors.main,
      colorPrimaryActive: COLORS_BYCONTRACT.colors.main,
      colorText: COLORS_BYCONTRACT.colors.mainText,
    },
  },
};
