import React from "react";
import styled from "styled-components";
import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar/index";
import { Header } from "./_Header";

export const Pomona = () => {
  return (
    <Container>
      <ScrollToTopOnMount />
      <Navbar alwaysDisplay />
      <Header />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
