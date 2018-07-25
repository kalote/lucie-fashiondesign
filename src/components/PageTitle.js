import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${props => (props.small ? '2em' : '5em')};
  font-weight: normal;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
  color: white;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: #fff;
    &:hover {
      color: #000;
    }
  }
`

const PageTitle = props => {
  return <Title small={props.small}>{props.children}</Title>
}

export default PageTitle
