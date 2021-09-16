import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'
import LocalizedLink from "../components/LocalizedLink"
import Seo from "../components/Seo"

// markup
export default function ApplyPageTemplate({ pageContext, data }) {
  const {
    frontmatter,
    rawMarkdownBody,
  } = data.page.childMarkdownRemark
  const { title, options } = frontmatter

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} >
      <Seo title={title} lang={pageContext.lang} />
      <ApplyStyles>
        <h1>{title}</h1>
        <ReactMarkdown>{rawMarkdownBody}</ReactMarkdown>
        <div className="btns-group">
          {options?.map(opt => {
            if (opt.isInterenal) {
              return (
                <LocalizedLink
                  className="btn"
                  key={opt.linkAddress}
                  lang={pageContext.lang}
                  to={opt.linkAddress}
                  text={opt.linkText}
                />
              )
            } else {
              return (
                <a className="btn" key={opt.linkAddress} href={opt.linkAddress}>
                  {opt.linkText}
                </a>
              )
            }
          })}
        </div>
      </ApplyStyles>
    </Layout>
  )
}

const ApplyStyles = styled.div`
  background: var(--linearGradient);
  padding: 10vmin 20px;

  > * {
    max-width: var(--maxWidthText);
    margin: 0 auto;
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
`

export const query = graphql`
  query($regx: String) {
    page: file(relativeDirectory: {eq: "apply"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          options {
            linkText
            isInterenal
            linkAddress
          }
        }
        rawMarkdownBody
      }
    }
  }
`
