import React from 'react'
import {NavLink} from './NavLink'
import {Logo} from './_Logo'
import styled from 'styled-components'

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      scrollPos: 0,     
    }
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this._captureScrollPos);
  }

  _captureScrollPos = () => {
    this.setState({ scrollPos: window.pageYOffset });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this._captureScrollPos);
  }

  render() {
  return (
    <Container>
      <Navbar_ scrollPos={this.state.scrollPos}>
      <LinkContainer width="33%">
       <NavLink route="/" exact>Contact</NavLink> 
       <NavLink route="/casestudies">Case Studies</NavLink>
       </LinkContainer>
       <Logo />
       <LinkContainer width='33%'>
       <NavLink route="/ChloramineBoostingSystem" style={NavlinkStyleOverride}>Chloramine Boosting System</NavLink>
       <NavLink route="/TidalWaveMixer">Tidal Wave Mixer</NavLink>
       </LinkContainer>
      </Navbar_>
    </Container>
  )
  }
}

const NavlinkStyleOverride = {
  marginLeft: '2vw',
}

const Navbar_ = styled.div.attrs(props => ({
  style: {
    opacity: `${props.scrollPos  > 0 ? '1': '0'}`,
    pointerEvents: `${props.scrollPos > 0 ? 'initial' : 'none'}`,
    userSelect: `${props.scrollPos > 0 ? 'initial': 'none'}`,
  }
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.7vh 6vw 0.7vh 6vw;
  margin-top: 1.5vh;
  transition: opacity 150ms ease-in;
  border-radius: 3px;
  background-color: white;
  box-sizing: border-box;
  width: 80%;
  box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${props => props.width};
`;