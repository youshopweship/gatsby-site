import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from "../components/seo"


export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
    }
  }
`

const ProductTemplate = props => {
  return (
    <Layout>
      <Seo title={props.data.contentfulProduct.title} />
      <h1>{props.data.contentfulProduct.title}</h1>
    </Layout>
  )
}

export default ProductTemplate