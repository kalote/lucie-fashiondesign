import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import PageTitle from '../components/PageTitle'
import styled from 'styled-components'
import Container from '../components/Container'

const Wrapper = styled.p`
  color: white;
  text-align: center;
  font-size: 2em;
  padding: 0.5em;
  font-weight: 100;
`

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>{`404 - ${config.siteTitle}`}</title>
    </Helmet>

    <Container>
      <PageTitle>Page not found</PageTitle>
      <Wrapper>The page you're looking for doesn't exist (yet).</Wrapper>
    </Container>
  </div>
)

export default NotFoundPage
