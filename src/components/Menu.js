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
    padding: 7px;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: #3f3f3f;
    transition: all 0.3s;
    padding-left: 0;

    &:hover {
      padding-left: 10px;
    }
  }

  .activeLink {
    color: #3f3f3f;
    padding-left: 10px;
  }
`

const Menu = () => {
  return (
    <Nav>
      <ul>
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
