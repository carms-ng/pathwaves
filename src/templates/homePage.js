import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import LocalizedLink from "../components/LocalizedLink"
import Seo from "../components/Seo"

// markup
export default function HomePageTemplate({ pageContext, data: { page } }) {
  // Prepare Content
  const {
    title,
    sectionIntro,
    sectionSecond,
    sectionSubscribe,
    sectionSurvey,
    sectionAbout
  } = page.childMarkdownRemark.frontmatter

  const collabs = sectionAbout.collaborators

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} >
      <Seo title={title} lang={pageContext.lang} />
      <LandingStyles>
        {/* Intro Section */}
        <IntroStyles>
          <GatsbyImage
            image={sectionIntro.img.image.childImageSharp.gatsbyImageData}
            alt={sectionIntro.img.alt}
            imgStyle={{ objectFit: 'contain' }}
          />
          <pre>{sectionIntro.pre}</pre>
          <h1>{sectionIntro.header}</h1>
          <p>{sectionIntro.description}</p>
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
          <p>{sectionSecond.description}</p>
        </SecondStyles>
        {/* Subscribe section */}
        <SurveyStyles>
          <h2>{sectionSurvey.header}</h2>
          <div className="flex-y-md">
            <p>{sectionSurvey.descriptionLeft}</p>
            <p>{sectionSurvey.descriptionRight}</p>
          </div>
          <div>
            <small>{sectionSurvey.preLinkText}</small>
            <LocalizedLink
              className="btn"
              to={sectionSurvey.url}
              lang={pageContext.lang}
              text={sectionSurvey.linkText}
            />
          </div>
        </SurveyStyles>
        {/* Subscribe Section */}
        <SubscribeStyles>
          <h2>{sectionSubscribe.header}</h2>
          <p>{sectionSubscribe.description}</p>
          <small>{sectionSubscribe.form.preInputText}</small>
          {/* TODO: Wire Netlify Form */}
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input type="email" name="email" id="email" placeholder={sectionSubscribe.form.placeholder} />
            <button type="submit">{sectionSubscribe.form.buttonText}</button>
            {/* <input type="reset" value="Clear" /> */}
          </form>
        </SubscribeStyles>
        {/* Section About*/}
        <AboutStyles>
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
                  gatsbyImageData (
                    width: 150
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
            }
            pre
            header
            description
          }
          sectionSecond {
            img {
              image {
                childImageSharp {
                  gatsbyImageData (
                    width: 150
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
              alt
            }
            description
          }
          sectionSurvey {
            header
            descriptionLeft
            descriptionRight
            preLinkText
            linkText
            url
          }
          sectionSubscribe {
            header
            description
            form {
              preInputText
              placeholder
              buttonText
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
                      height: 50
                      placeholder: BLURRED
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
            contactText
            contactEmail
          }
        }
      }
    }
  }
`

// styling
const LandingStyles = styled.div`
  section {
    padding: 20px;
    height: 100vh;
    text-align: center;
    > * {
      max-width: var(--maxWidth);
    }
    > p, h6 {
      max-width: var(--maxWidthText);
    }
  }
`
const IntroStyles = styled.section`
  background: var(--linearGradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  > * {
    margin: 2vmin 0;
  }

  /* Logo Garden */
  #logo-garden {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
  }
  @media (min-width: 640px) {
    justify-content: center;
  }
  @media (min-width: 1024px) {
    #logo-garden {
      margin-top: 4rem;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2rem;
    }
  }
  /* .horizontal-scroll-wrapper {
    max-width: unset;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    > a {
      padding: 0 2rem;
    }
    @media (min-width: 1024px) {
      margin-top: 3rem;
      > a {
        padding: 0 3rem;
      }
    }
  } */
`
const SecondStyles = styled.section`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 40px;
`
const SurveyStyles = styled.section`
  background: var(--linearGradient);
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 12px;
  p {
    padding: 6px 0;
  }
  > div {
    width: 100%;
  }
  .btn {
    margin-top: 1.5rem;
  }
  @media (min-width: 1024px) {
    grid-gap: 30px;
    .flex-y-md {
      display: flex;
      text-align: left;
      > p {
        padding: 20px;
      }
    }
  }
`
const SubscribeStyles = styled.section`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 1rem;

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-top: 0.5rem;
  }
  input {
    border-radius: var(--br) 0 0 var(--br);
    padding: 16px;
    border: 1px solid var(--lightgrey);
  }
  button {
    border-radius: 0 var(--br) var(--br) 0;
    background: var(--black);
    color: var(--white);
  }
  @media (min-width: 1024px) {
    grid-gap: 1.5rem;
    p {
      padding: 2rem 0;
    }
  }
`
const AboutStyles = styled.section`
  padding-top: 4rem !important;
  height: unset !important;
  background: var(--linearGradient);
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 1rem;

  .cards-2b2 {
    padding: 2rem 0 4rem 0;
    display: grid;
    grid-gap: 1rem;
    text-align: left;
    > div {
      display: grid;
      grid-template-rows: 120px 1fr;
      > a {
        align-self: center;
      }
    }
    p {
      padding: 12px 0;
    }
  }
  a {
    color: var(--darkblue);
  }
  @media (min-width: 1024px) {
    padding-top: 9rem !important;
    padding-bottom: 5rem !important;
    .cards-2b2 {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      grid-gap: 2rem;
    }
  }
`
