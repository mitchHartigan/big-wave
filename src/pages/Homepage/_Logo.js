import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <Container>
      <Image src="big_wave_logo_text.png" alt="Big Wave logo, with text." />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-items: center;
  margin-top: 50px;
`;

const Image = styled.img`
  @media (max-width: 600px) {
    height: auto;
    width: 306px;
  }
`;
