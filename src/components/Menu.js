import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  background: #fff;
  overflow-x: hidden;

  h2 {
    font-family: 'Baskerville';
    text-align: center;
    font-size: 25px;
    padding: 15px 0 5px;
  }

  h3 {
    font-family: 'Baskerville';
    text-align: center;
    font-size: 18px;
  }

  ul {
    padding: 10px;
  }

  li {
    display: block;
    width: 100%;
    padding: 5px;
    text-transform: uppercase;
    font-style: italic;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background: #3f3f3f;
      transition: width 0.3s;
      margin-top: -5px;
    }

    &:hover::after {
      width: 100%;
    }
  }

  a {
    font-size: 14px;
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
      <h2>Lucie Soriano.</h2>
      <h3>Fashion designer</h3>
      <ul>
        <Link to="/" exact activeClassName={'activeLink'}>
          <li>Home</li>
        </Link>
        <Link to="/about/" activeClassName={'activeLink'}>
          <li>About me</li>
        </Link>
        <Link to="/portfolio/" activeClassName={'activeLink'}>
          <li>Portfolio</li>
        </Link>
        <Link to="/contact/" activeClassName={'activeLink'}>
          <li>Contact</li>
        </Link>
      </ul>
    </Nav>
  )
}

export default Menu
