import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Image = styled.li`
  margin: 0 0 1em 0;
  width: 100%;
  align-self: center;
  cursor: pointer;

  @media screen and (min-width: 35em) {
    flex: 0 0 49%;
    margin: 0 0 3vw 0;
  }
  @media screen and (min-width: 50em) {
    flex: 0 0 24%;
  }

  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    text-decoration: none;
    opacity: 1;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
    &:hover {
      background: #3f3f3f;
      color: #fff;
    }
  }
`

const CardImg = props => {
  return (
    <Image>
      <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
    </Image>
  )
}

export default CardImg
