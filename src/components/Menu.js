import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  background: #fff;
  overflow-x: hidden;

  ul {
    padding: 10px;
  }

  li {
    display: block;
    width: 100%;
    padding: 20px;
    text-transform: uppercase;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background: #3f3f3f;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #3f3f3f;
    line-height: 2em;
  }

  .activeLink li::after {
    width: 100%;
  }
`

const Menu = () => {
  return (
    <Nav>
      <ul>
        <Link to="/" exact activeClassName={'activeLink'}>
          <li>Home</li>
        </Link>
        <Link to="/portfolio/" exact activeClassName={'activeLink'}>
          <li>Portfolio</li>
        </Link>
        <Link to="/about/" activeClassName={'activeLink'}>
          <li>About</li>
        </Link>
        <Link to="/contact/" activeClassName={'activeLink'}>
          <li>Contact</li>
        </Link>
      </ul>
    </Nav>
  )
}

export default Menu
