import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

// markup
export default function NotFoundPage({ data }) {
  const { header, img, linkText } = data.file.childMarkdownRemark.frontmatter.fourOhFour

  return (
    <Layout noFooter={true}>
      <FourOhFourStyles>
        <GatsbyImage
          image={img.image.childImageSharp.gatsbyImageData}
          alt={img.alt} />
        <h1>{header}</h1>
        <Link className="btn" to="/">{linkText}</Link>
      </FourOhFourStyles>
    </Layout>
  )
}

const FourOhFourStyles = styled.div`
  background: var(--linearGradient);
  padding: 20px;
  height: 100vh;
  text-align: center;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 40px;
  .btn {
    width: unset;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const query = graphql`
  {
    file(relativeDirectory: {eq: "siteSetting"}) {
      childMarkdownRemark {
        frontmatter {
          fourOhFour {
            header
            linkText
            img {
              alt
              image {
                childImageSharp {
                  gatsbyImageData (
                    width: 200
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
