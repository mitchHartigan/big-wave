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
  display: flex;
  flex-direction: column;
  margin: 0vh 0vw 0vh 0vw;
  align-items: flex-start;
`;
