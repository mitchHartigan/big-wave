import React from "react";
import styled from "styled-components";
import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import Navbar from "components/navbar/index";
import { Header } from "./_Header";

export const August = () => {
  return (
    <Container>
      <ScrollToTopOnMount />
      <Header />
      <Navbar alwaysDisplay />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
