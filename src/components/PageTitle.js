import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${props => (props.small ? '1.6em' : '2em')};
  text-transform: capitalize;
  color: #3f3f3f;
  text-align: ${props => (props.center ? 'center' : 'right')};
  ${props => (props.basker ? 'font-family: \'Baskerville\'' : '')};
  padding: ${props => (props.center ? '10px 0 0' : '70px 85px 0')};
  background-color: #fff;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
`

const PageTitle = props => {
  return <Title
    center={props.center}
    basker={props.basker}
    small={props.small}>{props.children}</Title>
}

export default PageTitle
