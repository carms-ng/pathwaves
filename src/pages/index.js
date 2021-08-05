import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

// TODO: Moved to template
const LandingStyles = styled.div`
  section {
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`

// markup
const IndexPage = ({ data: { page, collaborators }}) => {
  const {
    title,
    sectionIntro,
    sectionSecond,
    sectionSubscribe,
    sectionSurvey,
    sectionAbout
  } = page.childMarkdownRemark.frontmatter
  console.log(page, collaborators)

  const collabs = collaborators.nodes.map((node) => {
    return node.childMarkdownRemark.frontmatter
  })

  console.log(collabs)

  return (
    <Layout>
      <LandingStyles>
        {/* Intro Section */}
        <section id="intro">
          {/* TODO: Replace Logo */}
          <GatsbyImage
            image={sectionIntro.img.image.childImageSharp.gatsbyImageData}
            alt={sectionIntro.img.alt}
            imgStyle={{ height: `auto` }} />
          <pre>{sectionIntro.pre}</pre>
          <h1>{sectionIntro.header}</h1>
          <p>{sectionIntro.description}</p>
          <div id="logo-garden">
            {collabs.map((collab) => {
              return (
                <a href="#">
                  <GatsbyImage
                    image={collab.logo.image.childImageSharp.gatsbyImageData}
                    alt={collab.logo.alt} />
                </a>
              )
            })}
          </div>
        </section>
        {/* Second Section */}
        <section id="second">
          <GatsbyImage
            image={sectionSecond.img.image.childImageSharp.gatsbyImageData}
            alt={sectionSecond.img.alt}
            imgStyle={{ height: `auto` }} />
          <p>{sectionSecond.description}</p>
        </section>
        {/* Subscribe section */}
        <section id="survey">
          <h2>{sectionSurvey.header}</h2>
          <div>
            <p>{sectionSurvey.descriptionLeft}</p>
            <p>{sectionSurvey.descriptionRight}</p>
          </div>
          <div>
            <small>{sectionSurvey.preLinkText}</small>
            <a href={sectionSurvey.url}>{sectionSurvey.linkText}</a>
          </div>
        </section>
        {/* Subscribe Section */}
        <section>
          <h2>{sectionSubscribe.header}</h2>
          <p>{sectionSubscribe.description}</p>
          {/* TODO: Wire Netlify Form */}
          <form>
            <small>{sectionSubscribe.form.preInputText}</small>
            <input type="text" placeholder={sectionSubscribe.form.placeholder}/>
            <button type="submit">{sectionSubscribe.form.buttonText}</button>
          </form>
        </section>
        {/* Section About*/}
        <section>
          <h2>{sectionAbout.header}</h2>
          <p>{sectionAbout.description}</p>
          <div>
            {collabs.map((collab) => {
              return (
                <div>
                  <a href="#">
                    <GatsbyImage
                      image={collab.logo.image.childImageSharp.gatsbyImageData}
                      alt={collab.logo.alt} />
                  </a>
                  <p>{collab.description}</p>
                </div>
              )
            })}
          </div>
        </section>
      </LandingStyles>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    page: file(relativeDirectory: {eq: "home"}, base: {regex: "/.en.md$/"}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionIntro {
            img {
              alt
              image {
                childImageSharp {
                  gatsbyImageData (
                    width: 300
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
            header
            description
          }
        }
      }
    }
    collaborators: allFile(filter: {relativeDirectory: {eq: "collaborators"}, base: {regex: "/.en.md$/"}}) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            description
            name
            url
            logo {
              alt
              image {
                childImageSharp {
                  gatsbyImageData (
                    width: 300
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
// import React, { useEffect } from "react";
// import { navigate } from "gatsby";

// const getRedirectLanguage = () => {
//   if (typeof navigator === `undefined`) {
//     return "en";
//   }

//   const lang = navigator && navigator.language && navigator.language.split("-")[0];
//   if (!lang) return "en";

//   switch (lang) {
//     case "fr":
//       return "fr";
//     default:
//       return "en";
//   }
// };

// const IndexPage = () => {
//   useEffect(() => {
//     const urlLang = getRedirectLanguage();

//     navigate(`/${urlLang}`);
//   }, []);

//   return null;
// };

// export default IndexPage;
