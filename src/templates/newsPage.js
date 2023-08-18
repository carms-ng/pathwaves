import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { CardsSectionStyles as DefaultCardsSection, CardsThreesStyles } from '../styles/InnerStyles';
import CardImage from '../components/CardImage';

export default function NewsPageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />
      <NewsHeroStyles>
        <GatsbyImage
          image={getImage(sectionOne.backgroundImage.image)}
          alt={sectionOne.backgroundImage.alt}
          className="background"
        />
        <h1>{sectionOne.header}</h1>
      </NewsHeroStyles>
      <CardsSectionStyles>
        <CardsThreesStyles>
          {sectionOne.news.map((n) => (
            <a key={n.title} href={n.url} target="_blank" rel="noreferrer">
              <CardImage
                header={n.title}
                subHeader={n.subtitle}
                img={n.img}
              />
            </a>
          ))}
        </CardsThreesStyles>
      </CardsSectionStyles>
    </Layout>
  );
}

const NewsHeroStyles = styled.section`
  position: relative;
  .background {
    margin-top: 30vw;
  }
  h1 {
    position: absolute;
    top: -2vw;
    left: 15%;
  }
  @media (min-width: 640px) {
    h1 {
      top: 0vw;
    }
  }
  @media (min-width: 768px) {
    h1 {
      top: 1vw;
    }
  }
  @media (min-width: 1024px) {
    .background {
      margin-top: 15vw;
    }
    h1 {
      top: 2vw;
    }
  }
`;

const CardsSectionStyles = styled(DefaultCardsSection)`
  padding-top: 0;

  @media (min-width: 640px) {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    margin-top: -20vw;
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
    page: file(relativeDirectory: {eq: "news"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            cardLinkLabel
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: NONE
                    layout: FULL_WIDTH,
                    quality: 50
                  )
                }
              }
              alt
            }
            news {
              title
              subtitle
              url
              img {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400,
                      height: 240,
                      placeholder: NONE
                      layout: CONSTRAINED,
                      transformOptions: {fit: COVER},
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
  }
`;
