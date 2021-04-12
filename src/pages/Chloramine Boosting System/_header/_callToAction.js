import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { ScrollButton } from "components/navigation/ScollButton";
import { CenterBlock } from "components/CenterBlock";

export const CallToAction = () => {
  return (
    <Container>
      <Title spanWidth={"20vw"} size="xl">
        Our Chloramine Boosting System.
      </Title>
      <Text>Flexible. Precise. Dependable.</Text>
      <CenterBlock>
        <ScrollButton>View details</ScrollButton>
      </CenterBlock>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
`;

const Text = styled.p`
  margin: 3vh 0px 3vh 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  text-align: center;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  -webkit-font-smoothing: antialiased;
`;
