import React from "react";
import styled from "styled-components";
import { CallToAction } from "./_callToAction";

export const Header = () => {
  return (
    <Container>
      <Image src="cbs_header.png" />
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
`;

const Image = styled.img`
  width: 510px;
  height: 439px;
  margin-right: 5vw;
`;
