import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      borderField: `#${string}`;
      disabled: `#${string}`;
      iconGray: `#${string}`;
      main: `#${string}`;
      mainText: `#${string}`;
      notificationErrorContainer: `#${string}`;
      notificationErrorTitle: `#${string}`;
      notificationInfoContainer: `#${string}`;
      notificationInfoTitle: `#${string}`;
      notificationSuccessContainer: `#${string}`;
      notificationSuccessTitle: `#${string}`;
      notificationWarningContainer: `#${string}`;
      notificationWarningTitle: `#${string}`;
      white: `#${string}`;
    };
    textSize: {
      title: `${string}`;
      normalText: `${string}`;
    };
  }
}
