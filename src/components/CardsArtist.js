import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export default function CardsArtist({ artists }) {
  return (
    <CardsArtistStyles className="cards-member">
      {artists?.map(({
        name, pronouns, artistName, portrait,
      }) => (
        <div key={artistName} className="card">
          <GatsbyImage
            image={portrait.image.childImageSharp.gatsbyImageData}
            alt={portrait.alt}
            style={{ borderRadius: 'var(--br)' }}
          />
          <h3>{artistName}</h3>
          <p>
            <span style={{ textTransform: 'uppercase' }}>
              {name ? `${name} ` : ''}
            </span>
            (
            {pronouns}
            )
          </p>
        </div>
      ))}
    </CardsArtistStyles>
  );
}

const CardsArtistStyles = styled.div`
  max-width: var(--maxWidth);
  padding: var(--padSm);
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(260px, 1fr) );
  justify-items: center;
  grid-gap: 3rem;
  text-align: left;
  margin: 0 auto;
  /* padding: 5rem 0; */
  h3 {
    padding: 0.5rem 0;
  }
  span {
    font-size: 1.6rem;
    font-weight: 400;
  }
  p {
    max-width: unset;
    padding-bottom: 0.5rem;
  }
`;
