import React from "react";
import styled from "styled-components";

export const _Hero = () => {
  return <Container></Container>;
};

const Container = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.mainBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
