import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageBody from '../components/PageBody'

const GalleryTemplate = ({ data }) => {
  const { title, slug, id, description, images } = data.contentfulPhotoGallery

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <PageBody body={description} />
      </Container>
    </div>
  )
}

export const query = graphql`
  query galleryQuery($slug: String!) {
    contentfulPhotoGallery(slug: { eq: $slug }) {
      id
      slug
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      images {
        id
        title
        photo {
          sizes(maxWidth: 1800) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default GalleryTemplate
