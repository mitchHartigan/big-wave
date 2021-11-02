import React from "react";
import styled from "styled-components";

import Navbar from "components/navbar/index";
import { Description } from "./_description/index";
import Contact from "./_contact/index";
import { Footer } from "components/Footer";
import { Hero } from "./_Hero";
import InteractiveMap from "./_repFinder/InteractiveMap";

export default function Homepage() {
  return (
    <Container>
      <Hero />
      <Description />
      <Contact />
      <InteractiveMap />
      <Footer />
      <Navbar />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  flex-direction: column;
`;
