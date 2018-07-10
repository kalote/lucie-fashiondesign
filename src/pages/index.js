import React from 'react'
import Link from 'gatsby-link'

import NavContainer from '../components/NavContainer'

const IndexPage = () => (
  <div>
    <NavContainer>
      <li>
        <Link to="/" exact>
          Home
        </Link>
      </li>
      <li>
        <Link to="/portfolio/" exact>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/about/">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact/">
          Contact
        </Link>
      </li>
    </NavContainer>
  </div>
)

export default IndexPage
