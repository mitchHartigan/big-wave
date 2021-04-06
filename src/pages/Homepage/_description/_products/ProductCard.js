import React from "react";
import syled from "styled-components";
import {Button} from '@components/Button'

export const ProductCard = () => {
  return (
    <Container>
      <Image />
      <Button />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  width: 300px;
`;

const Image = styled.img``;

 