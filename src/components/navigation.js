import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/course/">Courses</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/workshop/">Workshops</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/gallery/">Photos & Videos</Link>
      </li>
    </ul>
  </nav>
)
