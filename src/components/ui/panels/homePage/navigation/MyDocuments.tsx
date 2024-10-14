import { DocumentContextBar } from "../../../common/contextBars/ContextBars";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

export const MyDocuments = () => {
  return (
    <>
      <DocumentContextBar />
      <ViewPanel id="document-view-panel">
        <Outlet />
      </ViewPanel>
    </>
  );
};

const ViewPanel = styled.div`
  display: flex;
  padding: 0 11px;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  height: 100%;
`;
