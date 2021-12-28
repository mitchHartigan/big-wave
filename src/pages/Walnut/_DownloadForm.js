import React from "react";
import styled from "styled-components";

export const DownloadForm = () => {
  return (
    <DownloadButton href="Walnut Case Study.pdf" target="_blank">
      View and Download Study (.pdf)
    </DownloadButton>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const DownloadButton = styled.a`
  width: 300px;
  padding: 10px 30px 10px 30px;
  margin: 2vh 0vw 2vh 0vw;
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: white;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  &: hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25);
    transform: translate(0px, -1px);
  }
  transition: box-shadow 100ms ease;
  transition: transform 100ms ease;
`;
