import React from "react";
import styled from "styled-components";
import Navbar from "components/navbar/index";
import { Description } from "./_description/index";
import Contact from "./_contact/index";
import { Footer } from "components/Footer";

export default function Homepage() {
  return (
    <Container>
      <Navbar />
      <HeaderFiller />
      <Description />
      <Contact />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  flex-direction: column;
`;

const HeaderFiller = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
`;
