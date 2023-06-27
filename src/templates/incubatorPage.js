import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function IncubatorPageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
    sectionThree,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  // Track moving dot
  const timelineRef = useRef();

  const handleScroll = () => {
    const rect = timelineRef.current.getBoundingClientRect();
    const height = window.innerHeight;

    if (rect.top > height / 2) {
      document.documentElement.style.setProperty('--top', '0');
    } else if (rect.bottom < height / 2) {
      document.documentElement.style.setProperty('--top', `${Math.round(rect.height)}px`);
    } else {
      document.documentElement.style.setProperty('--top', `${Math.round((height / 2) - rect.top)}px`);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />
      <SectionOneStyles>
        <h1 className="h2">{sectionOne.header}</h1>
        <div className="grid-ladder-wrapper">
          <GatsbyImage
            image={getImage(sectionOne.backgroundImageTop.image)}
            alt={sectionOne.backgroundImageTop.alt}
            className="background"
          />
          <div className="grid-ladder">
            {sectionOne.descriptions.map(({ description }) => (
              <p key={description}>{description}</p>
            ))}
          </div>
          <GatsbyImage
            image={getImage(sectionOne.backgroundImageBottom.image)}
            alt={sectionOne.backgroundImageBottom.alt}
            className="background"
          />
        </div>
      </SectionOneStyles>

      <SectionSecondaryStyles>
        <h2>{sectionTwo.header}</h2>

        <div className="timeline" ref={timelineRef}>
          {sectionTwo.phases.map(({ header, date, description }, index) => (
            <div key={header} className="phase">
              <h3>{index + 1}</h3>
              <h4>{header}</h4>
              <small>{date}</small>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <p className="font-lg">{sectionTwo.endNote}</p>
      </SectionSecondaryStyles>
      <GatsbyImage
        image={getImage(sectionThree.backgroundImage.image)}
        alt={sectionThree.backgroundImage.alt}
        style={{ marginTop: '-12vw', marginBottom: '-12vw' }}
      />
      <SectionSecondaryStyles>
        <h2>{sectionThree.header}</h2>
        <ReactMarkdown>{sectionThree.landAcknowledgement}</ReactMarkdown>
      </SectionSecondaryStyles>

    </Layout>
  );
}

const SectionOneStyles = styled.section`
  margin-bottom: 8rem;

  h1 {
    padding: var(--padMd);
    padding-bottom: 2rem;
    margin: 0 auto;
    text-align: center;
  }
  .grid-ladder {
    position: relative;
    max-width: var(--maxWidthSm);
    margin: 0 auto;
    padding: 0 2rem;
    p {
      margin: 2rem 0;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      padding: var(--padLg);
      padding-bottom: 0;
    }
    .grid-ladder-wrapper {
      .background {
        margin-top: -10vw;
        margin-bottom: -10vw;
      }
      .background {
        &:first-child {
          margin-top: -10vw;
          margin-bottom: -36vw;
        }
        &:last-child {
          margin-top: -36vw;
          margin-bottom: -10vw;
        }
      }
    }
    .grid-ladder {
      max-width: var(--maxWidthLg);
      padding: 25vmax 2rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 1fr;
      gap: 1rem 0;

      p:nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      p:last-child {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
      }
    }
  }
`;

const SectionSecondaryStyles = styled.div`
  max-width: var(--maxWidthLg);
  margin: 0 auto;
  padding: var(--padMd);

  h2 {
    margin-bottom: 4rem;
    text-align: center;
  }

  .font-lg {
    text-align: center;
    max-width: var(--maxWidthMd);
    margin-top: 6rem;
  }

  .timeline {
    position: relative;
    margin-left: 1rem;
    padding-left: 2rem;
    max-width: var(--maxWidthSm);

    &::after {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: var(--black);
      top: var(--top);
      left: 0;
      transform: translateX(-50%);
    }

    &::before {
      content: '';
      position: absolute;
      width: 3px;
      background: var(--black);
      top: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-50%);
    }
    .phase {
      position: relative;
      margin-bottom: 2rem;

      > h3 {
        font-weight: 400;
        font-size: 5rem;
        line-height: 4rem;
      }
      > * {
        margin-bottom: 1rem;
      }
      > p {
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 640px) {
    .timeline {
      margin: 0 auto;
      padding-left: 4rem;
    }
  }

  @media (min-width: 1024px) {
    padding: var(--padLg);
    max-width: var(--maxWidthLg);

    h2 {
      margin-bottom: 8rem;
      max-width: unset;
    }
    .timeline {
      margin: 0 auto;
      padding-left: 0rem;
      max-width: unset;

      &::after, &::before {
        left: 50%;
      }

      .phase {
        width: 50%;
        padding: 0rem 4rem;
      }
      .phase:nth-child(odd) {
        text-align: right;
        left: 0;
      }
      .phase:nth-child(even) {
        text-align: left;
        left: 50%;
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
    page: file(relativeDirectory: {eq: "incubator"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            descriptions {
              description
            }
            backgroundImageTop {
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
            backgroundImageBottom {
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
          }
          sectionTwo {
            header
            phases {
              header
              description
              date
            }
            endNote
          }
          sectionThree {
            header
            landAcknowledgement
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
          }
        }
      }
    }
  }
`;
