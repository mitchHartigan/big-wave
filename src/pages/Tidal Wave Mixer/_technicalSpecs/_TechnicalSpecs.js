import React from "react";
import styled from "styled-components";
import { Spec } from "./_Spec";
import { Title } from "components/Title";
import VisibilitySensor from "react-visibility-sensor";
import { FadeIn } from "components/FadeIn";

export class TechnicalSpecs extends React.Component {
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
          <Card>
            <VisibilitySensor onChange={this._display}>
              <Title
                size="lg"
                align="center"
                spanWidth="8vw"
                styles={TitleStylesOverride}
              >
                Technical Specifications
              </Title>
            </VisibilitySensor>
            <Spec name="Control Center Power:">
              120 VAC / 1Ph / 60Hz, 20 amp circuit
            </Spec>
            <Spec name="Motor Type:">
              NSF 61, 1.5HP, 230 VAC, water-filled, water-lubricated
            </Spec>
            <Spec name="RPM:">3100</Spec>
            <Spec name="Power Draw:">14 amps, 1800 watts</Spec>
            <Spec name="Footprint Diameter:">23" (58.42 cm)</Spec>
            <Spec name="Height:">30.75” (78.10 cm)</Spec>

            <Spec name="Mixer Assembly Weight:">35 lbs. (15.87 kg)</Spec>
            <Spec name="Control Center Dimensions:">
              40 lbs. (18.14 kg) (20” x 16” x 6” / 50.8 cm x 40.64 cm x 15.24
              cm)
            </Spec>
            <Spec name="Control Center Material:">
              Powder-coated steel, Type 3R enclosure
            </Spec>
            <Spec name="Stand Material:">HDPE</Spec>
            <Spec name="Motor Seals Material:">
              Chlorine/chloramine-resistant NBR rubber
            </Spec>
            <Spec name="Wiring:">
              NSF 61 & UL-listed submersible pump cable
            </Spec>
            <DownloadButton href="spec_TidalWaveMixer.docx" target="_blank">
              Download the full Tidal Wave Mixer Specifications (.docx).
            </DownloadButton>
          </Card>
        </Container>
      </FadeIn>
    );
  }
}

const TitleStylesOverride = {
  marginBottom: "4vh",
};

const DownloadButton = styled.a`
  padding: 10px 30px 10px 30px;
  margin: 6vh 0vw 2vh 0vw;
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

const Container = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 4vh 12% 4vh 12%;
  min-width: 600px;
  width: 70%;
  box-shadow: 2px 3px 9px 2px rgba(0, 0, 0, 0.13);
  border-radius: 2px;
  box-sizing: border-box;

  @media (max-width: 1700px) {
    width: 85%;
  }

  @media (max-width: 1180px) {
    width: 90%;
    padding: 4vh 5% 4vh 5%;
  }

  @media (max-width: 700px) {
    width: 90%;
    min-width: 10vw;
  }
`;
