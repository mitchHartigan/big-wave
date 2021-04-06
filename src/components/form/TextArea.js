import React from "react";
import styled from "styled-components";

export const TextArea = (props) => {
  return <_TextArea onChange={props.handleUpdate} />;
};

const _TextArea = styled.textarea`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
`;
