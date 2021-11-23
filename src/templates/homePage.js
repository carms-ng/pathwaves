import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import Layout from '../components/Layout';

import LocalizedLink from '../components/LocalizedLink';
import Seo from '../components/Seo';
import LogoGarden from '../components/LogoGarden';
import Carousel from '../components/Carousel';

// markup
export default function HomePageTemplate({ pageContext, data }) {
  console.log(data);

  // Prepare Content
  const {
    title,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
  } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  const collabs = data.logos.childMarkdownRemark.frontmatter.sectionOne.collaborators;

  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />

      {/* Hero */}
      <SectionOneStyles>
        <h1>{sectionOne.header}</h1>
        <p>{sectionOne.description}</p>
        <GatsbyImage
          image={sectionOne.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionOne.backgroundImage.alt}
        />
        <div>
          {sectionOne.buttons.map(({ linkText, url }) => (
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
      </SectionOneStyles>

      {/* Carousel */}
      <Carousel
        items={sectionTwo.carouselItems}
        lang={pageContext.lang}
        buttonLabel={sectionTwo.buttonLabel}
      />

      {/* Survey */}
      <SectionThreeStyles>
        <div className="text__left">
          <h2>{sectionThree.header}</h2>
          <p>{sectionThree.descriptionPrimary}</p>
          <LocalizedLink
            className="btn"
            to={sectionThree.button.url}
            lang={pageContext.lang}
          >
            {sectionThree.button.linkText}
          </LocalizedLink>
          <p>{sectionThree.descriptionSecondary}</p>
        </div>

        <GatsbyImage
          image={sectionThree.backgroundImage.image.childImageSharp.gatsbyImageData}
          alt={sectionThree.backgroundImage.alt}
          imgStyle={{ objectFit: 'contain', width: 'unset', left: 'unset' }}
          className="bg-image__right"
        />
      </SectionThreeStyles>

      {/* Newsletter */}
      <SectionFourStyles>
        <h2>{sectionFour.header}</h2>
        <p>{sectionFour.description}</p>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input type="name" name="name" id="name" placeholder={sectionFour.form.inputPlaceholderName} />
          <input type="email" name="email" id="email" placeholder={sectionFour.form.inputPlaceholderEmail} />
          <button type="submit">{sectionFour.form.buttonText}</button>
          {/* <input type="reset" value="Clear" /> */}
        </form>
      </SectionFourStyles>

      {/* Logo Garden */}
      <LogoGarden logos={collabs} />

    </Layout>
  );
}

const SectionOneStyles = styled.section`
  display: relative;

  > h1 {

  }
  > p {

  }

`;

const SectionThreeStyles = styled.section`
  position: relative;
  padding: var(--padSm);
  .text__left {
    position: relative;
    display: grid;
    gap: 5rem;
    max-width: calc(var(--maxWidth) / 5 * 3);
  }
  .bg-image__right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.1;
    opacity: 0.1;
  }

  @media (min-width: 640px) {
    padding: var(--padLg);
    .btn {
      padding: 0.5rem 6rem;
      justify-self: start;
    }
  }
  @media (min-width: 1024px) {
    .text__left {
      margin-left: calc((100vw - var(--maxWidth)) / 2);
    }
    .bg-image__right {
      opacity: 1;
    }
  }
`;

const SectionFourStyles = styled.section`
  padding: var(--padSm);
  max-width: var(--maxWidth);
  margin: 0 auto;
  text-align: center;

  > * {
    margin-bottom: 5rem;
  }

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 0.5rem;

    input {
      padding: 1rem;
      border: 1px solid var(--lightgrey);
      border-radius: var(--br);
    }
    button {
      border-radius: var(--br);
      background: var(--black);
      color: var(--white);
      padding: 0.5rem;
    }
  }
  @media (min-width: 640px) {
    padding: var(--padLg);
    form {
      grid-template-columns: 1fr 1fr;
      gap: 5rem;

      button {
        grid-column: 1 / -1;
        justify-self: center;
        padding: 0.5rem 6rem;
      }
    }
  }
`;

export const query = graphql`
  query($regx: String) {
    settings: file(relativeDirectory: {eq: "siteSetting"}, base: {regex: $regx}) {
      childMarkdownRemark {
        frontmatter {
          logo {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 180, placeholder: BLURRED, layout: CONSTRAINED)
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
                    transformOptions: {fit: COVER},
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
            }
          }
          sectionTwo {
            buttonLabel
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
            descriptionPrimary
            button {
              linkText
              url
            }
            descriptionSecondary
            backgroundImage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 500,
                    placeholder: TRACED_SVG,
                    layout: CONSTRAINED,
                  )
                }
              }
            }
          }
          sectionFour {
            header
            description
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
          sectionOne {
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
