import React from "react";
import styled from "styled-components";
import Navbar from "components/navbar";
import { Header } from "./_header/Header";
import { ProductFeature } from "./_ProductFeature/ProductFeature";

export class ChloramineBoostingSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPos: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this._captureScrollPos);
  }

  _captureScrollPos = () => {
    this.setState({ scrollPos: window.pageYOffset });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this._captureScrollPos);
  }

  render() {
    return (
      <Container>
        <Navbar alwaysDisplay />
        <Header />
        <ProductFeature scrollPos={this.state.scrollPos} />
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  flex-direction: column;
`;
