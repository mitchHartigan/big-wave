import React from "react";
import styled from "styled-components";
import { FadeIn } from "components/FadeIn";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <Container>
      <FadeIn visible delay="100">
        <Image src="homepage_logo.png" alt="homepage logo" />
      </FadeIn>
      <FadeIn visible delay="250">
        <Title>Quality Reservoir Water.</Title>
      </FadeIn>
      <FadeIn visible delay="350">
        <Subtitle>That's our guarantee here at Big Wave.</Subtitle>
      </FadeIn>
      <FadeIn visible delay="450">
        <Link
          to="scrollTarget"
          spy={true}
          offset={-150}
          delay={0}
          duration={1300}
          smooth={true}
        >
          <Button>Get in touch</Button>
        </Link>
      </FadeIn>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(homepage_hero.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Image = styled.img`
  margin-bottom: 2vh;
  margin-top: -3vh;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Title = styled.div`
  margin: 2vh 0vw 2vh 0vw;
  font-family: ${(props) => props.theme.font};
  font-size: 60px;
  color: white;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
    font-size: ${(props) => props.theme.text.xl};
  }

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.text.lg};
`;

const Subtitle = styled.p`
  margin: 1vh 0vw 3vh 0vw;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.md};
  color: white;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 800px) {
    font-size: ${(props) => props.theme.text.sm};
  }

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.text.xxs};
    margin-bottom: 2vh;
  }
`;

const Button = styled.button`
  min-width: 200px;
  padding: 10px 30px 10px 30px;
  color: ${(props) => props.theme.colors.darkBlue};
  background-color: white;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25);
    transform: translate(0px, -1px);
  }
  transition: box-shadow 100ms ease;
  transition: transform 100ms ease;
  margin-top: 2vh;
`;
