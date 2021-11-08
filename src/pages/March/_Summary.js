import React from "react";
import styled from "styled-components";
import { DownloadForm } from "./_DownloadForm";

export const Summary = () => {
  return (
    <Container>
      <Title>March 2021</Title>
      <Subtitle>6 Million Gallon Reservoir</Subtitle>
      <Underline />
      <Paragraph>
        In March of 2021, Big Wave Water Technologies installed a Tidal Wave
        Mixer in a 6-million-gallon steel constructed reservoir. This agency
        observed a trend of decreased total chlorine residual levels in one of
        their six storage tanks, and often found residual levels that were
        undetectable. This was due to water age caused by low consumer demand.
        The agency attempted to increase total chlorine residual levels by
        manually adding 12.5% sodium hypochlorite but found that method to be
        unsuccessful.
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
