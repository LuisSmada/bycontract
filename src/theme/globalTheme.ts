import { DefaultTheme } from "styled-components";

interface IGlobalTheme {
  colors: {
    main: string;
    disabled: string;
    mainText: string;
    borderField: string;
  };
  textSize: {
    title: string;
    normalText: string;
  };
}

export const globalTheme: DefaultTheme | IGlobalTheme = {
  colors: {
    main: "#7440EF",
    disabled: "#B1B1B1",
    mainText: "#3D3D3D",
    borderField: "#E2E4E3",
  },
  textSize: {
    title: "20px",
    normalText: "15px",
  },
};
