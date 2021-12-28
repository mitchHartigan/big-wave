import React from "react";
import styled from "styled-components";
import { DownloadForm } from "./_DownloadForm";

export const Summary = () => {
  return (
    <Container>
      <Title>August 2020</Title>
      <Subtitle>9 Million Gallon Concrete Reservoir</Subtitle>
      <Underline />
      <Paragraph>
        In August of 2020 Big Wave Water Technologies installed the Tidal Wave
        Mixer in 9 million gallon concrete reservoir. In order to validate the
        effectiveness of the mixer, temperature sensors were placed through an
        access hatch located on the opposite side of the reservoir from the
        mixer. The temperature sensors are attached to a stainless steel string
        with a stainless steel float on the top and weight on the bottom. The
        bottom sensor is attached to the weight and sits roughly 6 inches off
        the floor of the tank. The middle sensor is 10 feet above the bottom
        sensor, and the top sensor is attached to a float that floats with the
        high water level of the tank. In this case, the top sensor was about 1
        foot below the surface, which is roughly 17 feet above the middle
        sensor.
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
