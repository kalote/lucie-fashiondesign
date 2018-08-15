import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${props => (props.centercontent ? 'center' : 'space-around')};
  background-color: #fff;
  padding: ${props => (props.spaced ? '35px 75px 80px' : (props.nopadding ? '55px 0 10px' : '65px 10px 10px'))};

  &::after {
    content: '';
    flex: 0 0 32%;
  }

  @media only screen and (max-width: 980px) {
    padding: 60px 10px;
  }
`

const CardList = props => {
  return <List
    spaced={props.spaced}
    centercontent={props.centercontent}
    nopadding={props.nopadding}>{props.children}</List>
}

export default CardList
