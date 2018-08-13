import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'

const Contact = () => (
  <div>
    <Helmet>
      <title>{`Contact - ${config.siteTitle}`}</title>
    </Helmet>

    <Container>
      <PageTitle>Contact</PageTitle>
      <ContactForm />
    </Container>
  </div>
)

export default Contact
