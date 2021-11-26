import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export default function Gallery({ images }) {
  const [active, setActive] = useState(0);

  return (
    <GalleryStyles>
      {/* Active Image */}
      <div>
        {images.map(({ image, alt }, index) => (
          <GalleryImageStyles isActive={index === active} key={`img-gallery-${alt}`}>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={alt}
            />
          </GalleryImageStyles>
        ))}
      </div>
      {/* image Buttons */}
      <div>
        {images.map(({ image, alt }, index) => (
          <button
            type="button"
            key={`btn-gallery-${alt}`}
            onClick={() => setActive(index)}
          >
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={alt}
            />
          </button>
        ))}
      </div>
    </GalleryStyles>
  );
}

const GalleryImageStyles = styled.div`
  transition: opacity 2s ease;
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  display: grid;
  > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
`;

const GalleryStyles = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  > div:first-child {
    display: grid;
    > * {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
    }
  }
  > div:last-child {
    display: inline;
    overflow-x: scroll;
    white-space: nowrap;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
    > * {
      width: 12rem;
      height: 8rem;
      margin: 2rem 2rem 0 0;
    }
  }
  button {
    border: 0;
    cursor: pointer;
  }
`;
