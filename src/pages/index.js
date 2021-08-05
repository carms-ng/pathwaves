import React from "react"
import { Link, graphql } from "gatsby"

// markup
const IndexPage = ({ data: { page: { childMarkdownRemark: { frontmatter } } } }) => {
  const {
    title,
    sectionIntro,
    sectionSecond,
    sectionSubscribe,
    sectionSurvey,
    sectionAbout
  } = frontmatter

  console.log(title,
    sectionIntro,
    sectionSecond,
    sectionSubscribe,
    sectionSurvey,
    sectionAbout)
  return (
    <h1>
      home
    </h1>
  )
}

export default IndexPage

// TODO: Moved to template
export const query = graphql`
  {
    page: file(relativeDirectory: {eq: "home"}, base: {regex: "/.en./"}) {
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
                    width: 300
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
