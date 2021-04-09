import React from 'react'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <Image src="main_logo_no_text.svg" alt="Big Wave Logo" />
  )
}

const Image = styled.img`
  align-self: center;
`;