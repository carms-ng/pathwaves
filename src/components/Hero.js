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
  margin-top: 10vmax;

  h1 {
    position: absolute;
    top: 0;
    left: 55%;
    padding-right: 1rem;
    word-break: break-word;
  }
  @media (min-width: 1024px) {
    margin: 0;
    h1 {
      top: unset;
      bottom: 25vmax;
    }
  }
`;
