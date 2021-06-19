import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

// import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "DD MMM, YYYY")
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  )
  // const image = getImage(data.allContentfulBlogPost.edges.node)

  return (
    <Layout>
      <Seo title="Blog" />
      <p>
        <Link to='/'>Go back to the homepage</Link>
      </p>
      <ul>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {/* {edge.node.featuredImage && (
                <Img
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )} */}

              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog