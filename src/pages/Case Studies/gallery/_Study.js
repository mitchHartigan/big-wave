import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Study = (props) => {
  const history = useHistory();

  const { title, backgroundImage, link } = props;

  return (
    <Container
      backgroundImage={backgroundImage}
      onClick={() => history.push(link, { from: "casestudies" })}
    >
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.mainBlue};
  width: 550px;
  height: 325px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4vh 2vw 4vh 2vw;
  box-sizing: border-box;

  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transform: translate (0px, 0px);

  &: hover {
    box-shadow: 0px 4px 4px 2px rgba(0, 127, 255, 0.2);
    transform: translate(0px, -2px);
    transition: transform 150ms ease;
  }
  transition: box-shadow 150ms ease;
  transition: tranform 150ms ease;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.md};
  color: ${(props) => props.theme.colors.darkBlue};
  background-color: white;
  padding: 10px 60px 10px 60px;
  box-sizing: border-box;
  font-weight: bold;
`;
