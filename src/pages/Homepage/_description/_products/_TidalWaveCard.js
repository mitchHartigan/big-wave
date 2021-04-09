import React from "react";
import styled from "styled-components";
import { LinkButton } from "components/navigation/LinkButton";
import { Title } from "components/Title";
import { CenterBlock } from "components/CenterBlock";

/**
 * Renders a card for each Big Wave Product.
 * @param props
 * @param props.imgURL - product image url
 * @param props.imgAlt - product image alt
 * @param props.title - underlined product title, displayed below image.
 * @param props.link - route of product page, that button on this card links to.
 *
 * @augments {Component<Props, State>}
 */

export const TidalWaveCard = (props) => {
  return (
    <Container>
      <Image
        src="product_card_tidal_wave.png"
        alt="Tidal Wave Mixer graphic."
      />
      <Title size="md">Tidal Wave Mixer</Title>
      <Text alignment="center">
        Our cutting edge active water mixer. Designed to vastly improve water
        quality and storage tank longevity.
      </Text>
      <CenterBlock>
        <LinkButton to="/TidalWaveMixer">Learn more</LinkButton>
      </CenterBlock>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 0px 50px 0px 50px;
  justify-content: center;
  border-radius: 2px;
  margin: 0px 3vh 0px 0px;

  @media (max-width: 1800px) {
    width: 400px;
    height: 400px;
    margin: 0px 0px 3vh 0px;
    padding: 20px 50px 20px 50px;
  }

  @media (max-width: 600px) {
    width: 90vw;
    height: auto;
    box-sizing: border-box;
    padding: 20px 30px 20px 30px;
  }
`;

const Text = styled.p`
  margin: 20px 0px 20px 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 1800px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const Image = styled.img`
  align-self: center;
  margin-bottom: 20px;

  @media (max-width: 1800px) {
    width: 133px;
    height: auto;
  }
`;
