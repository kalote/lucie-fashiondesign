import React, { Component } from 'react'
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

    @media only screen and (max-width: 980px) {
      display: none;
    }
  }

  h3 {
    font-family: 'Baskerville';
    text-align: center;
    font-size: 18px;
    padding-bottom: 50px;

    @media only screen and (max-width: 980px) {
      display: none;
    }
  }

  ul {
    padding: 10px;
  }

  li {
    display: block;
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
    font-style: italic;
  }

  a {
    font-size: 0.8em;
    text-decoration: none;
    color: #3f3f3f;
    line-height: 1em;
    display: block;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      background: #3f3f3f;
      transition: width 0.3s;
      margin-top: -5px;
      margin-left: 10px;
    }

    &:hover::after {
      width: 90%;
    }

    &:last-child {
      margin-bottom: 20px;
    }
  }

  .activeLink::after {
    width: 90%;
  }
`

const Navigation = styled.section`
  .toggle-menu ul {
    display: table;
    width: 60px;
    background: #fff;
    opacity: 0.8;
    padding: 10px;
  }
  .toggle-menu ul li {
    width: 100%;
    height: 5px;
    background-color: #3f3f3f;
    margin-bottom: 6px;
  }
  .toggle-menu ul li:last-child {
    margin-bottom: 0px;
  }

  input[type='checkbox'],
  label {
    display: none;
  }

  @media only screen and (max-width: 980px) {
    input[type='checkbox'] {
      position: absolute;
      top: -9999px;
      left: -9999px;
      background: none;
    }
    input[type='checkbox']:focus {
      background: none;
    }
    label {
      float: left;
      display: inline-block;
      cursor: pointer;
    }
    input[type='checkbox']:checked {
      & ~ nav {
        height: 150px;
        opacity: 1;
      }

      & + .toggle-menu ul {
        opacity: 1;
      }
    }

    nav {
      transition: all 0.4s;
      height: 0;
      position: absolute;
      left: 10px;
      top: 57px;
      width: 40%;
      background-color: #fff;
      opacity: 0;
      padding: 0px;
      z-index: 99;

      & ul {
        width: auto;
      }

      & a {
        font-size: 1em;

        &.activeLink li::after {
          width: 0;
        }
      }
    }
  }
`
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }

  handleChange = (e) => {
    this.setState((prevState) => {
      return { isChecked: !prevState.isChecked }
    })
  }

  hideCheckbox = () => {
    this.setState({
      isChecked: false
    })
  }

  render() {
    return (
      <Navigation>
        <input
          type="checkbox"
          id="toggle-1"
          checked={this.state.isChecked}
          onChange={this.handleChange} />
        <label htmlFor="toggle-1" className="toggle-menu">
          <ul>
            <li /> <li /> <li />
          </ul>
        </label>
        <Nav>
          <h2>Lucie Soriano.</h2>
          <h3>Fashion designer</h3>
          <ul>
            <Link to="/" exact activeClassName={'activeLink'} onClick={this.hideCheckbox}>
              <li>Home</li>
            </Link>
            <Link to="/about/" activeClassName={'activeLink'} onClick={this.hideCheckbox}>
              <li>About</li>
            </Link>
            <Link to="/portfolio/" activeClassName={'activeLink'} onClick={this.hideCheckbox}>
              <li>Portfolio</li>
            </Link>
            <Link to="/contact/" activeClassName={'activeLink'} onClick={this.hideCheckbox}>
              <li>Contact</li>
            </Link>
          </ul>
        </Nav>
      </Navigation>
    )
  }
}

export default Menu
