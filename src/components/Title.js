import React from "react";
import styled from "styled-components";

/**
 * @param props
 * @param props.spanWidth - width of the span element in px, vw, etc.
 * @param props.size - font size of the Title elem, in sm, lg, etc.
 * @param props.chilren - the text to be displayed as the Title.
 * @param props.align - text-align property of the Title.
 * @param props.styles - additional styles to be passed into the Container.
 * @param props.alignTitle - flex align-items of the Container.
 */

export const Title = (props) => {
  const { spanWidth, size, children, align, alignTitle, styles } = props;

  return (
    <Container styles={styles} alignTitle={alignTitle}>
      <Header size={size} align={align}>
        {children}
      </Header>
      <Underline spanWidth={spanWidth}></Underline>
    </Container>
  );
};

const Header = styled.h2`
  margin: 0px;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text[props.size]};
  color: ${(props) => props.theme.colors.darkBlue};
  -webkit-font-smoothing: antialiased;
  margin-bottom: 7px;
  font-weight: normal;
  text-align: ${(props) => props.align};
  ${(props) => props.styles};
`;

const Underline = styled.span`
  height: 3px;
  width: ${(props) => (props.spanWidth ? props.spanWidth : "100px")};
  background: ${(props) => props.theme.colors.mainBlue};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => (props.alignTitle ? props.alignTitle : "center")};
  ${(props) => props.styles}
`;
