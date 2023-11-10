import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import LocalizedLink from "../components/LocalizedLink";
import Seo from "../components/Seo";
import LogoGarden from "../components/LogoGarden";
import Carousel from "../components/Carousel";

import { HomeHeroStyles, HomeContactUsStyles } from "../styles/HomePageStyles";

import { BgImageWrapper } from "../styles/InnerStyles";

export default function HomePageTemplate({ pageContext, data }) {
  // Prepare Content
  const { title, sectionOne, sectionTwo, sectionThree } =
    data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  const collabs =
    data.logos.childMarkdownRemark.frontmatter.sectionTwo.collaborators;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />

      {/* Hero */}
      <HomeHeroStyles>
        <GatsbyImage
          image={getImage(sectionOne.backgroundImage.image)}
          alt={sectionOne.backgroundImage.alt}
          className="background"
        />
        <div className="hero-wrapper">
          <h1>{sectionOne.header}</h1>
          <div>
            <p>{sectionOne.description}</p>
            <div className="hero-buttons">
              {sectionOne.buttons
                .filter(({ isVisible }) => isVisible)
                .map(({ linkText, url }) =>
                  url.startsWith("/") ? (
                    <LocalizedLink
                      className="btn"
                      key={url}
                      to={url}
                      lang={pageContext.lang}
                    >
                      {linkText}
                    </LocalizedLink>
                  ) : (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      {linkText}
                    </a>
                  )
                )}
            </div>
          </div>
        </div>
      </HomeHeroStyles>

      {/* Carousel */}
      <BgImageWrapper>
        <GatsbyImage
          image={getImage(sectionTwo.backgroundImage.image)}
          alt={sectionTwo.backgroundImage.alt}
          className="background"
        />

        <Carousel
          items={sectionTwo.carouselItems}
          lang={pageContext.lang}
          buttonLabel={sectionTwo.buttonLabel}
        />
      </BgImageWrapper>

      {/* Newsletter */}
      <section>
        <HomeContactUsStyles>
          <ReactMarkdown>{sectionThree.header}</ReactMarkdown>
          <p>{sectionThree.description}</p>
        </HomeContactUsStyles>
        <GatsbyImage
          image={getImage(sectionThree.backgroundImage.image)}
          alt={sectionThree.backgroundImage.alt}
          style={{ marginTop: "-10vw", marginBottom: "-10vw" }}
        />
        {/* Logo Garden */}
        <LogoGarden logos={collabs} />
      </section>
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
    page: file(relativeDirectory: { eq: "home" }, base: { regex: $regx }) {
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
                    quality: 50
                  )
                }
              }
              alt
            }
            description
            buttons {
              linkText
              url
              isVisible
            }
          }
          sectionTwo {
            buttonLabel
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: NONE
                    layout: FULL_WIDTH
                    quality: 50
                  )
                }
              }
              alt
            }
            carouselItems {
              name
              type
              nameAlt
              description
              img {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500
                      height: 500
                      placeholder: NONE
                      layout: CONSTRAINED
                      transformOptions: { fit: COVER }
                      quality: 50
                    )
                  }
                }
                alt
              }
              button {
                linkText
                url
              }
            }
          }
          sectionThree {
            header
            description
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: NONE
                    layout: FULL_WIDTH
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
    logos: file(relativeDirectory: { eq: "team" }, base: { regex: $regx }) {
      childMarkdownRemark {
        frontmatter {
          sectionTwo {
            collaborators {
              name
              url
              logo {
                alt
                image {
                  childImageSharp {
                    gatsbyImageData(
                      height: 80
                      placeholder: NONE
                      layout: CONSTRAINED
                      transformOptions: { fit: CONTAIN }
                      quality: 50
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
