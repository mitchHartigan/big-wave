import React from "react";
import styled from "styled-components";

export const Form = (props) => {
  return (
    <Container>
      <_Form>{props.children}</_Form>
    </Container>
  );
};

const _Form = styled.div`
  width: 35vw;
  min-width: 550px;
  background-color: white;
  box-shadow: 2px 3px 11px 5px rgba(0, 0, 0, 0.13);
  padding: 0px 40px 30px 40px;
  border-radius: 2px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px 40px 0px;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
`;
