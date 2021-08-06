import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  const { file } = useStaticQuery(graphql`
    {
      file(relativeDirectory: {eq: "siteSetting"}) {
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
      }
    }
  `)

  const data = file.childMarkdownRemark.frontmatter.footer

  return (
    <FooterStyles>
      <p>&copy; {new Date().getFullYear()} {data.copyright}</p>
      {data.footerLinks.map(link => {
        if (link.isInterenal) {
          return (
            <Link key={link.linkAddress} to={link.linkAddress}>
              {link.linkText}
            </Link>
          )
        } else {
          return (
            <a key={link.linkAddress} href={link.linkAddress}>
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
  grid-auto-flow: row;
  place-items: center;
  grid-gap: 0.5rem;
  background: var(--black);
  color: var(--white);
  padding: 1.5rem;
  font-family: 'ApfelGrotezk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  a {
    color: var(--white);
  }
  @media (min-width: 640px) {
    grid-template-columns: 200px 1fr 200px;
    grid-auto-flow: dense;
    p {
      grid-column: 2 / 3;
    }
  }
`
