import { Checkbox, Input } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { css, styled } from "styled-components";

interface IInputFormProps {
  prefix?: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const InputForm = (props: IInputFormProps) => {
  switch (props.type) {
    case "text":
      return (
        <InputFormStyled
          value={props.value}
          onChange={props.onChange}
          prefix={props.prefix}
        />
      );
    case "password":
      return (
        <InputFormStyledPassword
          value={props.value}
          onChange={props.onChange}
          prefix={props.prefix}
        />
      );
  }
};

const GenericInputCss = css`
  width: 402px;
  height: 30px;
  border: ${(props) => `1px solid ${props.theme.colors.disabled}`};
  border-radius: 5px;
  margin-bottom: 10px;
  outline: none;
  &:focus {
    border: ${(props) => `1px solid ${props.theme.colors.main}`};
  }
`;

const InputFormStyled = styled(Input)`
  ${GenericInputCss}
`;

const InputFormStyledPassword = styled(Input.Password)`
  ${GenericInputCss}
`;

interface IInputCheckBox {
  checked: boolean;
  onChange: (e: CheckboxChangeEvent) => void;
}

export const InputCheckbox = (props: IInputCheckBox) => {
  return (
    <CheckBoxStyled
      checked={props.checked}
      $isChecked={props.checked}
      onChange={props.onChange}
    />
  );
};

interface ICheckBox {
  $isChecked: boolean;
}

const CheckBoxStyled = styled(Checkbox)<ICheckBox>`
  border-radius: 5px;
  border: none;
  width: 15px;
  height: 15px;
  &::after {
    background-color: ${(props) =>
      props.$isChecked && props.theme.colors.main} !important;
    border-color: ${(props) =>
      props.$isChecked && props.theme.colors.main} !important;
  }
`;
