import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  return <_Button>{props.children}</_Button>;
};

const _Button = styled.button`
  min-width: 300px;
  padding: 10px 30px 10px 30px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: white;
  font-family: Asap;
  cursor: pointer;
`;
