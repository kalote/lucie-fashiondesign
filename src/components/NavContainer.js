import React from 'react'
import styled from 'styled-components'

const Nav = styled.ul`
  width: 130px;
  border: 1px solid #000;
  position: fixed;
  z-index: 1;
  top: 10px;
  left: 10px;
  background: #fff;
  overflow-x: hidden;
  padding: 8px 0 0 8px;

  li {
    display: inline-block;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #666;
    font-weight: 600;
    transition: all 0.5s;
    padding-left: 10px;
    &:hover {
      color: #000;
      padding-left: 20px;
    }
  }
`

const NavContainer = props => {
  return <Nav>{props.children}</Nav>
}

export default NavContainer
