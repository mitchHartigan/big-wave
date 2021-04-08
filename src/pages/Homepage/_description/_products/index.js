import React from "react";
import styled from "styled-components";
import { ChloramineCard } from "./_ChloramineCard";
import { TidalWaveCard } from "./_TidalWaveCard";

export const Products = () => {
  return (
    <Container>
      <TidalWaveCard />
      <ChloramineCard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
  }
`;
