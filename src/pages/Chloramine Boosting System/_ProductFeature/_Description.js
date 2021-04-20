import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { FadeIn } from "components/FadeIn";
import { LinkText } from "./_LinkText";

/**
 * @param props
 * @param props.titleText = The title of the feature.
 * @param props.descriptionText - Paragraph of descriptive text about this feature. Under the span.
 * @param props.linkDescription - Newline description line, outside the <a> tag.
 * @param props.link - text to be displayed inside the <a> tag.
 * @param props.href - href of the link.
 *
 */

export const Description = (props) => {
  const {
    titleText,
    descriptionText,
    linkDescription,
    link,
    href,
  } = props.data;
  const { swap, visible } = props;

  return (
    <Container swap={swap}>
      <FadeIn delay="0" visible={visible}>
        <Title
          spanWidth={adaptSpanWidth}
          alignTitle="flex-start"
          styles={adaptTitleAlignment}
        >
          {titleText}
        </Title>
      </FadeIn>
      <FadeIn delay="250" visible={visible}>
        <TextContainer>
          <Subtext>{descriptionText}</Subtext>
          <LinkText text={linkDescription} href={href}>
            {link}
          </LinkText>
        </TextContainer>
      </FadeIn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 34vw;
  margin: ${(props) => (props.swap ? "0vh 5vw 0vh 15vw" : "0vh 10vw 0vh 5vw")};
  box-sizing: border-box;

  @media (max-width: 1330px) {
    margin: 4vh 0vw 0vh 0vw;
    max-width: none;
    padding: 0vh 15vw 0vh 15vw;
  }

  @media (max-width: 800px) {
    padding: 0vh 10vw 0vh 10vw;
  }
`;

const Subtext = styled.p`
  margin: 2vh 0px 1vh 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 1700px) {
    font-size: ${(props) => props.theme.text.xxs};
  }

  @media (max-width: 1330px) {
    text-align: center;
    margin-top: 3vh;
  }

  @media (max-width: 600px) {
    text-align: justify;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const adaptTitleAlignment = () => {
  let breakpoint = window.matchMedia("(max-width: 1330px)");

  if (breakpoint.matches) {
    // window is smaller than 1400px.
    return { alignItems: "center" };
  }
  // window is larger than 1400px.
  return { alignItems: "flex-start" };
};

const adaptSpanWidth = () => {
  let breakpoint = window.matchMedia("(max-width: 1330px)");

  if (breakpoint.matches) {
    return "15vw";
  }
  return "6vw";
};
