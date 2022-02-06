import React, { useEffect, useState, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export default function CardImage({
  header,
  postHeader,
  subHeader,
  postSubHeader,
  img,
  entity,
  description,
  url,
  cardLinkLabel,
}) {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <CardStyles ref={node} open={open}>
      <GatsbyImage
        image={img.image.childImageSharp.gatsbyImageData}
        alt={img.alt}
        style={{ borderRadius: 'var(--br)' }}
      />
      <div className="card-text">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3rem' }}>
          <h3>
            {header}
            {' '}
            <span>{postHeader}</span>
          </h3>
          <button type="button" onClick={() => setOpen(!open)}>
            <Icon icon={open ? 'akar-icons:cross' : 'akar-icons:chevron-down'} />
          </button>
        </div>
        <p>
          <span style={{ textTransform: 'uppercase' }}>
            {subHeader}
          </span>
          {postSubHeader}
        </p>
        <p>{entity}</p>
        {open
        && (
        <div className="card-text__popup">
          {description && (
            <p>{description}</p>
          )}
          {url && (
            <a href={url} target="_blank" rel="noreferrer">{cardLinkLabel}</a>
          )}
        </div>
        )}
      </div>
    </CardStyles>
  );
}

const CardStyles = styled.div`
  position: relative;
  span {
    font-size: 1.6rem;
    font-weight: 400;
  }
  p {
    max-width: unset;
    padding-bottom: 0.5rem;
  }
  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
    line-height: 0;
  }
  .card-text {
    padding: ${(props) => (props.open ? '2rem' : '1.5rem')};
    border-radius: var(--br);
    background-color: ${(props) => (props.open ? '#C1D3EC' : 'transparent')};
    transform: scale(${(props) => (props.open ? 1.07 : 1)});
    transition: var(--trans);
    position: ${(props) => (props.open ? 'absolute' : 'relative')};
    z-index: ${(props) => (props.open ? 1 : 0)};
    width: 100%;
  }
  .card-text__popup {
    font-size: 14px;
    * {
      margin: 0.5rem 0;
    }
    a {
      color: darkblue;
      cursor: pointer;
    }
  }
`;
