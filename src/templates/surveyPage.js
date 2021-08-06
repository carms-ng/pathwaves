import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'
import LocalizedLink from "../components/LocalizedLink"

// markup
export default function SurveyPageTemplate({ pageContext, data: { page } }) {
  const {
    title,
    policy,
    consentOptions,
    endNote
  } = page.childMarkdownRemark.frontmatter

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} >
      <ConsentStyles>
        <h1>{title}</h1>
        <ReactMarkdown>{policy}</ReactMarkdown>
        <div className="btns-group">
          {consentOptions.map(opt => {
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
        <p>{endNote}</p>
      </ConsentStyles>
    </Layout>
  )
}

const ConsentStyles = styled.div`
  background: var(--linearGradient);
  padding: 10vmin 20px;
  > * {
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
  a {

  }
`

export const query = graphql`
  query($regx: String) {
    page: file(relativeDirectory: {eq: "survey"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          policy
          consentOptions {
            linkText
            linkAddress
            isInterenal
          }
          endNote
        }
      }
    }
  }
`
