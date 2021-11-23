import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export default function Hero({ header, backgroundImage }) {
  return (
    <HeroStyles>
      <h1>{header}</h1>
      <GatsbyImage
        image={backgroundImage.image.childImageSharp.gatsbyImageData}
        alt={backgroundImage.alt}
      />
    </HeroStyles>
  );
}

const HeroStyles = styled.section`
  position: relative;
  display: grid;
  margin-top: 15vmin;

  h1 {
    position: absolute;
    top: 10vmin;
    left: 55%;
    padding-right: 1rem;
    word-break: break-all;
  }
  @media (min-width: 640px) {
    margin-top: 10vmin;
    h1 {
      top: 20vmin;
    }
  }
  @media (min-width: 1024px) {
    margin: 0;
    h1 {
      top: 30vmin;
    }
  }
`;
