import React from "react";
import styled from "styled-components";
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
      animSizes: {},
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", this._updateWindowDimensions);
    this._resizeAnimation();
  };

  // used when the component loads for the first time, and every time the window resizes.
  _resizeAnimation = (animSizes) => {
    const { windowSize } = this.state;
    const { xl, lg, md, sm } = this.props.animSizes;

    if (windowSize >= 1600) {
      this.setState({ animationSize: xl });
    }

    if (windowSize <= 1600 && windowSize >= 1200) {
      this.setState({ animationSize: lg });
    }

    if (windowSize >= 600 && windowSize <= 1200) {
      this.setState({ animationSize: md });
    }
    if (windowSize <= 600) {
      this.setState({ animationSize: sm });
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

  // set the container to visible, so the text will start fading in. Wait
  // for 900 ms, then start playing the animation (so that it fades in with
  // the rest of the text, THEN animates.)
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
      <Container swap={swap}>
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

        <Description
          data={description}
          swap={swap}
          visible={visible}
          toggleVisible={this._display}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.swap ? "16% 35% 11% 25% 13%" : "16% 25% 11% 35% 13%"};
  grid-template-rows: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10vh 0vw 10vh 0vw;

  @media (max-width: 1400px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const AnimationContainer = styled.div`
  grid-column: ${(props) => (props.swap ? "4 / 5" : "2 / 3")};
  align-self: center;
  justify-self: ${(props) => (props.swap ? "center" : "center")};

  @media (max-width: 1400px) {
    margin-bottom: 4vh;
  }
`;
