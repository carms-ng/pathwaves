import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import ReactMarkdown from 'react-markdown'


// markup
export default function SurveyPage({ data: { page } }) {
  const {
    title,
    policy,
    consentOptions,
    endNote
  } = page.childMarkdownRemark.frontmatter

  return (
    <Layout>
      <ConsentStyles>
        <h1>{title}</h1>
        <ReactMarkdown>{policy}</ReactMarkdown>
        <div className="btns-group">
          {consentOptions.map(opt => {
            if (opt.isInterenal) {
              return (
                <Link className="btn" key={opt.linkAddress} to={opt.linkAddress}>
                  {opt.linkText}
                </Link>
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
  {
    page: file(relativeDirectory: {eq: "survey"}, base: {regex: "/.en.md$/"}) {
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
