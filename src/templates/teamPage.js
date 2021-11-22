import React from 'react';
import { graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';

// import LocalizedLink from '../components/LocalizedLink';
import Seo from '../components/Seo';

// markup
export default function TeamPageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />
      <p className="font-lg">{sectionOne.description}</p>
    </Layout>
  );
}

export const query = graphql`
  query($regx: String) {
    settings: file(relativeDirectory: {eq: "siteSetting"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          logo {
            image {
              childImageSharp {
                gatsbyImageData(width: 150, placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
            alt
          }
          nav {
            navItems {
              linkAddress
              linkText
              show
              childNavItems {
                linkAddress
                linkText
              }
            }
          }
        }
      }
    }
    page: file(relativeDirectory: {eq: "team"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            description
          }
          sectionTwo {
            header
          }
        }
      }
    }
  }
`;
