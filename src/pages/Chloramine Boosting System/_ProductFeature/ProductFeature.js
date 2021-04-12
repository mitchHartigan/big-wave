import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../_animationData/cbs_controlBoard_flat_data.json";
import VisibilitySensor from "react-visibility-sensor";

const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export class ProductFeature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playAnimation: false,
    };
  }

  _toggleAnimation = (isVisible) => {
    if (!this.state.playAnimation && isVisible) {
      this.setState({ playAnimation: true });
    }
  };

  render() {
    return (
      <VisibilitySensor
        onChange={(isVisible) => {
          this._toggleAnimation(isVisible);
        }}
      >
        <Container>
          <Lottie
            options={defaultOptions}
            width={600}
            isStopped={!this.state.playAnimation}
          />
        </Container>
      </VisibilitySensor>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
