import React from "react";
import Logo from "../_Logo";
import { Title } from "../../../components/Title";
import { Subtext } from "../../../components/Subtext";
import { CenterBlock } from "../../../components/CenterBlock";
import styled from "styled-components";
import { Products } from "./_products/index";

export const Description = () => {
  return (
    <CenterBlock>
      <Container>
        <Logo />
        <Title size="lg" styles={"margin-top: 50px;"}>
          About Us
        </Title>
        <Subtext alignment="center" styles={"margin: 30px 0px 60px 0px"}>
          We’re experts at improving your reservoir and tank water quality.
          Located in Oceanside, California, we’ve designed the most advanced
          reservoir mixer and chloramine boosting system for the municipal water
          market.
        </Subtext>
        <Products />
      </Container>
    </CenterBlock>
  );
};

const Container = styled.div`
  max-width: 67vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;
