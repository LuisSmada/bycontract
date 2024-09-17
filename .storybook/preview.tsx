import React from "react";

import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { COLORS_BYCONTRACT } from "../src/theme/globalTheme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={COLORS_BYCONTRACT}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
