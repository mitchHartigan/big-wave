import React, { Children } from "react";
import styled, { keyframes } from "styled-components";
import Lottie from "react-lottie";
import animationData from "../_animationData/cbs_controlBoard_flat_data.json";
import VisibilitySensor from "react-visibility-sensor";
import { Description } from "./_Description";

export class ProductFeature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderFeatureBlock: false,
      playAnimation: false,
      windowSize: window.innerWidth,
      animationSize: 500,
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

  _fadeIn = (isVisible) => {
    if (!this.state.playAnimation && isVisible) {
      this.setState({ renderFeatureBlock: true }, () => {
        setTimeout(() => this.setState({ playAnimation: true }), 600);
      });
    }
  };

  render() {
    const { playAnimation, renderFeatureBlock, animationSize } = this.state;
    const { description, animSource, animSpeed, swap } = this.props;

    // this is an object that the 'options' prop in the Lottie component expects.
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animSource, //this.props.animationData
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    };

    return (
      <VisibilitySensor
        onChange={(isVisible) => {
          this._fadeIn(isVisible);
        }}
      >
        <Container swap={swap}>
          {swap && <Description data={description} swap={swap} />}
          <AnimationContainer
            id="animationContainer"
            visible={renderFeatureBlock}
            swap={swap}
          >
            <Lottie
              options={defaultOptions}
              width={animationSize}
              isStopped={!playAnimation}
              speed={animSpeed} // this.props.animationSpeed
            />
          </AnimationContainer>

          {!swap && <Description data={description} swap={swap} />}
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
  opacity: 0;
  animation: ${(props) => (props.visible ? fadeIn : "")};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @media (max-width: 1600px) {
    margin: ${(props) =>
      props.swap ? "0vh 10em 0vh 5vw" : "0vh 5vw 0vh 15vw"};
  }

  @media (max-width: 1330px) {
    margin: 0vh 0vw 4vh 0vw;
  }
`;
