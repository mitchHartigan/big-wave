import React from "react";
import styled from "styled-components";

export const Subtext = (props) => {
  return <_Subtext alignment={props.alignment}>{props.children}</_Subtext>;
};

const _Subtext = styled.p`
  margin: 20px 0px 20px 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;
`;
