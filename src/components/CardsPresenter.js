import React from 'react';
import CardImage from './CardImage';
import { CardsThreesStyles, CardsSectionStyles } from '../styles/InnerStyles';

export default function CardsPresenter({ members }) {
  return (
    <CardsSectionStyles>
      <CardsThreesStyles className="cards-member">
        {members.map(({
          name, role, pronouns, portrait, entity,
        }) => (
          <CardImage
            key={name}
            header={name}
            postHeader={` ${pronouns}`}
            subHeader={role}
            description={entity}
            img={portrait}
          />
        ))}
      </CardsThreesStyles>
    </CardsSectionStyles>
  );
}
