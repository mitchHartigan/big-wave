import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const InactiveNavLink = (props) => {
  const { children, route, override, width, align, styles, logo } = props;

  return (
    <Container width={width} align={align} styles={styles} logo={logo}>
      <Link style={{ textDecoration: "none" }}>
        <Text style={override}>{children}</Text>
      </Link>
    </Container>
  );
};

const Text = styled.button`
  padding: ${(props) => (props.logo ? "0px" : "5px 10px 5px 10px")};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  color: grey;
  cursor: default;
  outline: none;
  border: none;
  background-color: transparent;

  @media (max-width: 1400px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
  white-space: no-wrap;
`;

const Container = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.align ? props.align : "center")};
  ${(props) => props.styles}
`;
