import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 130px;
  border: 1px solid ${props => props.theme.colors.tertiary};
  position: fixed;
  z-index: 1;
  top: 10px;
  left: 10px;
  background: ${props => props.theme.colors.base};
  overflow-x: hidden;

  ul {
    padding: 10px;
  }

  li {
    display: block;
    width: 100%;
    padding: 3px;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    font-weight: 300;
    transition: all 0.3s;
    
    &:hover {
      color: ${props => props.theme.colors.tertiary};
    }
  }

  .activeLink {
    font-weight: 600;
    color: ${props => props.theme.colors.tertiary};
  }
`

const Menu = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/" exact activeClassName={'activeLink'}>
              Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio/" exact activeClassName={'activeLink'}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName={'activeLink'}>
              About
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName={'activeLink'}>
              Contact
          </Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Menu
