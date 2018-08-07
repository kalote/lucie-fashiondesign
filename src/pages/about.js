import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import PageTitle from '../components/PageTitle'
import PageAbout from '../components/PageAbout'
import Container from '../components/Container'

const About = ({ data }) => {
  const { title, body, image } = data.contentfulPage

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <PageTitle>{title}</PageTitle>
        <PageAbout body={body} image={image} />
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
