import React from "react";
import styled from "styled-components";

export const Spec = (props) => {
  const { name, children } = props;

  return (
    <Container>
      <NameContainer>
        <Name>{name}</Name>
        <NameUnderline />
      </NameContainer>
      <DescriptionContainer>
        <Description>{children}</Description>
        <DescriptionUnderline />
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 32.5% 2.5% 65%;
  margin: 5px 0px 5px 0px;
`;

const Name = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: right;
  width: 100%;
  color: ${(props) => props.theme.colors.darkBlue};
  margin-bottom: 7px;

  @media (max-width: 1270px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const NameUnderline = styled.div`
  height: 3px;
  background-color: ${(props) => props.theme.colors.mainBlue};
  width: 100%;
`;

const NameContainer = styled.div`
  grid-column: 1 / 2;
  align-self: end;
`;

const Description = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  text-align: left;
  width: 100%;
  color: ${(props) => props.theme.colors.darkBlue};
  margin-bottom: 7px;

  @media (max-width: 1270px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const DescriptionContainer = styled.div`
  grid-column: 3 / 4;
  align-self: end;
`;

const DescriptionUnderline = styled.div`
  height: 3px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
`;
