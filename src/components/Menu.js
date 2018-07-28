import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  border: 1px solid #3f3f3f;
  z-index: 1;
  margin: 10px 0 0 10px;
  background: #fff;
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
    color: #afafaf;
    font-weight: 300;
    transition: all 0.3s;
    padding-left: 0;

    &:hover {
      color: #3f3f3f;
      font-weight: 600;
      padding-left: 10px;
    }
  }

  .activeLink {
    font-weight: 600;
    color: #3f3f3f;
    padding-left: 10px;
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
