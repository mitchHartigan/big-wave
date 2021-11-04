import React from "react";
import styled from "styled-components";
import { SocialMediaButton } from "components/navigation/SocialMediaButton";

export const Footer = () => {
  return (
    <Container>
      <Text>Copyright ©2021 Big Wave Water. All rights reserved.</Text>
      <LogoContainer>
        <SocialMediaButton
          href="https://www.linkedin.com/company/big-wave-water-technologies/"
          src="logo_linkedin.png"
          alt="linkedin link"
        />
        <SocialMediaButton
          href="https://www.facebook.com/BIGWAVEWATER"
          src="logo_facebook.png"
          alt="facebook link."
        />

        <SocialMediaButton
          href="https://www.youtube.com/channel/UCU16fVIaRtbfgly9m4bOXTQ"
          src="logo_youtube.png"
          alt="youtube link."
        />
      </LogoContainer>
    </Container>
  );
};

const LogoContainer = styled.div`
  display: flex;
  flex-diretion: row;
  justify-content: space-between;
  margin-right: 15%;
  width: 15%;

  @media (max-width: 600px) {
    visibility: hidden;
  }
`;

const Container = styled.div`
  height: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  margin-top: 6vh;
  box-sizing: border-box;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xxs};
  color: white;
  margin-left: 3vw;

  @media (max-width: 600px) {
    color: transparent;
  }
`;
