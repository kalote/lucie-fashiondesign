import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
  text-transform: capitalize;
  color: #3f3f3f;
  opacity: 0.8;
  text-align: left;
  padding: 15px 50px;
  background-color: #fff;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
`

const PageTitle = props => {
  return <Title small={props.small}>{props.children}</Title>
}

export default PageTitle
