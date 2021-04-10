import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = (props) => {
  const { children, route, override } = props;

  return (
    <Container>
      <Link to={route} style={{ textDecoration: "none" }}>
        <Text style={override}>{children}</Text>
      </Link>
    </Container>
  );
};

const Text = styled.button`
  padding: 5px 10px 5px 10px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  color: ${(props) => props.theme.colors.darkBlue};
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;

  @media (max-width: 1400px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
  white-space: no-wrap;
`;

const Container = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
