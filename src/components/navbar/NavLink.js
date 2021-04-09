import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavLink = (props) => {
  const { children, route} = props;

  return (
      <Link to={route} style={{textDecoration: 'none',}}>
        <Text>{children}</Text>
      </Link>
 );
}


const Text = styled.button`
  padding: 5px 10px 5px 10px;
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.text.sm};
  color: ${props => props.theme.colors.darkBlue};
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`;