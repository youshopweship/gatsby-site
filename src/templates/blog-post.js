import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage{
        gatsbyImageData(width: 200)
      }
      excerpt {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const BlogPost = props => {
  const image = getImage(props.data.contentfulBlogPost.featuredImage)
  return (
    <Layout>
      <Seo title={props.data.contentfulBlogPost.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>
        <div>
          {
            props.data.contentfulBlogPost.featuredImage &&
            <GatsbyImage
              image={image}
              alt={props.data.contentfulBlogPost.title} />
          }
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.data.contentfulBlogPost.excerpt.childMarkdownRemark.html }}>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost