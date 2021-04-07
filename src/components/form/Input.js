import React from "react";
import styled from "styled-components";

export const Input = (props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <_Input onChange={props.handleChange} />
    </Container>
  );
};

const _Input = styled.input`
  height: 40px;
  padding: 5px 5px 5px 5px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    border 2px solid ${(props) => props.theme.colors.mainBlue};
  }
`;

const Label = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  color: ${(props) => props.theme.colors.darkBlue};
  margin: 10px 0px 10px 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px 0px 20px 0px;
`;
