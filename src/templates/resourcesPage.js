import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { TailSpin } from "react-loader-spinner";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import NavAuth from "../components/NavAuth";
import Resources from "../components/Resources";

import { AuthHeroStyles, LoadingStyles } from "../styles/InnerStyles";

// markup
export default function ResourcesPageTemplate({
  pageContext: { lang, slug },
  data,
}) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <LoadingStyles>
        <TailSpin color="#333333" height={80} width={80} />
      </LoadingStyles>
    );
  }

  if (!isAuthenticated) {
    loginWithRedirect({ ui_locales: lang === "en" ? "en" : "fr-CA" });
  }

  // Prepare Content
  const { title, description } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  const { nav } = settings;

  return (
    isAuthenticated && (
      <Layout lang={lang} slug={slug} settings={settings}>
        <Seo title={`${title}`} lang={lang} />

        <AuthHeroStyles>
          <div className="wrapper-auth">
            <NavAuth
              id="nav-auth"
              className="btn-group"
              nav={nav}
              slug={slug}
              lang={lang}
            />
            <ResourcesStyles>
              <h1 className="font-lg">{description}</h1>

              {/* Resources Control and Cards */}
              <Resources labels={nav.labelPhases} links={data.links} />
            </ResourcesStyles>
          </div>
        </AuthHeroStyles>
      </Layout>
    )
  );
}

const ResourcesStyles = styled.div`
  h1 {
    font-weight: 400;
    max-width: var(--maxWidthMd);
    margin: 3rem auto;
    text-align: center;
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
          }
        }
      }
    }
    page: file(relativeDirectory: { eq: "resources" }, base: { regex: $regx }) {
      childMarkdownRemark {
        frontmatter {
          title
          description
        }
      }
    }
    links: allFile(
      filter: { relativeDirectory: { eq: "links" }, base: { regex: $regx } }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            description
            url
            phaseNumber
          }
        }
      }
    }
  }
`;
