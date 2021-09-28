import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import LocalizedLink from './LocalizedLink'

export default function Footer({ lang }) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "siteSetting"}}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              footer {
                copyright
                footerLinks {
                  isInterenal
                  linkAddress
                  linkText
                }
              }
            }
          }
          base
        }
      }
    }
  `)

  const data = allFile.nodes.map(node => {
    const locale = node.base.split('.')[1]
    const frontmatter = node.childMarkdownRemark.frontmatter.footer
    return ({
      locale,
      frontmatter,
    })
  }).find(elem => lang === elem.locale).frontmatter

  const copyrightText = `©️ ${new Date().getFullYear()} ${data.copyright}`

  return (
    <FooterStyles>
      <LocalizedLink
        id="copyright"
        lang={lang}
        to='/'
        text={copyrightText}
      />
      {data.footerLinks.map(link => {
        if (link.isInterenal) {
          return (
            <LocalizedLink
              key={link.linkAddress}
              lang={lang}
              to={link.linkAddress}
              text={link.linkText}
            />
          )
        } else {
          return (
            <a
              key={link.linkAddress}
              href={link.linkAddress}
              target="_blank"
              rel="noreferrer"
            >
              {link.linkText}
            </a>
          )
        }
      })}
    </FooterStyles>
  )
}

const FooterStyles = styled.footer`
  display: grid;
  grid-gap: 0.5rem;
  background: var(--black);
  color: var(--white);
  padding: 1vh 2vw;
  font-size: 1.6rem;
  a {
    padding: 0.5rem;
    color: var(--white);
    white-space: nowrap;
    &:hover {
      text-decoration: underline;
    }
  }
  a:last-child {
    opacity: 0.7;
  }
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    #copyright {
      grid-column: 2 / 3;
    }
    a:first-child {
      justify-self: center;
    }
    a:last-child {
      justify-self: flex-end;
    }
  }
`
