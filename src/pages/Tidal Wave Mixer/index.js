import React from "react";
import styled from "styled-components";
import Navbar from "components/navbar/index";
import { Header } from "./_header/Header";
import { ProductFeature } from "components/product_feature/ProductFeature";
import ProductDetails from "./_ProductDetails/ProductDetails";
import { ScrollToTopOnMount } from "components/ScrollToTopOnMount";
import checklistAnimation from "./_animationData/checklist_animation_data.json";
import gradientAnimation from "./_animationData/gradient_animation_data.json";
import mixerAnimation from "./_animationData/tidal_wave_mixer_above_data.json";
import { TechnicalSpecs } from "./_technicalSpecs/_TechnicalSpecs";
import { Footer } from "components/Footer";

const gradientAnimationSizes = {
  xl: 450,
  lg: 400,
  md: 350,
  sm: 300,
};

const checklistAnimationSizes = {
  xl: 250,
  lg: 200,
  md: 175,
  sm: 150,
};

const mixerAnimationSizes = {
  xl: 400,
  lg: 350,
  md: 300,
  sm: 250,
};

const feature1 = {
  titleText: "Eliminates Thermal and Chemical Stratification.",
  descriptionText: `
  The unique active mixing process of the Tidal Wave
  Mixer will swiftly disintegrate stagnated water layers
  and minimize the thermal stratification and thermocline
  formation. The process will circulate colder water up into
  the storage tank in order to maintain consistent water
  temperature.
  `,
  linkDescription: "See how the ",
  link: "Tidal Wave Mixer eliminates stratification here.",
  href: "ThermalStratification.pdf",
};

const feature2 = {
  titleText: "Rigorously Tested and Certified.",
  descriptionText: `
  Tidal Wave Mixer for potable (drinking) water is tested for
  quality to stringent standards (UL Listed, NSF/ANSI 61 and 
  NSF/ANSI 372) and has obtained industry-leading certifications.
  This powerful active water mixer is designed for use in drinking
  water storage tanks of multiple capacities. It features a robust
  High Density Poly Ethelene (HDPE) that ensures superior resilience,
  and it comes with advances safety features.`,
  linkDescription: "Download and ",
  link: "view our NSF/ANSI certification here.",
  href: "Mixer_ULCert.pdf",
};

const feature3 = {
  titleText: "Fast, Efficient Tank Mixing.",
  descriptionText: `
  At Big Wave Water Technologies, we understand
  the importance of fast mixing in the potable (drinking)
  water tanks. Our Tidal Wave Mixer has the ability to
  respond to unforeseen occurrences that necessitate immediate
  mixing to take place. Unlike many other conventional mixers,
  the advanced mixing process of Tidal Wave Mixer can achieve 
  100% water mixing in high-volume tanks in a very short amount of time.
  `,
  linkDescription: "View a graph of the ",
  link: "Tidal Wave Mixer's efficiency here.",
  href: "FastEfficientMixing.pdf",
};

export const TidalWaveMixer = () => {
  return (
    <Container>
      <ScrollToTopOnMount />
      <Header />
      <ProductFeature
        description={feature1}
        animSource={gradientAnimation}
        animSpeed={0.9}
        animSizes={gradientAnimationSizes}
      />
      <ProductFeature
        description={feature2}
        animSource={checklistAnimation}
        animSpeed={0.9}
        animSizes={checklistAnimationSizes}
        swap
      />
      <ProductFeature
        description={feature3}
        animSource={mixerAnimation}
        animSpeed={1}
        animSizes={mixerAnimationSizes}
      />
      <ProductDetails />
      <TechnicalSpecs />
      <Footer />
      <Navbar alwaysDisplay />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  flex-direction: column; ;
`;
