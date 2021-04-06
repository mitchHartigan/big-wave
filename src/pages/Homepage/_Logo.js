import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <Container>
      <Image src="big_wave_logo_text.png" alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-items: center;
`;

const Image = styled.img``;
