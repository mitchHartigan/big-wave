import React from "react";
import styled from "styled-components";
import { Summary } from "./_Summary";

export const Header = () => {
  return (
    <Container>
      <Image />
      <Summary />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 30% 5% 40% 10%;
  padding-top: 15vh;
`;

const Image = styled.div`
  background-image: url(study_hero_pomona.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.mainBlue};
  width: 550px;
  height: 370px;
  grid-column: 2 / 3;
  justify-self: end;
  align-self: center;
  box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.25);
`;
