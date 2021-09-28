import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactMarkdown from 'react-markdown'

import Layout from "../components/Layout"
import { IntroStyles, SecondStyles, ThirdStyles, ForthStyles, FifthStyles, SixthStyles, AboutStyles } from "../styles/HomePageStyles"

import LocalizedLink from "../components/LocalizedLink"
import Seo from "../components/Seo"

// markup
export default function HomePageTemplate({ pageContext, data }) {
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
  } = data.page.childMarkdownRemark.frontmatter

  const collabs = sectionAbout.collaborators

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} >
      <Seo title={`${title}`} lang={pageContext.lang} />

      <IntroStyles>
        <GatsbyImage
          image={sectionIntro?.img?.image.childImageSharp.gatsbyImageData}
          alt={sectionIntro?.img?.alt}
          imgStyle={{ objectFit: 'contain' }}
        />
        <h1>{sectionIntro?.header}</h1>
        <p className="font-lg">{sectionIntro?.description}</p>
        <a className="btn" href={sectionIntro?.button?.url} target="_blank" rel="noreferrer">
          {sectionIntro?.button?.linkText}
        </a>

        <div id="logo-garden">
          {collabs?.map((collab) => (
            <a key={collab.name} href={collab.url} target="_blank" rel="noreferrer">
              <GatsbyImage
                image={collab.logo.image.childImageSharp.gatsbyImageData}
                alt={collab.logo.alt}
                imgStyle={{ objectFit: 'contain' }}
                style={{ height: '100%', maxWidth: `300px` }}
              />
            </a>
          ))}
        </div>
      </IntroStyles>

      <SecondStyles>
        <GatsbyImage
          image={sectionSecond?.img?.image.childImageSharp.gatsbyImageData}
          alt={sectionSecond?.img?.alt}
          imgStyle={{ objectFit: 'contain', width: 'unset' }}
          className="bg-image__left"
        />
        <div className="text__right">
          <ReactMarkdown>{sectionSecond?.description}</ReactMarkdown>
        </div>
      </SecondStyles>

      <ThirdStyles>
        <ReactMarkdown className="font-lg">{sectionThird?.description}</ReactMarkdown>
      </ThirdStyles>

      <ForthStyles>
        <div className="grid-wrapper">
          <div>
            <ReactMarkdown>{sectionForth?.leftComponent?.description}</ReactMarkdown>
          </div>
          <a
            className="btn"
            href={sectionForth?.leftComponent?.button?.url}
            target="_blank"
            rel="noreferrer"
          >
            {sectionForth?.leftComponent?.button?.linkText}
          </a>

          <div>
            <ReactMarkdown>{sectionForth?.rightComponent?.description}</ReactMarkdown>
          </div>
          <LocalizedLink
            className="btn"
            to={sectionForth?.rightComponent?.button?.url}
            lang={pageContext.lang}
            text={sectionForth?.rightComponent?.button?.linkText}
          />
        </div>
        <GatsbyImage
          image={sectionForth?.leftComponent?.img?.image.childImageSharp.gatsbyImageData}
          alt={sectionForth?.leftComponent?.img?.alt}
          className="bg-image__bl"
        />
        <GatsbyImage
          image={sectionForth?.rightComponent?.img?.image.childImageSharp.gatsbyImageData}
          alt={sectionForth?.rightComponent?.img?.alt}
          className="bg-image__tr"
        />
      </ForthStyles>

      <FifthStyles>
        <div className="text__left">
          <h2>{sectionFifth?.header}</h2>
          <div id="phases">
            {sectionFifth?.phases?.map(phase => (
              <div key={phase.header}>
                <h3>{phase.header}</h3>
                <small>{phase.date}</small>
                <p>{phase.description}</p>
              </div>
            ))}
          </div>
          <p className="font-lg">{sectionFifth?.endNote}</p>
        </div>
        <GatsbyImage
          image={sectionFifth?.img?.image.childImageSharp.gatsbyImageData}
          alt={sectionFifth?.img?.alt}
          imgStyle={{ objectFit: 'contain', width: 'unset', left: 'unset' }}
          className="bg-image__right"
        />
      </FifthStyles>

      <SixthStyles>
        <ReactMarkdown className="font-lg">{sectionSixth?.description}</ReactMarkdown>
        <a className="btn" href={sectionSixth?.button?.url} target="_blank" rel="noreferrer">
          {sectionSixth?.button?.linkText}
        </a>
      </SixthStyles>

      {/* Section About*/}
      <AboutStyles>
        <p className="font-lg">{sectionAbout.description}</p>
        <div className="cards-2b2">
          {collabs.map((collab) => {
            return (
              <div key={collab.name}>
                <a href={collab.url} target="_blank" rel="noreferrer">
                  <GatsbyImage
                    image={collab.logo.image.childImageSharp.gatsbyImageData}
                    alt={collab.logo.alt}
                    style={{ maxWidth: `300px`}}
                  />
                </a>
                <p>{collab.description}</p>
              </div>
            )
          })}
        </div>
        <p>
          {sectionAbout.contactText}
          <br />
          <a
            href={"mailto:" + sectionAbout.contactEmail}
            target="_blank"
            rel="noreferrer"
          >
            {sectionAbout.contactEmail}
          </a>
        </p>
      </AboutStyles>
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
            description
            img {
              image {
                childImageSharp {
                  gatsbyImageData(width: 500, placeholder: TRACED_SVG, layout: CONSTRAINED)
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
                    gatsbyImageData(
                      height: 80,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: CONTAIN}
                    )
                  }
                }
              }
            }
            contactText
            contactEmail
          }
          sectionThird {
            description
          }
          sectionForth {
            leftComponent {
              description
              button {
                linkText
                url
              }
              img {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                    )
                  }
                }
                alt
              }
            }
            rightComponent {
              description
              button {
                linkText
                url
              }
              img {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 400,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                    )
                  }
                }
                alt
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
                  gatsbyImageData(
                    width: 500,
                    placeholder: TRACED_SVG,
                    layout: CONSTRAINED,
                  )
                }
              }
              alt
            }
          }
          sectionSixth {
            description
            button {
              linkText
              url
            }
          }
        }
      }
    }
  }
`
