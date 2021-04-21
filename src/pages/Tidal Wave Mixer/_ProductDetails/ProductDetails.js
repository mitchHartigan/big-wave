import React, { Component } from "react";
import { Title } from "components/Title";
import styled from "styled-components";
import { ProductDetailsImage } from "./_ProductDetailsImage";
import { Bullets } from "./_Bullets/Bullets";
import { LinkButton } from "components/navigation/LinkButton";
import { CenterBlock } from "components/CenterBlock";

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
        <Card id="scrollTarget">
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
          <Text>
            Wondering if the Chloramine Boosting System is the right solution
            for your tank?
          </Text>
          <CenterBlock>
            <LinkButton to="/">Get in touch with us</LinkButton>
          </CenterBlock>
        </Card>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2vh 15vw 2vh 15vw;

  @media (max-width: 1400px) {
    padding: 2vh 5vw 2vh 5vw;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 4vh 0vw 4vh 0vw;

  @media (max-width: 800px) {
    padding: 2vh 4vw 3vh 4vw;
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
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Text = styled.p`
  margin: 4vh 0px 4vh 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: center;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;

  @media (max-width: 1550px) {
    font-size: ${(props) => props.theme.text.xxs};
  }

  @media (max-width: 1400px) {
    margin-top: 2vh;
  }
`;
