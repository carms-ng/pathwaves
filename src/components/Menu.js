import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

export default function Menu({
  isMenuOpen, items, lang, slug,
}) {
  return (
    <MenuStyles isMenuOpen={isMenuOpen}>
      {items.map(({ linkAddress, linkText, childNavItems }) => (
        <NavItem
          key={`menu-${linkText}`}
          linkAddress={linkAddress}
          lang={lang}
          linkText={linkText}
          childNavItems={childNavItems}
          className="btn-blur"
          slug={slug}
        />
      ))}
    </MenuStyles>
  );
}

const MenuStyles = styled.div`
  z-index: 11;
  background: var(--white);
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  transition: var(--slow);
  justify-items: flex-start;
  transform: ${(props) => (props.isMenuOpen ? '' : 'translate(0, -100%)')};
  transition: var(--trans);
  width: 100%;
  grid-gap: 1rem;
  padding: 2rem;
  .btn-blur {
    backdrop-filter: unset;
  }
`;
