import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import PageTitle from '../components/PageTitle'
import styled from 'styled-components'
import Container from '../components/Container'

const Wrapper = styled.p`
  color: #000;
  text-align: center;
  font-size: 2em;
  padding: 35px;
  padding-bottom: 100px;
  font-weight: 100;
  background: #fff;
`

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>{`404 - ${config.siteTitle}`}</title>
    </Helmet>

    <Container>
      <PageTitle basker>Page not found</PageTitle>
      <Wrapper>The page you're looking for doesn't exist.</Wrapper>
    </Container>
  </div>
)

export default NotFoundPage
