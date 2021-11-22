import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import LocalizedLink from './LocalizedLink';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import NavItem from './NavItem';

export default function Header({
  lang, slug, logo, navItems,
}) {
  const { isAuthenticated } = useAuth0();

  // Language Switcher
  const toLang = lang === 'en' ? 'fr' : 'en';
  const to = slug === 'home' ? '/' : `/${slug}`;

  const items = navItems.filter(({ show }) => (
    show === 'both'
    || (isAuthenticated && show === 'private')
    || (!isAuthenticated && show === 'public')
  ));

  // Dropdown handling
  return (
    <HeaderStyles>
      {/* Left: Auth button */}
      {isAuthenticated
        ? <LogoutButton className="btn btn-main" />
        : <LoginButton className="btn btn-main" />}

      {/* Center: Logo */}
      <GatsbyImage
        image={logo?.image.childImageSharp.gatsbyImageData}
        alt={logo?.alt}
        imgStyle={{ objectFit: 'contain' }}
        className="logo"
      />

      {/* Right Nav Items & Lang Switcher */}
      <div className="header__right">
        {/* Nav Items */}
        <div className="nav-items">
          {items.map(({ linkAddress, linkText, childNavItems }) => (
            <NavItem
              key={linkText}
              linkAddress={linkAddress}
              lang={lang}
              linkText={linkText}
              childNavItems={childNavItems}
              className="btn-blur"
            />
          ))}
        </div>

        {/* Language Switcher */}
        <LocalizedLink className="btn-blur" lang={toLang} to={to}>
          {toLang}
        </LocalizedLink>
      </div>

    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 2vmin;

  /* layout */
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;

  .btn-main {
    grid-area: auth;
    display: none;
    font-weight: 400;
    padding: 0.25rem 2rem;
  }
  .logo {
    grid-area: logo;
  }
  .header__right {
    grid-area: menu;
    display: none;
  }

  grid-template-areas: "logo";


  /* display only logo and NavMenu */

  @media (min-width: 640px) {

  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr auto auto;
    grid-template-areas: "logo menu auth";
    .logo {
      justify-self: flex-start;
    }
    .btn-main, .header__right {
      display: block;
    }
    .header__right {
      display: flex;
      align-items: flex-start;
      .nav-items {
        display: flex;
        align-items: flex-start;
      }
    }
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "auth logo menu";

    .logo {
      justify-self: center;
    }
    .btn-main {
      display: block;
      justify-self: flex-start;
    }

  }
`;
