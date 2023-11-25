import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Icon } from "@iconify/react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function ResultsPageTemplate({ pageContext, data }) {
  // Prepare Content
  const { title, sectionOne, sectionsProject } =
    data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />

      <HeaderStyles>{sectionOne.header}</HeaderStyles>

      {sectionsProject.map((section) => {
        if (section.isVisible) {
          return (
            <>
              <ProjectSectionStyles>
                <div>
                  <h2>{section.title}</h2>
                  <ReactMarkdown>{section.description}</ReactMarkdown>
                </div>
                <a
                  href={section.imgLinkPrimary.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GatsbyImage
                    image={getImage(section.imgLinkPrimary.image)}
                    alt={section.imgLinkPrimary.alt}
                  />
                  <div>
                    <h3>{section.imgLinkPrimary.title}</h3>
                    <Icon
                      icon="material-symbols:download"
                      width={30}
                      height={30}
                    />
                  </div>
                </a>
                <a
                  href={section.imgLinkSecondary.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GatsbyImage
                    image={getImage(section.imgLinkSecondary.image)}
                    alt={section.imgLinkPrimary.alt}
                  />
                  <div>
                    <h3>{section.imgLinkSecondary.title}</h3>
                    <Icon
                      icon="material-symbols:download"
                      width={30}
                      height={30}
                    />
                  </div>
                </a>
              </ProjectSectionStyles>

              <GatsbyImage
                image={getImage(section.backgroundImage.image)}
                alt={section.backgroundImage.alt}
              />
            </>
          );
        }
      })}

      {/*  */}
    </Layout>
  );
}

const HeaderStyles = styled.h1`
  padding: var(--padMd);
  padding-bottom: 2rem;
  max-width: var(--maxWidthMd);
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: var(--maxWidth);
    padding: var(--padLg);
    padding-bottom: 4rem;
  }

  @media (min-width: 1280px) {
    max-width: var(--maxWidthLg);
  }
`;

const ProjectSectionStyles = styled.section`
  padding: var(--padMd);
  padding-top: 2rem;
  padding-bottom: 2rem;
  max-width: var(--maxWidthMd);
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  position: relative;

  > a {
    justify-self: center;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }
    img {
      border-radius: var(--br);
    }
    h3,
    svg {
      color: var(--black);
    }
    margin-top: 1rem;
  }

  h1,
  p {
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    max-width: var(--maxWidth);
    padding: var(--padLg);
    padding-top: 0;
    padding-bottom: 0;
    gap: 4rem 8rem;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 1fr;

    h1 {
      margin-bottom: 4rem;
    }
    > div:first-child {
      grid-row: 1 / -1;
    }
  }
  @media (min-width: 1280px) {
    max-width: var(--maxWidthLg);
  }
`;

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
    page: file(relativeDirectory: { eq: "results" }, base: { regex: $regx }) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
          }
          sectionsProject {
            isVisible
            title
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
            imgLinkPrimary {
              title
              url
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 360
                    height: 360
                    placeholder: NONE
                    layout: CONSTRAINED
                    transformOptions: { fit: COVER }
                    quality: 50
                  )
                }
              }
            }
            imgLinkSecondary {
              title
              url
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 360
                    height: 360
                    placeholder: NONE
                    layout: CONSTRAINED
                    transformOptions: { fit: COVER }
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
`;
