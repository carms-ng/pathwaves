import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import LocalizedLink from './LocalizedLink';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

export default function Header({
  lang, slug, logo, navItems,
}) {
  console.log(logo, navItems);
  const { isAuthenticated } = useAuth0();

  // Language Switcher
  const toLang = lang === 'en' ? 'fr' : 'en';
  const to = slug === 'home' ? '/' : `/${slug}`;

  return (
    <HeaderStyles>
      {/* Logo */}
      <GatsbyImage
        image={logo.image.childImageSharp.gatsbyImageData}
        alt={logo.alt}
        imgStyle={{ objectFit: 'contain' }}
      />

      {/* Auth button */}
      {isAuthenticated
        ? <LogoutButton className="btn" />
        : <LoginButton className="btn" />}
      {/* Nav Items */}
      {navItems.map((item) => {
        const {
          show, linkAddress, linkText, childNavItems,
        } = item;
        if (show === 'public' || show === 'both') {
          if (linkAddress) {
            // it's a link
            return (
              <LocalizedLink lang={lang} to={linkAddress}>{linkText}</LocalizedLink>
            );
          }
          // it's a dropdown
          return (
            <button type="button">{linkText}</button>
          );
        }
      })}

      {/* Language Switcher */}
      <LocalizedLink className="switcher" lang={toLang} to={to}>
        {toLang}
      </LocalizedLink>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vmin;

  > a {
    font-size: 1.6rem;
    backdrop-filter: blur(2em);
  }

  .switcher {
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    display: grid;
    place-content: center;
    text-transform: uppercase;
    color: var(--black);
    border-radius: var(--br);
    background: transparent;
    transition: var(--trans);

    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
  .btn {
    font-weight: 400;
    padding: 0.25rem 2rem;
  }
`;
