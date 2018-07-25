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

const IndexPage = () => (
  <div>
    <Helmet>
      <title>{`Coming soon - ${config.siteTitle}`}</title>
    </Helmet>

    <Container>
      <PageTitle>We're coming soon</PageTitle>
      <Wrapper>We're working very hard on this new website.</Wrapper>
      <Wrapper>Coming August 2018. Stay tuned!</Wrapper>
    </Container>
  </div>
)

export default IndexPage
