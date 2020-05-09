const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const coursePost = path.resolve('./src/templates/course-post.js')
    const workshopPost = path.resolve('./src/templates/workshop-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulCourses {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulWorkshops {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        const course_posts = result.data.allContentfulCourses.edges 
        const workshop_posts = result.data.allContentfulWorkshops.edges 
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
        course_posts.forEach((post, index) => {
          createPage({
            path: `/course/${post.node.slug}/`,
            component: coursePost,
            context: {
              slug: post.node.slug
            },
          })
        })
        workshop_posts.forEach((post, index) => {
          createPage({
            path: `/workshop/${post.node.slug}/`,
            component: workshopPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
