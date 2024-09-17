import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-knobs",
    "@storybook/addon-controls",
    "@storybook/theming",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/storybook/**/*stories.@(tsx|ts|js|jsx)"],
  core: {
    disableTelemetry: true,
  },
  docs: {
    docsMode: false,
  },
};

export default config;
