import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import CardsMember from '../components/CardsMember';

export default function TeamPageTemplate({ pageContext, data }) {
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
      <TeamHeroStyles>
        <GatsbyImage
          image={sectionOne.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionOne.backgroundImage.alt}
          className="background"
        />
        <h1>{sectionOne.header}</h1>
      </TeamHeroStyles>

      <CardsMember members={sectionOne.members} />

      <TeamPageStyles>
        <section id="collaborators">
          <p className="font-lg">{sectionTwo.description}</p>
          <div className="cards">
            {sectionTwo.collaborators.map(({
              name, url, logo, description,
            }) => (
              <div key={name} className="card">
                <a href={url} target="_blank" rel="noreferrer">
                  <GatsbyImage
                    image={logo.image.childImageSharp.gatsbyImageData}
                    alt={logo.alt}
                    style={{ maxWidth: '300px' }}
                  />
                </a>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </TeamPageStyles>
    </Layout>
  );
}

const TeamHeroStyles = styled.section`
  position: relative;
  h1 {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TeamPageStyles = styled.div`
  padding: var(--padMd);
  padding-bottom: 8rem;

  section {
    max-width: var(--maxWidth);
    margin: 0 auto;
  }

  section#collaborators {
    display: grid;
    align-content: center;
    justify-items: center;
    grid-gap: 1rem;

    .font-lg {
      text-align: center;
      max-width: var(--maxWidthMd);
    }
    .cards {
      max-width: var(--maxWidthMd);
      margin: 0 auto;
      padding: 4rem 0 8rem 0;
      display: grid;
      grid-gap: 1rem;
      text-align: left;
      > div {
        display: grid;
        grid-template-rows: 120px 1fr;
        > a {
          align-self: center;
        }
      }
    }
    a {
      color: var(--darkblue);
    }
  }

  @media (min-width: 640px) {
    padding: var(--padMd);
  }

  @media (min-width: 1024px) {
    section#collaborators {
      .font-lg {
        text-align: center;
      }
      .cards {
        max-width: var(--maxWidth);
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-auto-flow: column;
        grid-gap: 5rem;
      }
    }
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
    page: file(relativeDirectory: {eq: "team"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionTwo {
            description
            collaborators {
              url
              name
              description
              logo {
                alt
                image {
                  childImageSharp {
                    gatsbyImageData(
                      height: 80,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: CONTAIN},
                      quality: 100
                    )
                  }
                }
              }
            }
          }
          sectionOne {
            header
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG,
                    layout: FULL_WIDTH,
                    quality: 100
                  )
                }
              }
              alt
            }
            members {
              name
              pronouns
              role
              entity
              portrait {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400,
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
