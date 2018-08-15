import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 38px 0 20px;
  background: #fff;
  min-height: 100vh;
  @media only screen and (max-width: 980px) {
    margin: 0;
    background: none;
  }

  & .company-logo {
    & .gatsby-image-wrapper{
      margin: 0 auto;
      display: block !important;
      width: 150px;
    }
    & .gatsby-image-outer-wrapper {
      padding-top: 73px;

      @media only screen and (max-width: 980px) {
        padding-top: 10px;
      }
    }
    @media only screen and (max-width: 980px) {
      background: #fff;
    }
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
