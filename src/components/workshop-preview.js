import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      <Link to={`/workshop/${article.slug}`}>{article.title}</Link>
    </h3>
    
    <p
      dangerouslySetInnerHTML={{
        __html: article.body.childMarkdownRemark.html,
      }}
    />
    
  </div>
)
