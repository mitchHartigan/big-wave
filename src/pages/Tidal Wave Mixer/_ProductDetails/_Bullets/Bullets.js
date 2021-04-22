import React from "react";
import styled from "styled-components";
import { BulletPoint } from "./_BulletPoint";

export const Bullets = (props) => {
  const { points } = props;

  return (
    <Container>
      {points.map((point) => {
        return <BulletPoint>{point}</BulletPoint>;
      })}
    </Container>
  );
};

const Container = styled.div`
  grid-column: 3 / 4;
  justify-self: start;
  align-self: center;

  @media (max-width: 1400px) {
    margin-top: 2vh;
  }
`;
