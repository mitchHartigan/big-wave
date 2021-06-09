import React from "react";
import styled from "styled-components";
import Navbar from "components/navbar";
import { Header } from "./_header/Header";
import { ProductFeature } from "components/product_feature/ProductFeature";
import controlPanelAnimation from "./_animationData/cbs_controlBoard_flat_data.json";
import elementAnimation from "./_animationData/element_illustration_data.json";
import graphAnimation from "./_animationData/graph_illustration_animation_data.json";
import ProductDetails from "./_ProductDetails/ProductDetails";
import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import { Footer } from "components/Footer";

const animSizes = {
  xl: 500,
  lg: 450,
  md: 350,
  sm: 300,
};

const feature1 = {
  titleText: "Ensures Uniform Water Quality.",
  descriptionText: `
    The CBS maintains uniform water quality throughout the entire
    reservoir by preventing stratification while accurately dosing
    sodium hypochlorite and/or ammonia, reducing the need for frequent
    tank cleaning and decreasing total resevoir maintenance hours.
    `,
  linkDescription: "Read more about the dosing process and our ",
  link: "testing methods here.",
  href: "CBS_Brochure.pdf",
};

const feature2 = {
  titleText: "Minimal Operator Involvement.",
  descriptionText: `
  The CBS system will perform chemical dosing to an operator selected
  set point automatically, reducing the amount of operator oversight needed.
  The CBS control panel works with customer preferred or existing chlorine
  anaylzers, and is reliable, operator friendly, and easy to use.
  `,
  linkDescription: "Read more about this process and ",
  link: "view the benefits of the CBS system here.",
  href: "CBS_Brochure.pdf",
};

const feature3 = {
  titleText: "Accurate Chlorine Residual Measurement.",
  descriptionText: `
  The highly accurate chlorine residual analyzer and its ability to measure
  either Free or Total chlorine residuals allows the CBS to control to the
  operator selected set point. From potable (drinking) water reservoirs to
  standpipes, the CBS helps operators gain control of water quality in both 
  the reservoir and distribution system.
  `,
  linkDescription: "Download and view our ",
  link: "chlorine residual management accuracy tests here.",
  href: "CBS_Brochure.pdf",
};

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
        <ScrollToTopOnMount />
        <Header />
        <ProductFeature
          description={feature1}
          animSource={controlPanelAnimation}
          animSpeed={0.9}
          animSizes={animSizes}
        />

        <ProductFeature
          description={feature2}
          animSource={elementAnimation}
          animSpeed={0.7}
          animSizes={animSizes}
          swap
        />
        <ProductFeature
          description={feature3}
          animSource={graphAnimation}
          animSpeed={0.9}
          animSizes={animSizes}
        />
        <ProductDetails />
        <Footer />
        <Navbar alwaysDisplay />
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  flex-direction: column; ;
`;
