import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import React from "react";
import { Header } from "./_header/Header";
import Navbar from "components/navbar/index";
import styled from "styled-components";
import { Gallery } from "./gallery/Gallery";
import { Footer } from "components/Footer";

export const CaseStudies = () => {
  return (
    <Container>
      <ScrollToTopOnMount />
      <Header />
      <Gallery />
      <Footer />
      <Navbar alwaysDisplay />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  flex-direction: column;
`;
