import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImage from "../../static/assets/og-pathwaves.png"

function Seo({ description, lang, meta, title }) {
  // query site data from CMS
  const { site, siteSetting } = useStaticQuery(
    graphql`
      query {
        siteSetting: allFile(filter: {relativeDirectory: {eq: "siteSetting"}}) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                title
                description
              }
            }
            base
          }
        }
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  // Prepare data
  const siteInfo = siteSetting.nodes.map(node => {
    const locale = node.base.split('.')[1]
    const frontmatter = node.childMarkdownRemark.frontmatter
    return ({
      locale,
      frontmatter,
    })
  }).find(elem => lang === elem.locale).frontmatter

  const metaDescription = description || siteInfo.description
  const defaultTitle = siteInfo?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteInfo?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
