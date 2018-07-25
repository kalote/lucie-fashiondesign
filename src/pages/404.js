import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import PageTitle from '../components/PageTitle'
import styled from 'styled-components'
import Container from '../components/Container'

const Wrapper = styled.h3`
  color: white;
  text-align: center;
`

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>{`404 - ${config.siteTitle}`}</title>
    </Helmet>

    <Container>
      <PageTitle>Not found</PageTitle>
      <Wrapper>You just hit a route that doesn't exist... the sadness.</Wrapper>
    </Container>
  </div>
)

export default NotFoundPage
