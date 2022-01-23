import React from 'react';
import CardImage from './CardImage';
import { CardsThreesStyles, CardsSectionStyles } from '../styles/InnerStyles';

export default function CardsArtist({ artists }) {
  return (
    <CardsSectionStyles>
      <CardsThreesStyles>
        {artists?.map(({
          name, pronouns, artistName, portrait,
        }) => (
          <CardImage
            key={artistName}
            header={artistName}
            subHeader={name ? `${name} ` : ''}
            postSubHeader={pronouns}
            img={portrait}
          />
        ))}
      </CardsThreesStyles>
    </CardsSectionStyles>
  );
}
