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
      console.log("should be visible");
      this.setState({ visible: true });
    }
  };

  render() {
    const { visible } = this.state;

    return (
      <VisibilitySensor onChange={this._display}>
        <Container>
          <FadeIn delay="50" visible={visible}>
            <Title spanWidth={"20vw"} size={"xl"}>
              Our Chloramine Boosting System.
            </Title>
          </FadeIn>

          <FadeIn delay="350" visible={visible}>
            <Text>Flexible. Precise. Dependable.</Text>
          </FadeIn>

          <FadeIn delay="650" visible={visible}>
            <CenterBlock>
              <ScrollButton>View details</ScrollButton>
            </CenterBlock>
          </FadeIn>
        </Container>
      </VisibilitySensor>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;

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
`;

function _adaptTitleSize() {
  let breakpoint = window.matchMedia("(max-width: 1200px)");

  if (breakpoint.matches) {
    // window is smaller than 800px.
    console.log("breakpoin hit");
    return "xl";
  } else {
    return "xxs";
  }
}

const adaptSpanWidth = () => {
  let breakpoint = window.matchMedia("(max-width: 1330px)");

  if (breakpoint.matches) {
    return "15vw";
  }
  return "6vw";
};
