import React from 'react';
import CardImage from './CardImage';
import { CardsThreesStyles, CardsSectionStyles } from '../styles/InnerStyles';

export default function CardsMember({ members, cardLinkLabel }) {
  return (
    <CardsSectionStyles>
      <CardsThreesStyles>
        {members.map(({
          name, pronouns, role, portrait, entity, description, url,
        }) => (
          <CardImage
            key={name}
            header={name}
            postHeader={` ${pronouns}`}
            subHeader={role}
            entity={entity}
            img={portrait}
            description={description}
            url={url}
            cardLinkLabel={cardLinkLabel}
          />
        ))}
      </CardsThreesStyles>
    </CardsSectionStyles>
  );
}
