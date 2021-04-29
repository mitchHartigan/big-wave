import React, { Component } from "react";
import { Title } from "components/Title";
import styled from "styled-components";
import { ProductDetailsImage } from "./_ProductDetailsImage";
import { Bullets } from "./_Bullets/Bullets";
import { LinkButton } from "components/navigation/LinkButton";
import { CenterBlock } from "components/CenterBlock";
import VisibilitySensor from "react-visibility-sensor";
import { FadeIn } from "components/FadeIn";

const bulletPoints = [
  "Maintain uniform water quality throughout the reservoir.",
  "Continuous measurement of water quality.",
  "Decrease in maintenance hours.",
  "Chemical dosing control to operator set point.",
  "Portable systems available.",
  "Guaranteed results.",
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
            <DetailsContainer>
              <VisibilitySensor onChange={this._display}>
                <Title size="lg">Product Details</Title>
              </VisibilitySensor>
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
            <DownloadButton
              href="spec_ChloramineBoostingSystem.docx"
              target="_blank"
            >
              Download the full Chloramine Boosting System Specifications
              (.docx).
            </DownloadButton>
            <OrText> or </OrText>
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

const OrText = styled.p`
  margin: 1vh 0px 2vh 0px;
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

const DownloadButton = styled.a`
  padding: 10px 30px 10px 30px;
  margin: 0vh 0vw 2vh 0vw;
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: white;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25);
    transform: translate(0px, -1px);
  }
  transition: box-shadow 100ms ease;
  transition: transform 100ms ease;
`;
