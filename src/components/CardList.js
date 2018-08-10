import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: #fff;
  padding: ${props => (props.spaced ? '80px 10px' : '65px 10px 10px')};

  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const CardList = props => {
  return <List spaced={props.spaced}>{props.children}</List>
}

export default CardList
