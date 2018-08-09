import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 38px 0 20px;
  @media only screen and (max-width: 980px) {
    margin: 0;
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
