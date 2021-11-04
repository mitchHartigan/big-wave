import React from "react";
import styled from "styled-components";

export function CloseButton(props) {
  return (
    <ButtonContainer display={props.display}>
      <Button onClick={props.onClick}>
        <img src="button_close.svg" alt="Rep Card close button" />
      </Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  position: absolute;
  display: ${(props) => (props.display ? "flex" : "none")};
  top: 15px;
  left: 5px;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0px 0px 0px 10px;
`;

const Button = styled.button`
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`;
