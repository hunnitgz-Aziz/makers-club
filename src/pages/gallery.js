import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'

class AboutPage extends React.Component {
  render(){
    return (
      <Layout location={this.props.location}>
        <div>
          <h1>Gallery Page</h1>
        </div>
      </Layout>
    )
  }
}

export default AboutPage;