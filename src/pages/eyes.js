import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql, Link, navigate } from 'gatsby'
import { addProduct } from '../store/cart.slice'
import { useDispatch } from 'react-redux'

const Eyes = () => {
  const dispatch = useDispatch()

  const data = useStaticQuery(
    graphql`
    query{
      allContentfulProduct(filter: {productType: {eq: "eyes"}}) {
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
        <div className="row d-flex justify-content-center justify-content-sm-center justify-content-md-start">
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
                  <h4
                    style={styles.title}
                  >{edge.node.title}</h4>
                  <p style={styles.body}>{edge.node.details.childMarkdownRemark.excerpt}</p>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <p style={{ marginTop: '15px', fontWeight: 'bold', fontStyle: 'italic' }}>Rs-{edge.node.price}/-</p>

                    <div>
                      <button
                        onClick={() => {
                          dispatch(addProduct({ title: edge.node.title, price: edge.node.price }))
                          navigate('/cart/')
                        }}
                        style={{ margin: '10px', backgroundColor: '#4a4e69', color: '#fff', marginRight: '0px' }} className="btn"
                      >
                        Buy
                      </button>

                      <Link style={{ margin: '10px', backgroundColor: '#4a4e69', color: '#fff', marginLeft: '3px' }} className="btn" to={`/product/${edge.node.slug}/`}>Details</Link>
                    </div>


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
export default Eyes
