import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 38px 0 20px;
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
