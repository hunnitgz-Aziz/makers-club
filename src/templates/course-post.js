import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class CourseTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulCourses')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default CourseTemplate

export const pageQuery = graphql`
  query CourseBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCourses(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
