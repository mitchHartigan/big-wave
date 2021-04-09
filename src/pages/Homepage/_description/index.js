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
        <TextContainer>
          <Text alignment="center">
            We’re experts at improving your reservoir and tank water quality.
            Located in Oceanside, California, we’ve designed the most advanced
            reservoir mixer and chloramine boosting system for the municipal
            water market.
          </Text>
        </TextContainer>
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

  @media (max-width: 1500px) {
    max-width: 100vw;
  }
`;

const Text = styled.p`
  margin: 4vh 0px 5vh 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: center;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1500px) {
    padding: 0px 20vw 0px 20vw;
  }

  @media (max-width: 600px) {
    padding: 0px 5vw 0px 5vw;
  }
`;
