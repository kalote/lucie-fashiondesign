import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const Image = styled.li`
  margin: 0 0 1em 0;
  width: 100%;
  align-self: center;
  cursor: pointer;

  @media screen and (min-width: 35em) {
    flex: 0 0 50%;
  }
  @media screen and (min-width: 50em) {
    flex: 0 0 25%;
  }

  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    text-decoration: none;
    opacity: 1;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 10px #3f3f3f;
    }
  }
`

const CardImg = props => {
  return (
    <Image>
      <Link to={props.href} onClick={props.onClick}>
        <Img sizes={props.image} />
      </Link>
    </Image>
  )
}

export default CardImg
