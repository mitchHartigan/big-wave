import React from "react";
import styled from "styled-components";
import { Description } from "./_description/index";

export default function Homepage() {
  return (
    <Container>
      <HeaderFiller />
      <Description />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
`;

const HeaderFiller = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
`;
