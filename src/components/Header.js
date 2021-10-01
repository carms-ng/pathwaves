import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';

export default function Header({ lang, slug }) {
  // Language Switcher
  const toLang = lang === 'en' ? 'fr' : 'en';
  const to = slug === 'home' ? '/' : `/${slug}`;

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "siteSetting"}}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              nav {
                button {
                  linkText
                  url
                }
              }
            }
          }
          base
        }
      }
    }
  `);

  const data = allFile.nodes.map((node) => {
    const locale = node.base.split('.')[1];
    const frontmatter = node.childMarkdownRemark.frontmatter.nav;
    return ({
      locale,
      frontmatter,
    });
  }).find((elem) => lang === elem.locale).frontmatter;

  return (
    <HeaderStyles>
      {/* Header button */}
      <a
        className="btn"
        href={data?.button?.url}
        target="_blank"
        rel="noreferrer"
      >
        {data?.button?.linkText}
      </a>

      {/* Language Switcher */}
      <LocalizedLink className="switcher" lang={toLang} to={to}>
        {toLang}
      </LocalizedLink>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2vmin;

  > a {
    font-size: 1.6rem;
    backdrop-filter: blur(2em);
  }

  .switcher {
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    display: grid;
    place-content: center;
    text-transform: uppercase;
    color: var(--black);
    border-radius: var(--br);
    background: transparent;
    transition: var(--trans);

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
  .btn {
    display: none;
    font-weight: 400;
    padding: 0.25rem 2rem;
  }

  @media (min-width: 1024px) {
    justify-content: space-between;
    .btn {
      display: block;
    }
  }
`;
