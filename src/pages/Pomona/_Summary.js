import React from "react";
import styled from "styled-components";

export const Summary = () => {
  return (
    <Container>
      <Title>Pomona, CA</Title>
      <Subtitle>Tank Sizes: 400,000 - 9.5 million gallons</Subtitle>
      <Underline />
      <Paragraph>
        Pomona is a city located between the Inland Empire and the San Gabriel
        Valley in Los Angeles County, CA. The city imports potable water from
        the San Gabriel Mountains via water treatment plants and the Northern
        California State Water Project, along with 30 local wells. From those
        water sources, the city provides approximately 24-million gallons per
        day to over 30,000 service connections through their 421- mile
        distribution system. The city has approximately 80 million gallons of
        storage capacity spanning through 22 reservoirs ranging in size from
        400,000 gallons to 9.5 million gallons. The city adds additional free
        chlorine to maintain required chlorine residuals.
      </Paragraph>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4 / 5;
  align-self: center;

  @media (max-width: 1350px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xl};
  color: ${(props) => props.theme.colors.darkBlue};
  -webkit-font-smoothing: antialiased;
  margin-bottom: 7px;
  font-weight: normal;
  text-align: left;

  @media (max-width: 1350px) {
    text-align: center;
  }
`;

const Underline = styled.span`
  height: 3px;
  width: 20vw;
  background: ${(props) => props.theme.colors.mainBlue};
  margin-top: 7px;
`;

const Subtitle = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  color: ${(props) => props.theme.colors.darkBlue};
  -webkit-font-smoothing: antialiased;
  margin-bottom: 7px;
  margin-top: 7px;
  font-weight: normal;
  text-align: left;
  font-style: italic;
`;

const Paragraph = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  color: ${(props) => props.theme.colors.darkBlue};
  -webkit-font-smoothing: antialiased;
  margin-bottom: 7px;
  font-weight: normal;
  text-align: left;
  line-height: 28px;
  max-width: 40vw;

  @media (max-width: 1350px) {
    text-align: center;
    max-width: 600px;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`;
