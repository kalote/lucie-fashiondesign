import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Post = styled.li`
  border: 1px solid #afafaf;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: 35em) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: 50em) {
    flex: 0 0 32%;
  }
  &:hover {
    background: #3f3f3f;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: #fff;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Card = props => {
  return (
    <Post>
      <Link to={`/${props.slug}/`}>
        <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
        <Title>{props.title}</Title>
      </Link>
    </Post>
  )
}

export default Card
