import React from "react";
import styled, { keyframes } from "styled-components";
import Lottie from "react-lottie";
import VisibilitySensor from "react-visibility-sensor";
import { Description } from "./_Description";
import { FadeIn } from "components/FadeIn";

export class ProductFeature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      windowSize: window.innerWidth,
      animationSize: 500,
      playAnimation: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", this._updateWindowDimensions);
    this._resizeAnimation();
  };

  // used when the component loads for the first time, and every time the window resizes.
  _resizeAnimation = () => {
    const { windowSize } = this.state;

    if (windowSize >= 1600) {
      this.setState({ animationSize: 500 });
    }

    if (windowSize <= 1600 && windowSize >= 1200) {
      this.setState({ animationSize: 450 });
    }

    if (windowSize >= 600 && windowSize <= 1200) {
      this.setState({ animationSize: 350 });
    }
    if (windowSize <= 600) {
      this.setState({ animationSize: 300 });
    }
  };

  // removes the event listener to stop memory leaks.
  componentWillUnmount = () => {
    window.removeEventListener("resize", this._updateWindowDimensions);
  };

  //
  _updateWindowDimensions = () => {
    this.setState({ windowSize: window.innerWidth }, () => {
      this._resizeAnimation();
    });
  };

  _display = (visible) => {
    if (visible) {
      this.setState({ visible: true }, () => {
        setTimeout(() => this.setState({ playAnimation: true }), 900);
      });
    }
  };

  render() {
    const { animationSize, visible, playAnimation } = this.state;
    const { description, animSource, animSpeed, swap } = this.props;

    // this is an object that the 'options' prop in the Lottie component expects.
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animSource,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    };

    return (
      <VisibilitySensor onChange={this._display}>
        <Container swap={swap}>
          {swap && (
            <Description data={description} swap={swap} visible={visible} />
          )}

          <AnimationContainer id="animationContainer" swap={swap}>
            <FadeIn delay="500" visible={visible}>
              <Lottie
                options={defaultOptions}
                width={animationSize}
                isStopped={!playAnimation}
                speed={animSpeed}
              />
            </FadeIn>
          </AnimationContainer>

          {!swap && (
            <Description data={description} swap={swap} visible={visible} />
          )}
        </Container>
      </VisibilitySensor>
    );
  }
}

const fadeIn = keyframes`
  from {
    transform: translate(0, 20px);
  }

  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10vh 0vw 10vh 0vw;

  @media (max-width: 1330px) {
    justify-content: center;
    flex-direction: ${(props) => (props.swap ? "column-reverse" : "column")};
  }
`;

const AnimationContainer = styled.div`
  margin: ${(props) => (props.swap ? "0vh 17vw 0vh 5vw" : "0vh 5vw 0vh 15vw")};
  @media (max-width: 1600px) {
    margin: ${(props) =>
      props.swap ? "0vh 10em 0vh 5vw" : "0vh 5vw 0vh 15vw"};
  }

  @media (max-width: 1330px) {
    margin: 0vh 0vw 4vh 0vw;
  }
`;
