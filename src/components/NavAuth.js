import React from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';

export default function NavAuth({
  id, slug, lang, nav: { navItemsSecondary, buttonDiscord },
}) {
  return (
    <NavAuthStyles id={id} className="btn-group">
      {navItemsSecondary.map(({ linkAddress, linkText }) => (
        <LocalizedLink
          className={`btn btn-sub ${slug === linkAddress.substring(1) ? 'active' : ''}`}
          to={linkAddress}
          lang={lang}
          key={`nav-auth-${linkText}`}
        >
          {linkText}
        </LocalizedLink>
      ))}
      {/* discord button */}
      <a
        className="btn btn-sub"
        href={buttonDiscord.url}
        target="_blank"
        rel="noreferrer"
      >
        {buttonDiscord.linkText}

      </a>
    </NavAuthStyles>
  );
}

const NavAuthStyles = styled.div`
  justify-self: center;
  align-self: start;
  .btn-sub:hover, .btn-sub.active {
    background: rgba(245, 206, 122, 0.5);
  }
  @media(min-width: 1024px) {
    justify-self: flex-start;
  }
`;
