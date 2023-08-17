import React from 'react';
import CardImage from './ExpandableCardImage';
import { CardsThreesStyles, CardsSectionStyles } from '../styles/InnerStyles';

export default function CardsMember({ members, cardLinkLabel, header }) {
  return (
    <CardsSectionStyles>
      {header && <h2 style={{ marginBottom: '5rem', maxWidth: 'unset' }}>{header}</h2>}
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
