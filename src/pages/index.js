import * as React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from '../components/carousel'
import { useStaticQuery, graphql, Link, navigate } from 'gatsby'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/cart.slice'

import AutoComplete from "../components/Autocomplete"
import "./autocomplete.styles.css"


const IndexPage = () => {
  const dispatch = useDispatch()


  const data = useStaticQuery(
    graphql`
    query{
      allContentfulProduct {
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
              gatsbyImageData(width: 300, height: 200, quality: 100)
            }
            price
          }
        }
      }
    }
    `
  )

  const allProducts = data.allContentfulProduct.edges

  return (
    <Layout>
      <div style={{ marginBottom: '50px', overflow: 'hidden' }}>
        <Carousel />
      </div>
      <Seo title="Home" />

      <AutoComplete
        suggestions={allProducts.map(product => product.node.title)}
      />
      {/* {
        (data.allContentfulProduct.edges).length > 0 ?
          <div className="text-center"><h2 style={{ color: '#4a4e69', fontFamily: 'Rajdhani, serif' }}>Latest Products</h2></div> : null
      } */}



      <div className="container">
        {(data.allContentfulProduct.edges).length === 0 ? <h2 className="text-center mt-5 pt-5">No Products found</h2> : null}
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
                    <p style={{ marginTop: '15px', fontFamily: 'Lato, serif', fontWeight: 'bold', fontStyle: 'italic' }}>Rs-{edge.node.price}/-</p>

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
    fontFamily: 'Lato, serif'
  },
  body: {
    lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontFamily: 'sans-serif',
  }
}
export default IndexPage
