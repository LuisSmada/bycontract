import styled from "styled-components";
import { Dashboard } from "./Dashboard";

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
