import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { Icon } from "@iconify/react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import { CardsThreesStyles, BgImageRightWrapper } from "../styles/InnerStyles";

export default function ArchivePageTemplate({ pageContext, data }) {
  // Prepare Content
  const { title, sectionOne, sectionTwo } =
    data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />
      {/* hero */}
      <BgImageRightWrapper>
        <GatsbyImage
          image={getImage(sectionOne.backgroundImage.image)}
          alt={sectionOne.backgroundImage.alt}
          imgStyle={{ objectFit: "contain", width: "unset", left: "unset" }}
          className="bg-image__right"
        />

        <HeroStyles>
          <div>
            <h1>{sectionOne.header}</h1>
            <ReactMarkdown>{sectionOne.description}</ReactMarkdown>
          </div>
          <a
            href={sectionOne.imgLinkPrimary.url}
            target="_blank"
            rel="noreferrer"
          >
            <GatsbyImage
              image={getImage(sectionOne.imgLinkPrimary.image)}
              alt={sectionOne.imgLinkPrimary.alt}
            />
            <div>
              <h3>{sectionOne.imgLinkPrimary.title}</h3>
              <Icon icon="material-symbols:download" width={30} height={30} />
            </div>
          </a>
          <a
            href={sectionOne.imgLinkSecondary.url}
            target="_blank"
            rel="noreferrer"
          >
            <GatsbyImage
              image={getImage(sectionOne.imgLinkSecondary.image)}
              alt={sectionOne.imgLinkPrimary.alt}
            />
            <div>
              <h3>{sectionOne.imgLinkSecondary.title}</h3>
              <Icon icon="material-symbols:download" width={30} height={30} />
            </div>
          </a>
        </HeroStyles>
      </BgImageRightWrapper>

      <SectionSecondaryStyles>
        <h2>{sectionTwo.header}</h2>
        {/* cards */}
        <CardsThreesStyles>
          {sectionTwo?.cards?.map((card) => (
            <a
              key={`resources-${card.title}`}
              href={card.url}
              target="_blank"
              rel="noreferrer"
            >
              <GatsbyImage
                image={getImage(card.img.image)}
                alt={card.img.alt}
                style={{ borderRadius: "var(--br)" }}
              />
              <h3>{card.title}</h3>
              <pre>{card.subtitle}</pre>
              <p>{card.description}</p>
            </a>
          ))}
        </CardsThreesStyles>
      </SectionSecondaryStyles>
    </Layout>
  );
}

const HeroStyles = styled.div`
  padding: var(--padMd);
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

const SectionSecondaryStyles = styled.section`
  padding: var(--padMd);
  max-width: var(--maxWidthMd);
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    max-width: var(--maxWidth);
    h2 {
      margin-bottom: 8rem;
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
    page: file(relativeDirectory: { eq: "archive" }, base: { regex: $regx }) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            description
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: NONE
                    layout: CONSTRAINED
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
          sectionTwo {
            header
            cards {
              title
              subtitle
              description
              url
              img {
                alt
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 320
                      height: 240
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
  }
`;
