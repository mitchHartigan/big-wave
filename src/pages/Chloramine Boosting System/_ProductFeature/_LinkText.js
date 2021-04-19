import React from "react";
import styled from "styled-components";

/**
 * @param props
 * @param props.children - highlighted text that will act as the link.
 * @param props.text - non-highlighted text.
 * @param props.size - size of the text.
 * @param props.href - href of the link.
 */

export const LinkText = (props) => {
  const { children, text, href, size } = props;

  return (
    <Text size={size}>
      {text}
      <Link href={href} target="_blank">
        {children}
      </Link>
    </Text>
  );
};

const Text = styled.p`
  margin: 1vh 0px 1vh 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text[props.size]};
  text-align: left;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  line-height: 30px;

  @media (max-width: 1400px) {
    font-size: ${(props) => props.theme.text.xxs};
  }

  @media (max-width: 1330px) {
    text-align: center;
  }

  @media (max-width: 600px) {
    text-align: justify;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.mainBlue};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text[props.size]};
  text-decoration: none;

  @media (max-width: 1400px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;
