import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';

export function CarouselItem({
  index, item, lang, isLast, activeItem, setActiveItem, buttonLabel,
}) {
  const {
    name, type, nameAlt, description, img, button,
  } = item;

  return (
    <CarouselItemStyles active={index === activeItem}>
      <GatsbyImage
        image={img.image.childImageSharp.gatsbyImageData}
        alt={img.alt}
        style={{ borderRadius: 'var(--br)' }}
        className="carousel-img"
      />
      <div className="carousel-text">
        <pre>{type}</pre>
        <h3>{name}</h3>
        <h4>{nameAlt}</h4>
        <p>{description}</p>
        {button
        && (
        <LocalizedLink
          className="btn"
          to={button.url}
          lang={lang}
        >
          {button.linkText}

        </LocalizedLink>
        )}
        <button
          type="button"
          className="link"
          onClick={() => setActiveItem(isLast ? 0 : (index + 1))}
        >
          {buttonLabel}
          {' '}
          ⟶
        </button>
      </div>
    </CarouselItemStyles>
  );
}

export default function Carousel({ items, lang, buttonLabel }) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <CarouselStyles>
      {items.map((item, index) => (
        <CarouselItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          buttonLabel={buttonLabel}
          index={index}
          key={item.name}
          item={item}
          lang={lang}
          isLast={index === (items.length - 1)}
        />
      ))}
    </CarouselStyles>
  );
}

const CarouselItemStyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition: all 2s ease;

  .carousel-img {
    position: relative;
    z-index: 0;
  }
  .carousel-text {
    position: relative;
    z-index: 1;
    background: white;
    padding: 2rem;
    margin: -5rem 1rem 0rem 1rem;
    display: grid;
    gap: 1.5rem;
    > h3 {
      text-transform: uppercase;
    }
    > p {
      height: 20vh;
      margin-bottom: 2rem;
      overflow-y: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }
    }
    > a {
      justify-self: start;
    }
    > button {
      justify-self: end;
      padding: 1rem 2rem;
    }
  }

  @media (min-width: 640px) {
    .carousel-text {
      margin: -5rem 3rem 0rem 3rem;
      padding: 3rem;
    }
  }


  @media (min-width: 1024px) {
    max-width: unset;
    display: flex;
    flex-direction: row-reverse;
    .carousel-text {
      padding: 4rem;
      margin: 4rem -8rem 4rem 0rem;
      max-width: 500px;
    }
  }
`;

const CarouselStyles = styled.div`
  padding: var(--padSm);
  max-width: var(--maxWidth);
  margin: 0 auto;

  display: grid;
  > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }

  @media (min-width: 640px) {
    padding: var(--padLg);
  }
  @media (min-width: 768px) {
  }
`;
