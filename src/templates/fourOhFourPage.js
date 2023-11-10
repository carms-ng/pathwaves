import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "../components/Layout";
import LocalizedLink from "../components/LocalizedLink";
import Seo from "../components/Seo";

export default function NotFoundPageTemplate({ pageContext, data }) {
  const { title, header, img, linkText } =
    data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  return (
    <Layout
      noFooter
      lang={pageContext.lang}
      slug={pageContext.slug}
      settings={settings}
    >
      <FourOhFourStyles>
        <Seo title={title} lang={pageContext.lang} />
        <GatsbyImage image={getImage(img.image)} alt={img.alt} />
        <h1>{header}</h1>
        <LocalizedLink className="btn" lang={pageContext.lang} to="/">
          {linkText}
        </LocalizedLink>
      </FourOhFourStyles>
    </Layout>
  );
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
`;

export const query = graphql`
  query ($regx: String) {
    settings: file(
      relativeDirectory: { eq: "siteSetting" }
      base: { regex: $regx }
    ) {
      childMarkdownRemark {
        frontmatter {
          logo {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 180
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
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
            btnContact {
              label
              mailTo
            }
          }
        }
      }
    }
    page: file(
      relativeDirectory: { eq: "fourOhFour" }
      base: { regex: $regx }
    ) {
      childMarkdownRemark {
        frontmatter {
          title
          header
          linkText
          img {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
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
`;
