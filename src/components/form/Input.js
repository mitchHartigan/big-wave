import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  return <_Input onChange={props.handleChange} />;
};

const _Input = styled.input`
  height: 60px;
  padding: 5px 5px 5px 5px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  border: none;
  outline: none;
`;
