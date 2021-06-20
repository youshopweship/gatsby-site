import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
              featuredImage{
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    `
  )

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

              {
                edge.node.featuredImage &&
                <GatsbyImage
                  style={{ width: 800 }}
                  image={getImage(edge.node.featuredImage)}
                  alt={edge.node.title} />
              }
              {console.log("the image is: ", edge.node.featuredImage)}
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