import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import LocalizedLink from '../components/LocalizedLink';
import Seo from '../components/Seo';

export default function GenericPageTemplate({ pageContext, data }) {
  const {
    frontmatter,
    rawMarkdownBody,
  } = data.page.childMarkdownRemark;
  const { title, options, endNote } = frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={title} lang={pageContext.lang} />
      <GenericStyles>
        <h1>{title}</h1>
        <ReactMarkdown>{rawMarkdownBody}</ReactMarkdown>
        <div className="btns-group">
          {options?.map((opt) => {
            if (opt.isInterenal) {
              return (
                <LocalizedLink
                  className="btn"
                  key={opt.linkAddress}
                  lang={pageContext.lang}
                  to={opt.linkAddress}
                >
                  {opt.linkText}
                </LocalizedLink>
              );
            }
            return (
              <a
                className="btn"
                key={opt.linkAddress}
                href={opt.linkAddress}
                target="_blank"
                rel="noreferrer"
              >
                {opt.linkText}
              </a>
            );
          })}
        </div>
        <p>{endNote}</p>
      </GenericStyles>
    </Layout>
  );
}

const GenericStyles = styled.div`
  background: var(--linearGradient);
  padding: 10vmin 20px;
  > * {
    margin: 0 auto;
    max-width: var(--maxWidthText);
  }
  h1 {
    text-align: center;
    padding-bottom: 2rem;
  }
  h3 {
    padding-top: 2rem;
    text-decoration: underline;
  }
  > * {
    padding: 0.5rem 0;
  }
  ul {
    padding-left: 20px;
  }
  li {
    padding-bottom: 0.5rem;
  }
`;

export const query = graphql`
  query($regx: String, $slug: String) {
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
    page: file(relativeDirectory: {eq: $slug}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          options {
            linkText
            linkAddress
            isInterenal
          }
          endNote
        }
        rawMarkdownBody
      }
    }
  }
`;
