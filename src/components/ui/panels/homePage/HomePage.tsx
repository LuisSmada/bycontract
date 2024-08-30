import React from "react";
import { Dashboard } from "./Dashboard";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <Container>
      <Dashboard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
