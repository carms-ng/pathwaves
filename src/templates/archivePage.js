import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

import { CardsThreesStyles, BgImageRightWrapper } from '../styles/InnerStyles';

export default function HomePageTemplate({ pageContext, data }) {
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
      {/* hero */}
      <BgImageRightWrapper>
        <GatsbyImage
          image={sectionOne.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionOne.backgroundImage.alt}
          imgStyle={{ objectFit: 'contain', width: 'unset', left: 'unset' }}
          className="bg-image__right"
        />

        <HeroStyles>
          <div>
            <h1>{sectionOne.header}</h1>
            <ReactMarkdown>{sectionOne.description}</ReactMarkdown>
          </div>
          <GatsbyImage
            image={sectionOne.imgPrimary.image.childImageSharp.gatsbyImageData}
            alt={sectionOne.imgPrimary.alt}
          />
          <GatsbyImage
            image={sectionOne.imgSecondary.image.childImageSharp.gatsbyImageData}
            alt={sectionOne.imgPrimary.alt}
          />
        </HeroStyles>
      </BgImageRightWrapper>

      <SectionSecondaryStyles>
        <h2>{sectionTwo.header}</h2>
        {/* cards */}
        <CardsThreesStyles>
          {sectionTwo.cards.map((card) => (
            <a
              key={`findings-${card.title}`}
              href={card.url}
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 'var(--br)', background: 'var(--white)', padding: '3rem' }}
            >
              <h3>{card.title}</h3>
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

  > div:not(:first-child) {
    justify-self: center;
    border-radius: var(--br);
  }

  h1, p {
    margin-bottom: 2rem;
  }
  @media(min-width: 1024px) {
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
  @media(min-width: 1280px) {
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

  @media(min-width: 1024px) {
    max-width: var(--maxWidth);
    h2 {
      margin-bottom: 8rem;
    }
  }
  @media(min-width: 1280px) {
    max-width: var(--maxWidthLg);
  }
`;

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
          }
        }
      }
    }
    page: file(relativeDirectory: {eq: "archive"}, base: {regex: $regx}) {
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
                    width: 500,
                    placeholder: TRACED_SVG,
                    layout: CONSTRAINED,
                    quality: 100
                  )
                }
              }
              alt
            }
            imgPrimary {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 360,
                    height: 360,
                    placeholder: TRACED_SVG,
                    layout: CONSTRAINED,
                    transformOptions: {fit: COVER},
                    quality: 100
                  )
                }
              }
            }
            imgSecondary {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 360,
                    height: 360,
                    placeholder: TRACED_SVG,
                    layout: CONSTRAINED,
                    transformOptions: {fit: COVER},
                    quality: 100
                  )
                }
              }
            }
          }
          sectionTwo {
            header
            cards {
              description
              title
              url
            }
          }
        }
      }
    }
  }
`;
