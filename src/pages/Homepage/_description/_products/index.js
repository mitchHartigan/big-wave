import React from "react";
import styled from "styled-components";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  return (
    <Container>
      <ProductCard
        imgURL="product_card_cbs.png"
        imgAlt="The Chloramine Boosting System."
        title="Chloramine Boosting System"
        text={`A flexible, precise, and 
             dependable system for maintaining total
             chlorine residual in water reservoirs.
            `}
        link="/ChloramineBoostingSystem"
      />
      <ProductCard
        imgURL="product_card_tidal_wave.png"
        imgAlt="The Tidal Wave Mixer."
        title="Tidal Wave Mixer"
        text={`Our cutting edge active water mixer.
             Designed to vastly improve water quality
             and storage tank longevity.
             `}
        link="/TidalWaveMixer"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
