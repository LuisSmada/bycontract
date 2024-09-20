import { Modal, Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../Buttons";
import styled from "styled-components";
import { AddIcon } from "../SVGIcons";
import { Label } from "../../panels/loginPage/ConnexionForm";
import { InputForm } from "../Inputs";

interface IModalDocumentProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export const ModalDocument = (props: IModalDocumentProps) => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);
  const [documentName, setDocumentName] = useState<string>("");
  const [typeDocument, setTypeDocument] = useState("");

  const options = [
    {
      label: t("#File"),
      value: "file",
    },
    {
      label: t("#Folder"),
      value: "folder",
    },
  ];

  const selectTypeDocument = ({ target: { value } }: RadioChangeEvent) => {
    setTypeDocument(value);
  };

  const enterLoading = () => {
    setLoading((prevLoading: boolean) => {
      let newLoading = prevLoading;
      newLoading = true;
      return newLoading;
    });

    setTimeout(() => {
      setLoading((prevLoading: boolean) => {
        let newLoading = prevLoading;
        newLoading = false;
        return newLoading;
      });
    }, 6000);
  };

  return (
    <Modal
      title={t("#AddNewDocument")}
      open={props.isModalOpen}
      onOk={props.closeModal}
      onCancel={props.closeModal}
      footer={(_, { OkBtn, CancelBtn }) => (
        <>
          <CancelBtn />
          <PrimaryButton
            loading={loading}
            width="50px"
            style={{
              height: "32px",
              fontSize: "12px",
              width: "auto",
            }}
            onClick={enterLoading}
          >
            <Wrapper>
              Add
              <AddIconStyle />
            </Wrapper>
          </PrimaryButton>
        </>
      )}
    >
      <Label>Nom:</Label>
      <InputForm
        type="text"
        value={documentName}
        onChange={(e) => setDocumentName(e.target.value)}
      />
      {/* <CheckboxLine></CheckboxLine> */}
      <Radio.Group
        options={options}
        onChange={selectTypeDocument}
        value={typeDocument}
      ></Radio.Group>
    </Modal>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 11px;
`;

const AddIconStyle = styled(AddIcon)`
  fill: ${(props) => props.theme.colors.white};
  width: 10px;
  height: 10px;
  margin-left: 5px;
`;

const CheckboxLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
