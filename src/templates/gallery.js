import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import CardList from '../components/CardList'
import CardImg from '../components/CardImg'
import PageTitle from '../components/PageTitle'
import Lightbox from 'react-images'

class GalleryTemplate extends Component {
  constructor(props) {
    super(props)

    const pics = this.props.data.contentfulPhotoGallery.images.map(
      im => im.photo.sizes
    )
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      pics: pics,
      backdropClosesModal: true,
      showImageCount: false,
      showCloseButton: true,
      ...this.props.data.contentfulPhotoGallery,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    })
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.pics.length - 1) return

    this.gotoNext()
  }

  render() {
    // const theme = {
    //   // container
    //   container: {
    //     background: 'rgba(255, 255, 255, 0.9)',
    //   },
    //   // arrows
    //   arrow: {
    //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
    //     fill: '#222',
    //     opacity: 0.6,
    //     transition: 'opacity 200ms',

    //     ':hover': {
    //       opacity: 1,
    //     },
    //   },
    //   image: {
    //     width: 'inherit !important',
    //   },
    //   header: {
    //     display: 'none',
    //   },
    // }
    return (
      <div>
        <Helmet>
          <title>{`${this.state.title} - ${config.siteTitle}`}</title>
          <meta name="description" content={this.state.description} />
        </Helmet>

        <Container>
          <PageTitle>{this.state.title}</PageTitle>
          <CardList>
            {this.state.images.map((image, i) => (
              <CardImg
                key={i}
                image={image.photo.sizes}
                onClick={e => this.openLightbox(i, e)}
                href={image.photo.sizes.src}
              />
            ))}
            <Lightbox
              // theme={theme}
              showImageCount={this.state.showImageCount}
              backdropClosesModal={this.state.backdropClosesModal}
              currentImage={this.state.currentImage}
              images={this.state.pics}
              isOpen={this.state.lightboxIsOpen}
              onClickImage={this.handleClickImage}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              onClose={this.closeLightbox}
              showCloseButton={this.state.showCloseButton}
            />
          </CardList>
        </Container>
      </div>
    )
  }
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
          sizes(maxHeight: 1200) {
            ...GatsbyContentfulSizes_withWebp
          }
        }
      }
    }
  }
`

export default GalleryTemplate
