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

export const ProductCard = (props) => {
  return (
    <Container>
      <Image src={props.imgURL} alt={props.imgAlt} />
      <Title size="md" >{props.title}</Title>
      <Subtext alignment="center" size="xs">
        {props.text}
      </Subtext>
      <CenterBlock>
        <LinkButton to={props.link}>Learn more</LinkButton>
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

  @media (max-width: 1800px) {
    width: 400px;
    height: 400px;
  }
`;

const Image = styled.img`
  align-self: center;
  margin-bottom: 20px;
`;
