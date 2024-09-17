import { render } from "@testing-library/react";
import App from "./App";
import { store } from "./redux/store/store";
import { RootContainer } from "./utils/tests";

test("renders learn react link", () => {
  const { getByTestId } = render(
    <RootContainer store={store}>
      <App />
    </RootContainer>
  );
  const formElement = getByTestId("form-login-container");
  expect(formElement).toBeInTheDocument();
});
