import React from "react";

export const Form = (props) => {
  return (
    <Container>
      <Label />
      <_Form>{props.children}</_Form>
    </Container>
  );
};

const _Form = styled.div`
  max-width: 35vw;
  background-color: white;
  box-shadow: 2px 2px 4px grey;
`;

const Label = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.sm};
  color: ${(props) => props.theme.colors.darkBlue};
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
`;
