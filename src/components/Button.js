import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  return <_Button onClick={props.onClick}>{props.children}</_Button>;
};

const _Button = styled.button`
  min-width: 200px;
  padding: 10px 30px 10px 30px;
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: white;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25);
    transform: translate(0px, -1px);
  }
  transition: box-shadow 100ms ease;
  transition: transform 100ms ease;
`;
