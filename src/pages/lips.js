import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql, Link } from 'gatsby'


const Lips = () => {
  const data = useStaticQuery(
    graphql`
    query{
      allContentfulProduct(filter: {productType: {eq: "lips"}}) {
        edges {
          node {
            slug
            title
            details {
              childMarkdownRemark {
                excerpt
              }
            }
            mainImage {
              gatsbyImageData(width:300, height:200)
            }
            price
          }
        }
      }
    }
    `
  )
  return (
    <Layout>
      <Seo title="Home" />

      <div className="container">
        {(data.allContentfulProduct.edges).length === 0 ? <h2>No Products found</h2> : null}
        <div className="row d-flex justify-content-center">
          {
            data.allContentfulProduct.edges.map(edge => {
              return (
                <div
                  style={{
                    border: '1px solid lightgrey', width: '300px', margin: '10px', padding: '0', boxShadow: '2px 3px 21px -4px rgba(0,0,0,0.81)', borderRadius: '5px'

                  }}
                  className="col-sm-12 col-md-4"
                >
                  <GatsbyImage
                    style={{ borderRadius: '5px' }}
                    image={getImage(edge.node.mainImage)}
                    alt={edge.node.title}
                  />
                  <h5
                    style={styles.title}
                  >{edge.node.title}</h5>
                  <p style={styles.body}>{edge.node.details.childMarkdownRemark.excerpt}</p>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <p style={{ marginTop: '15px', fontWeight: 'bold', fontStyle: 'italic' }}>Rs-{edge.node.price}/-</p>
                    <Link style={{ margin: '10px', backgroundColor: '#ef3d56', color: '#fff' }} className="btn" to={`/product/${edge.node.slug}/`}>Details</Link>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </Layout >
  )
}

const styles = {
  title: {
    lineHeight: '1.5em',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '100%',
    padding: '10px',
  },
  body: {
    lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px'
  }
}
export default Lips
