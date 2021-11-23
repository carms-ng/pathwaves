import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';

export default function Dropdown({
  text, lang, items, className,
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
    <DropdownStyles ref={node}>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(!open)}
      >
        {text}
      </button>
      {open && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li className="dropdown-menu-item">
              <LocalizedLink lang={lang} to={item.linkAddress}>
                {item.linkText}
              </LocalizedLink>
            </li>
          ))}
        </ul>
      )}
    </DropdownStyles>
  );
}

const DropdownStyles = styled.div`
  display: grid;
  grid-auto-flow: row;
  position: relative;
  ul {
    position: absolute;
    left: 1rem;
    top: 6rem;
    background: white;
    border-radius: var(--br);
    padding: 0.5rem
  }
  li {
    list-style: none;
    padding: 0.5rem 1rem;
  }
`;
