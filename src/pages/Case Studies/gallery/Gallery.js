import React from "react";
import styled from "styled-components";
import { Study } from "./_Study";

const caseStudies = [
  {
    title: "May 2021",
    backgroundImage: "study_hero_walnut.png",
    link: "walnut",
  },
  {
    title: "August 2020",
    link: "august",
  },
  {
    title: "March 2021",
    link: "march",
  },
];

export const Gallery = () => {
  return (
    <Container id="scrollTarget">
      {caseStudies.map((study) => {
        const { title, backgroundImage, link } = study;
        return (
          <Study title={title} backgroundImage={backgroundImage} link={link} />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  padding: 8vh 15vw 4vh 15vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-around;

  @media (max-width: 1850px) {
    padding: 8vh 9vw 4vh 9vw;
  }

  @media (max-width: 1550px) {
    padding: 8vh 5vw 4vh 5vw;
  }
`;
