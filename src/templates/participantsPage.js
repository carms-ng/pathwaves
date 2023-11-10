import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import CardsMember from "../components/CardsMember";

export default function ParticipantsPageTemplate({ pageContext, data }) {
  const { title, sectionOne, sectionTwo, sectionThree, sectionFour } =
    data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />

      <Hero
        header={sectionOne.header}
        backgroundImage={sectionOne.backgroundImage}
      />

      <CardsMember
        header={sectionTwo.header}
        members={sectionTwo.members}
        cardLinkLabel={sectionTwo.cardLinkLabel}
      />

      <CardsMember
        header={sectionThree.header}
        members={sectionThree.members}
        cardLinkLabel={sectionThree.cardLinkLabel}
      />

      <GatsbyImage
        image={getImage(sectionFour.backgroundImage.image)}
        alt={sectionFour.backgroundImage.alt}
        style={{ transform: "scaleY(-1)" }}
      />
    </Layout>
  );
}

export const query = graphql`
  query ($regx: String) {
    settings: file(
      relativeDirectory: { eq: "siteSetting" }
      base: { regex: $regx }
    ) {
      childMarkdownRemark {
        frontmatter {
          logo {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 180
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
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
            navItemsSecondary {
              linkAddress
              linkText
            }
            menuAuth {
              labelLogin
              labelLogout
              labelMenu
              navItemsAuth {
                linkAddress
                linkText
              }
            }
            buttonDiscord {
              linkText
              url
            }
            labelPhases {
              labelPhaseOne
              labelPhaseTwo
              labelPhaseThree
            }
            btnContact {
              label
              mailTo
            }
          }
        }
      }
    }
    page: file(
      relativeDirectory: { eq: "participants" }
      base: { regex: $regx }
    ) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: NONE
                    layout: FULL_WIDTH
                    transformOptions: { fit: COVER }
                    quality: 50
                  )
                }
              }
              alt
            }
          }
          sectionTwo {
            header
            cardLinkLabel
            members {
              name
              pronouns
              description
              url
              portrait {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400
                      height: 240
                      placeholder: NONE
                      layout: CONSTRAINED
                      transformOptions: { fit: COVER }
                      quality: 50
                    )
                  }
                }
                alt
              }
            }
          }
          sectionThree {
            header
            cardLinkLabel
            members {
              name
              pronouns
              role
              entity
              description
              url
              portrait {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400
                      height: 240
                      placeholder: NONE
                      layout: CONSTRAINED
                      transformOptions: { fit: COVER }
                      quality: 50
                    )
                  }
                }
                alt
              }
            }
          }
          sectionFour {
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: NONE
                    layout: FULL_WIDTH
                    transformOptions: { fit: COVER }
                    quality: 50
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
`;
