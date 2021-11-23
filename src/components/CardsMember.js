import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export default function CardsMember({ members }) {
  return (
    <CardsMemberStyles className="cards-member">
      {members.map(({
        name, role, pronouns, portrait, entity,
      }) => (
        <div key={name} className="card">
          <GatsbyImage
            image={portrait.image.childImageSharp.gatsbyImageData}
            alt={portrait.alt}
          />
          <h3>
            {name}
            {' '}
            <span>
              (
              {pronouns}
              )
            </span>
          </h3>
          <p>{role}</p>
          <p>{entity}</p>
        </div>
      ))}
    </CardsMemberStyles>
  );
}

const CardsMemberStyles = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(280px, 1fr) );
  justify-items: center;
  grid-gap: 3rem;
  text-align: left;
  margin: 0 auto;
  padding: 5rem 0;
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
