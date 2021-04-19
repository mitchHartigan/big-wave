import React from "react";
import styled from "styled-components";

export const BulletPoint = (props) => {
  const { children } = props;

  return (
    <Container>
      <Bullet />
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: center;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  margin-left: 1em;
  white-space: nowrap;

  @media (max-width: 1550px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const Bullet = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.mainBlue};
`;
