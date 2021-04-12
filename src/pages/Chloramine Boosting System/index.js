import React from "react";
import styled from "styled-components";
import Navbar from "components/navbar";
import { Header } from "./_header/Header";

export const ChloramineBoostingSystem = () => {
  return (
    <Container>
      <Navbar alwaysDisplay />
      <Header />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  flex-direction: column;
`;
