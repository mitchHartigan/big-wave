import React from "react";
import styled from "styled-components";
import CallToAction from "./_callToAction";

export const Header = () => {
  return (
    <Container>
      <ImgContainer>
        <picture>
          <source media="(min-width: 1600px)" srcSet="twm_header_lg.png" />
          <source media="(min-width: 1300px)" srcSet="twm_header_md.png" />
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ImgContainer = styled.div`
  margin-right: 5vw;

  @media (max-width: 1100px) {
    margin-right: 0vw;
  }
`;
