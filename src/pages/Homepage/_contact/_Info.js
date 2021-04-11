import React from "react";
import styled from "styled-components";

/**
 * Blue text that displays contact information, such as a phone number or email,
 * next to an icon.
 *
 * @params
 * @param imgURL - url of the icon.
 * @param imgAlt - alt description for the icon.
 * @param text - the contact information (ie, '949 449 5453')
 */

export const Info = (props) => {
  const { imgURL, imgAlt, text, href } = props;

  return (
    <Container>
      <Icon src={imgURL} alt={imgAlt} />
      <Detail href={href}>{text}</Detail>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px 40px 0px 40px;

  @media (max-width: 800px) {
    margin: 2vh 2vw 2.5vh 2vw;
  }
`;

const Detail = styled.a`
  color: ${(props) => props.theme.colors.mainBlue};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.md};
  text-decoration: none;


  @media (max-width: 800px) {
    font-size:  ${props => props.theme.text.sm};
}
`;

const Icon = styled.img`
  margin-right: 10px;
`;
