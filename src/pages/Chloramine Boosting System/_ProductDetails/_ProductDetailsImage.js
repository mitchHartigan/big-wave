import React from "react";
import styled from "styled-components";

export const ProductDetailsImage = () => {
  return (
    <Picture>
      <source media="(min-width: 1700px)" srcSet="cbs_productDetails_lg.png" />
      <Image src="cbs_productDetails_md.png" />
    </Picture>
  );
};

const Image = styled.img`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
`;

const Picture = styled.picture`
  margin: 0vh 0vw 2vh 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1600px) {
    margin-left: 5vw;
  }
`;

// small image needs to render in at 800px.
