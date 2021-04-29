import React from "react";
import styled from "styled-components";

export const BrochureButton = (props) => {
  const { href } = props;
  return <Link href={href}>Download Brochure</Link>;
};

const Link = styled.a`
  width: 200px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  color: ${(props) => props.theme.colors.mainBlue};
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.colors.mainBlue};
  padding: 8px 28px 8px 28px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  &: hover {
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
    transform: translate(0px, -1px);
  }
  transition: box-shadow 100ms ease;
  transition: transform 100ms ease;
  margin-bottom: 3vh;
`;
