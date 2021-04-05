import React from "react";
import styled from "styled-components";

export default function Homepage() {
  return <Container></Container>;
}

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.paleBlue};
  height: 100vh;
`;
