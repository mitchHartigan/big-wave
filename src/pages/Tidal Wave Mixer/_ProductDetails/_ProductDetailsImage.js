import React from "react";
import styled from "styled-components";

export const ProductDetailsImage = () => {
  return (
    <Picture>
      <source media="(min-width: 1700px)" srcSet="tws_productDetails_lg.png" />
      <Image src="tws_productDetails_md.png" />
    </Picture>
  );
};

const Image = styled.img`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
`;

const Picture = styled.picture`
  grid-column: 1 / 2;
  justify-self: end;
  align-self: center;
`;

// small image needs to render in at 800px.
