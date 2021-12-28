import React from "react";
import styled from "styled-components";
import { DownloadForm } from "./_DownloadForm";

export const Summary = () => {
  return (
    <Container>
      <Title>Walnut, CA</Title>
      <Subtitle>50 Million Gallons in 28 Reservoirs</Subtitle>
      <Underline />
      <Paragraph>
        The Walnut Valley Water District, located in Walnut, CA, encompasses an
        area of approximately 29 square miles, and serves customers in six
        communities with over 27,000 service connections. The District’s present
        service areas include The City of Diamond Bar, portions of the cities of
        Industry, Pomona, Walnut, and West Covina, and the easterly section of
        the unincorporated area of Rowland Heights. The District is dependent on
        surface water that is transported through two major conveyance systems:
        the 242-mile-long Colorado River Aqueduct and the 444-mile-long State
        Water Project. Walnut stores approximately 50 million gallons of potable
        water daily within their 28 reservoirs.
      </Paragraph>
      <DownloadForm />
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
