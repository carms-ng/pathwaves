import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import styled from 'styled-components';
import Layout from '../components/Layout';

// import LocalizedLink from '../components/LocalizedLink';
import Seo from '../components/Seo';

// markup
export default function IncubatorPageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
    sectionThree,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />
      <IncubatorPageStyles>
        <section>
          <h1 className="h2">{sectionOne.header}</h1>
          <div className="grid-ladder">
            {sectionOne.descriptions.map(({ description }) => (
              <p key={description}>{description}</p>
            ))}
          </div>
        </section>
        <section>
          <h2>{sectionTwo.header}</h2>

          <div className="timeline">
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
        </section>
        <section>
          <h2>{sectionThree.header}</h2>
          <ReactMarkdown>{sectionThree.landAcknowledgement}</ReactMarkdown>
        </section>
      </IncubatorPageStyles>

    </Layout>
  );
}

const IncubatorPageStyles = styled.div`
  padding: var(--padMd);

  section {
    max-width: var(--maxWidth);
    margin: 0 auto;
  }

  h1, h2 {
    text-align: center;
    margin-bottom: 4rem;
  }

  h2 {
    margin-top: 8rem;
  }

  .font-lg {
    text-align: center;
    max-width: var(--maxWidthMd);
    margin-top: 6rem;
  }

  .grid-ladder {
    max-width: var(--maxWidthSm);
    margin: 0 auto;
  }
  .timeline {
    position: relative;
    margin-left: 1rem;
    padding-left: 2rem;
    max-width: var(--maxWidthSm);

    /* The actual timeline (the vertical ruler) */
    &::after {
      content: '';
      position: absolute;
      width: 3px;
      background: var(--black);
      top: 3rem;
      bottom: 3rem;
      left: 0;
      transform: translateX(-50%);
    }
    .phase {
      position: relative;
      margin-bottom: 2rem;

      > h3 {
        font-weight: 400;
        font-size: 5rem;
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

    .grid-ladder {
      max-width: unset;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem 0;

      p:nth-child(2) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
      p:nth-child(3) {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
      }
    }

    h1, h2 {
      margin-bottom: 8rem;
    }

    h2 {
      margin-top: 16rem;
    }

    .timeline {
      margin: 0 auto;
      padding-left: 0rem;
      max-width: unset;

      &::after {
        left: 50%;
      }
      .phase {
        width: 50%;
        padding: 1rem 4rem;
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
          }
        }
      }
    }
  }
`;
