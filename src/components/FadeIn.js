import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import styled, { keyframes } from "styled-components";

/**
 * @param props
 * @param props.delay - ms to delay the fade animation by.
 * @param props.children - element to fade in.
 */

export default class FadeIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  _setVisible = (isVisible) => {
    console.log("setVisible called");
    if (isVisible) {
      console.log("set to visible!");
      this.setState({ visible: true });
    }
  };

  render() {
    const { children, delay } = this.props;

    return (
      <VisibilitySensor onChange={(isVisible) => this._setVisible(isVisible)}>
        <FadeWrapper visible={this.state.visible} delay={delay}>
          {children}
        </FadeWrapper>
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

const FadeWrapper = styled.div`
  opacity: 0;
  animation: ${(props) => (props.visible ? fadeIn : "")};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.delay}ms;
  width: 100%;
`;
