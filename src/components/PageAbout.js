import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Body = styled.div`
  color: #000;
  background-color: #fff;
  padding: 10px;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
`

const Txt = styled.p`
  flex: 0 0 65%;
  padding: 20px;
  line-height: 2em;
  font-size: 16px;

  & p {
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
`

const Image = styled.div`
  align-self: center;
  flex: 0 0 35%;

  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
  }
`

const Card = props => {
  return (
    <Body>
      <Txt
        dangerouslySetInnerHTML={{
          __html: props.body.childMarkdownRemark.html,
        }}
      />
      <Image>
        <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
      </Image>
    </Body>
  )
}

export default Card
