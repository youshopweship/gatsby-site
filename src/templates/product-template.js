import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from "../components/seo"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'



export const query = graphql`
query ($slug: String!) {
  contentfulProduct(slug: {eq: $slug}) {
    title
    price
    details {
      childMarkdownRemark {
        excerpt(pruneLength: 500)
      }
    }
    mainImage {
      gatsbyImageData(width:900, height:500, placeholder: BLURRED, formats: [AUTO, WEBP], quality: 100)
    }
    detailImages {
      gatsbyImageData(width:150, height:80, quality: 100)
    }
    price
  }
}

`

const ProductTemplate = props => {
  return (
    <Layout>
      <Seo title={props.data.contentfulProduct.title} />

      <div className="container mt-3 mb-3" >
        <GatsbyImage
          style={{ borderRadius: '5px' }}
          image={getImage(props.data.contentfulProduct.mainImage)}
          alt={props.data.contentfulProduct.title}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex flex-nowrap">
            {props.data.contentfulProduct.detailImages.map(image => (

              <div style={{ marginRight: '10px', display: 'inline' }}>

                <GatsbyImage
                  width={500}
                  image={getImage(image)}
                  alt="Detail Image"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="container">
        <p className="fs-1">{props.data.contentfulProduct.title}</p>

        <p style={{ fontFamily: 'sans-serif' }}>{props.data.contentfulProduct.details.childMarkdownRemark.excerpt}</p>

        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <p style={{ marginTop: '15px', fontWeight: 'bold', fontStyle: 'italic' }}>Rs-{props.data.contentfulProduct.price}/-</p>
          <button style={{ margin: '10px', backgroundColor: '#ef3d56', color: '#fff' }} className="btn">Add to Cart</button>
        </div>

      </div>


    </Layout>
  )
}

export default ProductTemplate
