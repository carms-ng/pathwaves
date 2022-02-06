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
      return;
    }
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
      />
      <div className="card-text">
        <div className="card-text-header">
          <h3>
            {header}
            {' '}
            {postHeader && (<span>{postHeader}</span>)}
          </h3>
          <button type="button" onClick={() => setOpen(!open)}>
            <Icon icon={open ? 'akar-icons:cross' : 'akar-icons:chevron-down'} />
          </button>
        </div>
        {(!!subHeader || !!postSubHeader) && (
          <p>
            <span style={{ textTransform: 'uppercase' }}>
              {subHeader}
            </span>
            {postSubHeader}
          </p>
        )}
        {entity && <p>{entity}</p>}
        {open && (
        <div className="card-text-open">
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
  p, h3 {
    max-width: unset;
  }
  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
    line-height: 0;
  }
  .card-text {
    padding: 1rem 1.5rem;
    background-color: ${(props) => (props.open ? '#C1D3EC' : 'transparent')};
    transition: ${(props) => (props.open ? 'var(--trans)' : 'unset')};
    position: ${(props) => (props.open ? 'absolute' : 'relative')};
    z-index: ${(props) => (props.open ? 1 : 0)};
    width: 100%;
  }
  .card-text-header {
    display: grid;
    grid-template-columns: 1fr 3rem;
    padding-bottom: 10px;
  }
  .card-text-open {
    font-size: 16px;
    a {
      color: darkblue;
      cursor: pointer;
      padding-bottom: 10px;
    }
  }
`;
