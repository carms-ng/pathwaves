import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import LocalizedLink from '../components/LocalizedLink';
import Seo from '../components/Seo';
import LogoGarden from '../components/LogoGarden';
import Carousel from '../components/Carousel';

import {
  HomeHeroStyles, NewsletterFormStyles,
} from '../styles/HomePageStyles';

import { BgImageWrapper } from '../styles/InnerStyles';

export default function HomePageTemplate({ pageContext, data }) {
  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
    sectionThree,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  const collabs = data.logos.childMarkdownRemark.frontmatter.sectionTwo.collaborators;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />

      {/* Hero */}
      <HomeHeroStyles>
        <GatsbyImage
          image={sectionOne.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionOne.backgroundImage.alt}
          className="background"
        />
        <div className="hero-wrapper">
          <h1>{sectionOne.header}</h1>
          <div>
            <p>{sectionOne.description}</p>
            <div className="hero-buttons">
              {sectionOne.buttons
                .filter(({ isVisible }) => isVisible)
                .map(({ linkText, url }) => (
                  <LocalizedLink
                    className="btn"
                    key={url}
                    to={url}
                    lang={pageContext.lang}
                  >
                    {linkText}
                  </LocalizedLink>
                ))}
            </div>
          </div>
        </div>

      </HomeHeroStyles>

      {/* Carousel */}
      <BgImageWrapper>
        <GatsbyImage
          image={sectionTwo.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionTwo.backgroundImage.alt}
          className="background"
        />

        <Carousel
          items={sectionTwo.carouselItems}
          lang={pageContext.lang}
          buttonLabel={sectionTwo.buttonLabel}
        />
      </BgImageWrapper>

      {/* Newsletter */}
      <section>
        <NewsletterFormStyles method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <h2>{sectionThree.header}</h2>
          <p>{sectionThree.description}</p>
          <div className="">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input type="name" name="name" id="name" placeholder={sectionThree.form.inputPlaceholderName} />
            <input type="email" name="email" id="email" placeholder={sectionThree.form.inputPlaceholderEmail} />
            <button type="submit" className="btn">{sectionThree.form.buttonText}</button>
          </div>
          {/* <input type="reset" value="Clear" /> */}
        </NewsletterFormStyles>
        <GatsbyImage
          image={sectionThree.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionThree.backgroundImage.alt}
          style={{ marginTop: '-10vw', marginBottom: '-10vw' }}
        />
        {/* Logo Garden */}
        <LogoGarden logos={collabs} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($regx: String) {
    settings: file(relativeDirectory: {eq: "siteSetting"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          logo {
            image {
              childImageSharp {
                gatsbyImageData(width: 180, placeholder: BLURRED, layout: CONSTRAINED)
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
    page: file(relativeDirectory: {eq: "home"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG,
                    layout: FULL_WIDTH,
                    quality: 100
                  )
                }
              }
              alt
            }
            description
            buttons {
              linkText
              url
              isVisible
            }
          }
          sectionTwo {
            buttonLabel
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG,
                    layout: FULL_WIDTH,
                    quality: 100
                  )
                }
              }
              alt
            }
            carouselItems {
              name
              type
              nameAlt
              description
              img {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500,
                      height: 500,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: COVER},
                      quality: 100
                    )
                  }
                }
                alt
              }
              button {
                linkText
                url
              }
            }
          }
          sectionThree {
            header
            description
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG,
                    layout: FULL_WIDTH,
                    quality: 100
                  )
                }
              }
              alt
            }
            form {
              inputPlaceholderName
              inputPlaceholderEmail
              buttonText
            }
          }
        }
      }
    }
    logos: file(relativeDirectory: {eq: "team"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          sectionTwo {
            collaborators {
              name
              url
              logo {
                alt
                image {
                  childImageSharp {
                    gatsbyImageData(
                      height: 80,
                      placeholder: TRACED_SVG,
                      layout: CONSTRAINED,
                      transformOptions: {fit: CONTAIN},
                      quality: 100
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
