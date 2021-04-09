import React from "react";
import styled from "styled-components";
import { LinkButton } from "components/navigation/LinkButton";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
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

export const ChloramineCard = (props) => {
  return (
    <Container>
      <Image
        src="product_card_cbs.png"
        alt="Chloramine Boosting System graphic."
      />
      <Title size="md" alignTitle="center">
        Chloramine Boosting System
      </Title>
      <Text alignment="center">
        A flexible, precise, and dependable system for maintaining total
        chlorine residual in water reservoirs.
      </Text>
      <CenterBlock>
        <LinkButton to="/ChloramineBoostingSystem">Learn more</LinkButton>
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
  margin: 0px 0px 0px 3vh;

  @media (max-width: 1800px) {
    width: 400px;
    height: 400px;
    padding: 20px 50px 20px 50px;
  }

  @media (max-width: 1500px) {
    margin: 3vh 0px 0px 0px;
  }

  @media (max-width: 600px) {
    width: 90vw;
    height: auto;
    box-sizing: border-box;
    padding: 20px 10px 20px 10px;
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
    width: 200px;
    height: auto;
  }
`;
