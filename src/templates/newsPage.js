import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import {
  CardsSectionStyles as DefaultCardsSection,
  CardsThreesStyles,
} from "../styles/InnerStyles";
import CardImage from "../components/CardImage";
import Modal from "../components/Modal";

export default function NewsPageTemplate({ pageContext, data }) {
  // Prepare Content
  const { title, sectionOne } = data.page.childMarkdownRemark.frontmatter;

  const settings = data.settings.childMarkdownRemark.frontmatter;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  return (
    <Layout lang={pageContext.lang} slug={pageContext.slug} settings={settings}>
      <Seo title={`${title}`} lang={pageContext.lang} />
      <NewsHeroStyles>
        <GatsbyImage
          image={getImage(sectionOne.backgroundImage.image)}
          alt={sectionOne.backgroundImage.alt}
          className="background"
        />
        <h1>{sectionOne.header}</h1>
      </NewsHeroStyles>
      <CardsSectionStyles>
        <CardsThreesStyles>
          {sectionOne.news.map((n, i) => (
            <button
              key={n.title}
              type="button"
              onClick={() => {
                setIsModalOpen(true);
                setSelectedCardIndex(i);
              }}
            >
              <CardImage header={n.title} subHeader={n.subtitle} img={n.img} />
            </button>
          ))}
        </CardsThreesStyles>
      </CardsSectionStyles>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        img={sectionOne.news[selectedCardIndex].img}
        title={sectionOne.news[selectedCardIndex].title}
        body={sectionOne.news[selectedCardIndex].modalBody}
      />
    </Layout>
  );
}

const NewsHeroStyles = styled.section`
  position: relative;
  .background {
    margin-top: 30vw;
  }
  h1 {
    position: absolute;
    top: -2vw;
    left: 15%;
  }
  @media (min-width: 640px) {
    h1 {
      top: 0vw;
    }
  }
  @media (min-width: 768px) {
    h1 {
      top: 1vw;
    }
  }
  @media (min-width: 1024px) {
    .background {
      margin-top: 15vw;
    }
    h1 {
      top: 2vw;
    }
  }
`;

const CardsSectionStyles = styled(DefaultCardsSection)`
  padding-top: 0;
  button {
    border: unset;
    cursor: pointer;
    background: unset;
    text-align: unset;
  }

  @media (min-width: 640px) {
    margin-top: 0;
  }
  @media (min-width: 768px) {
    margin-top: -20vw;
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
    page: file(relativeDirectory: { eq: "news" }, base: { regex: $regx }) {
      childMarkdownRemark {
        frontmatter {
          title
          sectionOne {
            header
            cardLinkLabel
            backgroundImage {
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: NONE
                    layout: FULL_WIDTH
                    quality: 50
                  )
                }
              }
              alt
            }
            news {
              title
              subtitle
              modalBody
              url
              img {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: NONE
                      layout: FULL_WIDTH
                      quality: 50
                    )
                  }
                }
                alt
              }
            }
          }
        }
      }
    }
  }
`;
