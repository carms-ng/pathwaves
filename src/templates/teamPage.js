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

      <TeamPageStyles>

        {/* Section About */}
        <section id="collaborators">
          <p className="font-lg">{sectionOne.description}</p>
          <div className="cards">
            {sectionOne.collaborators.map(({
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

        {/* Section Team */}
        <section id="team">
          <h1>{sectionTwo.header}</h1>
          <p>{sectionTwo.subHeader}</p>
          <CardsMember members={sectionTwo.members} />

        </section>
      </TeamPageStyles>
    </Layout>
  );
}

const TeamPageStyles = styled.section`
  padding: var(--padSm);
  padding-top: 8rem;
  padding-bottom: 8rem;

  section {
    max-width: var(--maxWidth);
    margin: 0 auto;
  }

  section#collaborators {
    margin-top: 4rem;
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

  section#team {
    text-align: center;
    margin: 0 auto;
    > p {
      margin-bottom: 5rem;
    }
  }
  @media (min-width: 640px) {
    padding: var(--padMd);
  }

  @media (min-width: 1024px) {
    section#collaborators {
      margin-top: 12rem;

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
          sectionTwo {
            header
            subHeader
            members {
              name
              pronouns
              role
              entity
              portrait {
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
                alt
              }
            }
          }
        }
      }
    }
  }
`;
