import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import CardList from '../components/CardList'
import CardImg from '../components/CardImg'
import PageTitle from '../components/PageTitle'

const GalleryTemplate = ({ data }) => {
  const { title, description, images } = data.contentfulPhotoGallery

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Container>
        <PageTitle>{title}</PageTitle>
        <CardList>
          {images.map(image => <CardImg key={image.id} image={image.photo} />)}
        </CardList>
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
