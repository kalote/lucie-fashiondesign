import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Body = styled.div`
  color: #000;
  background-color: #fff;
  padding: 35px 85px;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  @media only screen and (max-width: 980px) {
    padding: 10px;
  }
`

const Txt = styled.p`
  flex: 0 0 65%;
  padding: 20px;
  line-height: 1em;
  font-size: 16px;

  & p {
    margin-bottom: 15px;

    @media only screen and (max-width: 980px) {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
    padding: 0;
    text-align: justify;
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
