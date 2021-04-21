import React from "react";
import styled from "styled-components";
import CallToAction from "./_callToAction";

export const Header = () => {
  return (
    <Container>
      <ImgContainer>
        <picture>
          <source media="(min-width: 1600px)" srcSet="twm_header_lg.png" />
          <source media="(min-width: 1110px)" srcSet="twm_header_md.png" />
          <Image src="twm_header_sm.png" />
        </picture>
      </ImgContainer>
      <CallToAction />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: white;
  display: grid;
  grid-template-columns: 17.5% 25% 10% 42.5% 5%;
  width: 100%;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ImgContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  align-self: center;
  justify-self: center;

  @media (max-width: 1100px) {
    margin-bottom: 5vh;
  }
`;
