import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import Container from '../components/Container'

const About = ({ data }) => {
  const { title, body } = data.contentfulPage

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
      </Container>
    </div>
  )
}

export const query = graphql`
  query aboutQuery {
    contentfulPage(slug: { eq: "about" }) {
      title
      id
      slug
      image {
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 80)
        }
      }
    }
  }
`

export default About
