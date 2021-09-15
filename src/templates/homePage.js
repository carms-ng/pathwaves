import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
// import { EqualWeb } from "../components/EqualWeb"
import ReactMarkdown from 'react-markdown'

import Layout from "../components/Layout"
import { LandingStyles, IntroStyles, SecondStyles, ThirdStyles, ForthStyles, FifthStyles, SixthStyles, AboutStyles, HightlightedStyles } from "../styles/HomePageStyles"

import LocalizedLink from "../components/LocalizedLink"
import Seo from "../components/Seo"

// markup
export default function HomePageTemplate({ pageContext, data: { page } }) {
  // Prepare Content
  const {
    title,
    sectionIntro,
    sectionSecond,
    sectionThird,
    sectionForth,
    sectionFifth,
    sectionSixth,
    sectionAbout
  } = page.childMarkdownRemark.frontmatter

  const collabs = sectionAbout.collaborators

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} >
      <Seo title={`${title}`} lang={pageContext.lang} />
      {/* Equal Web Widget */}
      <Helmet defer={true} >
        {/* <script>{EqualWeb}</script> */}
      </Helmet >
      <LandingStyles>
        {/* Intro Section */}
        <IntroStyles>
          <GatsbyImage
            image={sectionIntro.img.image.childImageSharp.gatsbyImageData}
            alt={sectionIntro.img.alt}
            imgStyle={{ objectFit: 'contain' }}
          />
          <h1>{sectionIntro.header}</h1>
          <p>{sectionIntro.description}</p>
          <LocalizedLink
            className="btn"
            to={sectionIntro.button.url}
            lang={pageContext.lang}
            text={sectionIntro.button.linkText}
          />
          <div id="logo-garden">
            {collabs.map((collab) => (
              <a key={collab.name} href={collab.url}>
                <GatsbyImage
                  image={collab.logo.image.childImageSharp.gatsbyImageData}
                  alt={collab.logo.alt}
                  imgStyle={{ objectFit: 'contain' }}
                />
              </a>
            ))}
          </div>
        </IntroStyles>

        {/* Second Section */}
        <SecondStyles>
          <GatsbyImage
            image={sectionSecond.img.image.childImageSharp.gatsbyImageData}
            alt={sectionSecond.img.alt}
            imgStyle={{ objectFit: 'contain' }}
          />
          {sectionSecond.descriptions.map(({ description, colorHighlight }) => (
            <HightlightedStyles colorHighlight={colorHighlight}>
              <ReactMarkdown>{description}</ReactMarkdown>
            </HightlightedStyles>
          ))}
        </SecondStyles>

        <ThirdStyles>
          <ReactMarkdown>{sectionThird.description}</ReactMarkdown>
        </ThirdStyles>

        <ForthStyles>
          <div>
            <HightlightedStyles colorHighlight={sectionForth.leftComponent.colorHighlight}>
              <ReactMarkdown>{sectionForth.leftComponent.description}</ReactMarkdown>
            </HightlightedStyles>
            <LocalizedLink
              className="btn"
              to={sectionForth.leftComponent.button.url}
              lang={pageContext.lang}
              text={sectionForth.leftComponent.button.linkText}
            />
          </div>
          <div>
            <HightlightedStyles colorHighlight={sectionForth.rightComponent.colorHighlight}>
              <ReactMarkdown>{sectionForth.rightComponent.description}</ReactMarkdown>
            </HightlightedStyles>
            <LocalizedLink
              className="btn"
              to={sectionForth.rightComponent.button.url}
              lang={pageContext.lang}
              text={sectionForth.rightComponent.button.linkText}
            />
          </div>
        </ForthStyles>

        <FifthStyles>
          <div>
            <h2>{sectionFifth.header}</h2>
            <div>
              {sectionFifth.phases.map(phase => (
                <div>
                  <h3>{phase.header}</h3>
                  <small>{phase.date}</small>
                  <p>{phase.description}</p>
                </div>
              ))}
            </div>
            <p>{sectionFifth.endNote}</p>
          </div>
          <GatsbyImage
            image={sectionFifth.img.image.childImageSharp.gatsbyImageData}
            alt={sectionFifth.img.alt}
            imgStyle={{ objectFit: 'contain' }}
          />
        </FifthStyles>

        <SixthStyles>
          <ReactMarkdown>{sectionSixth.description}</ReactMarkdown>
        </SixthStyles>

        {/* Section About*/}
        <AboutStyles>
          <h2>{sectionAbout.header}</h2>
          <h6>{sectionAbout.description}</h6>
          <div className="cards-2b2">
            {collabs.map((collab) => {
              return (
                <div key={collab.name}>
                  <a href={collab.url}>
                    <GatsbyImage
                      image={collab.logo.image.childImageSharp.gatsbyImageData}
                      alt={collab.logo.alt} />
                  </a>
                  <p>{collab.description}</p>
                </div>
              )
            })}
          </div>
          <small>
            {sectionAbout.contactText}
            <br />
            <a href={"mailto:" + sectionAbout.contactEmail}>{sectionAbout.contactEmail}</a>
          </small>
        </AboutStyles>
      </LandingStyles>
    </Layout>
  )
}

export const query = graphql`
  query($regx: String) {
    page: file(relativeDirectory: {eq: "home"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionIntro {
            img {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(width: 150, placeholder: BLURRED, layout: CONSTRAINED)
                }
              }
            }
            header
            description
            button {
              linkText
              url
            }
          }
          sectionSecond {
            descriptions {
              colorHighlight
              description
            }
            img {
              image {
                childImageSharp {
                  gatsbyImageData(width: 150, placeholder: BLURRED, layout: CONSTRAINED)
                }
              }
              alt
            }
          }
          sectionAbout {
            description
            collaborators {
              name
              url
              description
              logo {
                alt
                image {
                  childImageSharp {
                    gatsbyImageData(height: 50, placeholder: BLURRED, layout: CONSTRAINED)
                  }
                }
              }
            }
            contactText
            contactEmail
            header
          }
          sectionThird {
            description
          }
          sectionForth {
            leftComponent {
              description
              colorHighlight
              button {
                linkText
                url
              }
            }
            rightComponent {
              description
              colorHighlight
              button {
                linkText
                url
              }
            }
          }
          sectionFifth {
            header
            phases {
              header
              date
              description
            }
            endNote
            img {
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
          sectionSixth {
            description
          }
        }
      }
    }
  }
`
