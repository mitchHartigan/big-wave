import React, { Component } from "react";
import { Title } from "components/Title";
import styled from "styled-components";
import { ProductDetailsImage } from "./_ProductDetailsImage";
import { Bullets } from "./_Bullets/Bullets";
import { LinkButton } from "components/navigation/LinkButton";
import { CenterBlock } from "components/CenterBlock";
import { FadeIn } from "components/FadeIn";
import VisibilitySensor from "react-visibility-sensor";

const bulletPoints = [
  "Performs in tanks of up to 10 million gallons or more.",
  "Reduces Nitrification in chloraminated systems.",
  "Reduces bacteria growth and lowers DBP's (disinfection by-products).",
  "Helps prevent ice damage in cold climates.",
  "Lowered through hatch, no diver required.",
  "Exceeds mixing requirements for addition to chemistry.",
];

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  _display = (visible) => {
    if (visible) {
      this.setState({ visible: true });
    }
  };

  render() {
    const { visible } = this.state;

    return (
      <FadeIn visible={visible}>
        <Container>
          <Card id="scrollTarget">
            <VisibilitySensor onChange={this._display}>
              <Title size="lg">Product Details</Title>
            </VisibilitySensor>
            <Text>
              The Tidal Wave Mixer was designed to vastly improve water quality
              and storage tank longevity. Some of the key features of the mixer
              include:
            </Text>
            <FeaturesContainer>
              <ProductDetailsImage />
              <Bullets points={bulletPoints} />
            </FeaturesContainer>
            <Text>
              Wondering if the Tidal Wave Mixer is the right solution for your
              tank?
            </Text>
            <CenterBlock>
              <LinkButton to="/">Get in touch with us</LinkButton>
            </CenterBlock>
          </Card>
        </Container>
      </FadeIn>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2vh 0vw 2vh 0vw;

  @media (max-width: 1400px) {
    padding: 2vh 5vw 2vh 5vw;
  }
`;

const Card = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 2px 3px 9px 2px rgba(0, 0, 0, 0.13);
  padding: 4vh 0vw 4vh 0vw;

  @media (max-width: 1400px) {
    padding: 2vh 4vw 3vh 4vw;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 4vh 5vw 4vh 5vw;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 5% 50%;
  width: 100%;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
