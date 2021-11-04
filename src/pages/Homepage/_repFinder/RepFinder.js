import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import InteractiveMap from "./InteractiveMap";
import RepCard from "./RepCard";

export default function RepFinder() {
  return (
    <Container>
      <Title>Representative Finder</Title>
      <InteractiveMap />
      <RepCard imgHeight="161px" imgWidth="337px" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
