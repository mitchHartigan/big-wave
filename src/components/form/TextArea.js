import React from "react";
import styled from "styled-components";

export const TextArea = (props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <_TextArea onChange={props.handleChange} />
    </Container>
  );
};

const _TextArea = styled.textarea`
  height: 160px;
  padding: 5px 5px 5px 5px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.25);
  resize: none;
  &:focus {
    border 2px solid ${(props) => props.theme.colors.mainBlue};
  }

  @media (max-width: 700px) {
    font-size: ${props => props.theme.text.xxs};
  }
`;

const Label = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  color: ${(props) => props.theme.colors.darkBlue};
  margin: 10px 0px 10px 0px;

  @media (max-width: 700px) {
    font-size: ${props => props.theme.text.xxs};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 0px;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    margin-bottom: 4vh; 
    padding: 1vh 0px 1vh 0px;
  }
`;
