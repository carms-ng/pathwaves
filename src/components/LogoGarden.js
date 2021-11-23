import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

export default function LogoGarden({ logos }) {
  return (
    <LogoGardenStyles>
      {logos.map(({ name, url, logo }) => (
        <a key={name} href={url} target="_blank" rel="noreferrer">
          <GatsbyImage
            image={logo.image.childImageSharp.gatsbyImageData}
            alt={logo.alt}
            imgStyle={{ objectFit: 'contain' }}
            style={{ height: '100%', maxWidth: '300px' }}
          />
        </a>
      ))}
    </LogoGardenStyles>
  );
}

const LogoGardenStyles = styled.div`
  padding: var(--padSm);
  max-width: var(--maxWidth);
  max-height: 16vh;
  margin: 1rem auto 10rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 1rem 2rem;
  > a {
    max-height: 8vh;
    width: fit-content;
  }
  @media (min-width: 640px) {
    max-height: unset;
    > a {
      max-height: unset;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 6rem;
  }
`;
