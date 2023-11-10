import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

export default function CardImage({ header, subHeader, img }) {
  return (
    <CardStyles>
      <CardImageWrapper>
        <GatsbyImage image={getImage(img.image)} alt={img.alt} />
      </CardImageWrapper>
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
  max-width: 400px;

  p,
  h3 {
    max-width: unset;
  }
  .card-text {
    padding: 1rem 1.5rem;
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
`;
