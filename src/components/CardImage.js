import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export default function CardImage({
  header,
  subHeader,
  img,
}) {
  return (
    <CardStyles>
      <GatsbyImage
        image={getImage(img.image)}
        alt={img.alt}
      />
      <div className="card-text">
        <h3>{header}</h3>
        {subHeader && <p>{subHeader}</p>}
      </div>
    </CardStyles>
  );
}

const CardStyles = styled.div`
  position: relative;
  margin: 0 auto;

  p, h3 {
    max-width: unset;
  }
  .card-text {
    padding: 1rem 1.5rem;
  }
`;
