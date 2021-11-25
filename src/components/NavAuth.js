import React from 'react';
import styled from 'styled-components';
import LocalizedLink from './LocalizedLink';

export default function NavAuth({
  id, slug, lang, nav: { navItemsAuth, buttonDiscord },
}) {
  return (
    <NavAuthStyles id={id} className="btn-group">
      {navItemsAuth.map(({ linkAddress, linkText }) => (
        <LocalizedLink
          className={`btn btn-auth ${slug === linkAddress.substring(1) ? 'active' : ''}`}
          to={linkAddress}
          lang={lang}
          key={`nav-auth-${linkText}`}
        >
          {linkText}
        </LocalizedLink>
      ))}
      {/* discord button */}
      <a
        className="btn btn-auth"
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
  .btn-auth:hover, .btn-auth.active {
    background: rgba(245, 206, 122, 0.5);
  }
  @media(min-width: 1024px) {
    justify-self: flex-start;
  }
`;
