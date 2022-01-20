import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export default function CardImage({
  header, postHeader, subHeader, postSubHeader, img, description,
}) {
  return (
    <CardStyles className="card">
      <GatsbyImage
        image={img.image.childImageSharp.gatsbyImageData}
        alt={img.alt}
        style={{ borderRadius: 'var(--br)' }}
      />
      <h3>
        {header}
        {' '}
        <span>{postHeader}</span>
      </h3>
      <p>
        <span style={{ textTransform: 'uppercase' }}>
          {subHeader}
        </span>
        {postSubHeader}
      </p>
      <p>{description}</p>
    </CardStyles>
  );
}

const CardStyles = styled.div`
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
