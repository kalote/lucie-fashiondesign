import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import PageTitle from '../components/PageTitle'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'

const Portfolio = ({ data }) => {
  const { title, galleries, metaDescription } = data.contentfulPortfolio

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <Container>
        <PageTitle>{title}</PageTitle>
        <CardList spaced>
          {galleries.map(gallery => (
            <Card
              key={gallery.id}
              slug={gallery.slug}
              image={gallery.coverImage}
              title={gallery.title}
            />
          ))}
        </CardList>
      </Container>
    </div>
  )
}

export const query = graphql`
  query portfolioQuery {
    contentfulPortfolio(title: { eq: "Portfolio" }) {
      title
      galleries {
        id
        title
        slug
        coverImage {
          title
          sizes(maxWidth: 1800) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
      }
      metaDescription {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 80)
        }
      }
    }
  }
`

export default Portfolio
