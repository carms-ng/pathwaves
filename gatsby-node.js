const { graphql } = require("gatsby")
const path = require(`path`)

// create homePage dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allFile(filter: {relativeDirectory: {in: ["fourOhFour"]}}) {
        distinct(field: relativeDirectory)
        nodes {
          childMarkdownRemark {
            frontmatter {
              templateKey
            }
          }
          base
        }
      }
    }
  `)

  result.data.allFile.nodes.forEach(node => {
    const slug = node.base.split('.')[0]
    const lang = node.base.split('.')[1]
    const templateFile = node.childMarkdownRemark.frontmatter.templateKey

    createPage({
      path: node.slug === "home" ? `/${lang}` : `/${lang}/${slug}`,
      component: path.resolve(`./src/templates/${templateFile}`),
      context: { lang: lang, regx: `/.${lang}.md$/`}
    })
  })
}
