import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <Text>Copyright ©2021 Big Wave Water. All rights reserved.</Text>
    </Container>
  );
};

const Container = styled.div`
  height: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  margin-top: 6vh;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xxs};
  color: white;
  margin-left: 3vw;

  @media (max-width: 600px) {
    color: transparent;
  }
`;
