import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { ScrollButton } from "components/navigation/ScollButton";
import { CenterBlock } from "components/CenterBlock";
import { FadeIn } from "components/FadeIn";
import VisibilitySensor from "react-visibility-sensor";

export default class CallToAction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  _display = (visibile) => {
    if (visibile) {
      this.setState({ visible: true });
    }
  };

  render() {
    const { visible } = this.state;

    return (
      <GridItemContainer>
        <VisibilitySensor onChange={this._display}>
          <Container>
            <FadeIn delay="50" visible={visible}>
              <Title spanWidth={"15vw"} size={"xxl"}>
                The Tidal Wave Mixer.
              </Title>
            </FadeIn>

            <FadeIn delay="350" visible={visible}>
              <Text>Lighter. Faster. Competitively Priced.</Text>
            </FadeIn>

            <FadeIn delay="650" visible={visible}>
              <CenterBlock>
                <ScrollButton>View details</ScrollButton>
              </CenterBlock>
            </FadeIn>
          </Container>
        </VisibilitySensor>
      </GridItemContainer>
    );
  }
}

const GridItemContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  align-self: center;
  justify-self: start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1100px) {
    margin: 3vh 0vw 0vw 0vw;
  }
`;

const Text = styled.p`
  margin: 3vh 0px 3vh 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  text-align: center;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 1300px) {
    font-size: ${(props) => props.theme.text.xs};
  }
`;
