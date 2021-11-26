import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';

import { CardsThreesStyles } from '../styles/InnerStyles';

export default function HomePageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />
      {/* hero */}
      <SectionOneStyles>
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
      </SectionOneStyles>

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

        {/* carousel */}
        <div>
          <Carousel
            lang={pageContext.lang}
            items={sectionTwo.carouselItems}
            buttonLabel={sectionTwo.buttonLabel}
          />
        </div>
      </SectionSecondaryStyles>

      <SectionSecondaryStyles>
        <h2>{sectionThree.header}</h2>
        {/* cards */}
        <CardsThreesStyles>
          {sectionThree.cards.map((card) => (
            <a key={`resources-${card.title}`} href={card.url} target="_blank" rel="noreferrer">
              <GatsbyImage
                image={card.img.image.childImageSharp.gatsbyImageData}
                alt={card.img.alt}
                style={{ borderRadius: 'var(--br)' }}
              />
              <h3>{card.title}</h3>
              <pre>{card.subtitle}</pre>
              <p>{card.description}</p>
            </a>
          ))}
        </CardsThreesStyles>
      </SectionSecondaryStyles>

      <SectionSecondaryStyles>
        <h2>{sectionFour.header}</h2>
        {/* gallery */}
        <Gallery images={sectionFour.images} />

      </SectionSecondaryStyles>
    </Layout>
  );
}

const SectionOneStyles = styled.section`
  padding: var(--padMd);
  max-width: var(--maxWidthMd);
  margin: 0 auto;
  display: grid;
  gap: 3rem;

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
                gatsbyImageData(
                  width: 180, placeholder: BLURRED, layout: CONSTRAINED
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
            buttonLabel
            carouselItems {
              name
              description
              type
              img {
                alt
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500,
                      height: 500,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: COVER},
                      quality: 100
                    )
                  }
                }
              }
            }
          }
          sectionThree {
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
                      width: 320,
                      height: 240,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: COVER},
                      quality: 100
                    )
                  }
                }
              }
            }
          }
          sectionFour {
            header
            images {
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 1000,
                    height: 600,
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
`;
