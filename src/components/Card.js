import React from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const flash = keyframes`
  0% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
`

const Post = styled.li`
  margin: 0 0 1em 0;
  width: 100%;
  flex: 0 0 48%;

  @media only screen and (max-width: 980px) {
    flex: 0 0 100%;
  }

  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    text-decoration: none;
    opacity: 1;
    .gatsby-image-wrapper {
      height: 530px;
      padding-bottom: 60%;
    }
    &:hover {
      animation: ${flash} 1.5s;
      background: #3f3f3f;
      color: #fff;
    }
  }
`

const Card = props => {
  return (
    <Post>
      <Link to={`/portfolio/${props.slug}/`}>
        <Img sizes={props.image.sizes} />
      </Link>
    </Post>
  )
}

export default Card
