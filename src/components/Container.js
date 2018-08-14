import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 38px 0 20px;
  background: #fff;
  min-height: 100vh;
  @media only screen and (max-width: 980px) {
    margin: 0;
  }

  & .company-logo {
    & .gatsby-image-wrapper{
      margin: 0 auto;
      display: block !important;
      width: 100px;
    }
    & .gatsby-image-outer-wrapper {
      padding-top: 73px;
    }
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
