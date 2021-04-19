import React, { Component } from "react";
import { Title } from "components/Title";
import styled from "styled-components";
import { ProductDetailsImage } from "./_ProductDetailsImage";
import { Bullets } from "./_Bullets/Bullets";

const bulletPoints = [
  "Continuous measurement of water quality.",
  "Control resevoir remotely.",
  "Low power consumption.",
  "Modularly designed, with solar options available.",
  "Proven amperometric reagantless chlorine management.",
  "Compatible with various different disinfection methods.",
];

export default class ProductDetails extends Component {
  render() {
    return (
      <Container>
        <Card>
          <DetailsContainer>
            <Title size="lg">Product Details</Title>
            <Text>
              The CBS was designed to be an easy to use secondary disinfection
              boost system, that significantly improves water quality.
            </Text>
            <FeaturesContainer>
              <ProductDetailsImage />
              <Bullets points={bulletPoints} />
            </FeaturesContainer>
          </DetailsContainer>
        </Card>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2vh 10vw 2vh 10vw;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 2vh 0vw 2vh 0vw;

  @media (max-width: 800px) {
    padding: 0vh 3vw 0vh 3vw;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2vh 0vw 1vh 0vw;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const DetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Text = styled.p`
  margin: 2vh 0px 1vh 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: center;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;

  @media (max-width: 1550px) {
    font-size: ${(props) => props.theme.text.xxs};
  }

  @media (max-width: 800px) {
    text-align: justify;
  }
`;
