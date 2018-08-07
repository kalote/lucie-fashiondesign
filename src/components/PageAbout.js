import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Body = styled.div`
  color: #000;
  background-color: #fff;
  padding: 10px;
  opacity: 1;
`

const Txt = styled.p`
  display: block;
  float: left;
  width: 65%;
  padding: 20px;
  line-height: 2em;
  font-size: 18px;
`

const Card = props => {
  return (
    <Body>
      <Txt
        dangerouslySetInnerHTML={{
          __html: props.body.childMarkdownRemark.html,
        }}
      />

      <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
    </Body>
  )
}

export default Card
