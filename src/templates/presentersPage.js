import React from 'react';
import { graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
// import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';

// import LocalizedLink from '../components/LocalizedLink';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import CardsMember from '../components/CardsMember';

// markup
export default function PresentersPageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />
      <Hero header={sectionOne.header} backgroundImage={sectionOne.backgroundImage} />

      <div style={{ padding: 'var(--padSm)' }}>
        <CardsMember members={sectionTwo.members} />
      </div>
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
                gatsbyImageData(width: 180, placeholder: BLURRED, layout: CONSTRAINED)
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
    page: file(relativeDirectory: {eq: "presenters"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG,
                    layout: FULL_WIDTH,
                    transformOptions: {fit: COVER},
                    quality: 100
                  )
                }
              }
              alt
            }
          }
          sectionTwo {
            header
            members {
              name
              pronouns
              role
              entity
              portrait {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 360,
                      height: 240,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: COVER},
                      quality: 100
                    )
                  }
                }
                alt
              }

            }
          }
        }
      }
    }
  }
`;
