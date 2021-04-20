import React from "react";
import styled from "styled-components";

export const BulletPoint = (props) => {
  const { children } = props;

  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.ul`
  margin: 0px;
  padding: 0px;
`;

const Text = styled.li`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: left;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  margin: 1em 0px 1em 1em;
  line-height: 20px;
  list-style: none;

  ::before {
    content: "■";
    font-size: 18px;
    color: ${(props) => props.theme.colors.mainBlue};
    margin-right: 1em;
  }

  @media (max-width: 1550px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;
