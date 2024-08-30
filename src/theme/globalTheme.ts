import { DefaultTheme } from "styled-components";

export const COLORS_BYCONTRACT = {
  colors: {
    main: "#7440EF",
    disabled: "#B1B1B1",
    mainText: "#3D3D3D",
    borderField: "#E2E4E3",
  },
  textSize: {
    title: "20px",
    normalText: "14px",
  },
} as const satisfies DefaultTheme;
