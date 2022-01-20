import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Icon } from '@iconify/react';

import LocalizedLink from './LocalizedLink';
import LoginButton from './LoginButton';
import NavItem from './NavItem';
import Menu from './Menu';
import DarkOverlay from './DarkOverlay';
import LanguageSwitcher from './LanguageSwitcher';
import MenuAuth from './MenuAuth';

export default function Header({
  lang, slug, logo, navItems, isMenuOpen, setMenuOpen, menuAuth,
}) {
  const { isAuthenticated } = useAuth0();

  // Nav Items
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
        ? <MenuAuth lang={lang} slug={slug} menuAuth={menuAuth} btnClassName="btn btn-main btn-auth" />
        : <LoginButton lang={lang} label={menuAuth.labelLogin} className="btn btn-main btn-auth" />}

      {/* Center: Logo */}
      <LocalizedLink
        to="/"
        lang={lang}
        className="logo"
      >
        <GatsbyImage
          image={logo?.image.childImageSharp.gatsbyImageData}
          alt={logo?.alt}
          imgStyle={{ objectFit: 'contain' }}
        />
      </LocalizedLink>

      {/* Right Nav Items & Lang Switcher */}
      <div className="header__right">
        {/* Nav Items */}
        <div className="nav-items">
          {items.map(({ linkAddress, linkText, childNavItems }) => (
            <NavItem
              key={linkText}
              linkAddress={linkAddress}
              slug={slug}
              lang={lang}
              linkText={linkText}
              childNavItems={childNavItems}
              className="btn-blur"
            />
          ))}
        </div>

        {/* Language Switcher */}
        <LanguageSwitcher lang={lang} slug={slug} />

      </div>
      {/* Hamburger */}
      <div id="menu">
        <button
          className="btn-menu"
          type="button"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Open or Close Menu"
        >
          <Icon icon="gg:menu" style={{ fontSize: '3rem' }} />
        </button>
        <Menu
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          items={items}
          lang={lang}
          slug={slug}
          menuAuth={menuAuth}
        />
      </div>
      {isMenuOpen && <DarkOverlay isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
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
  font-size: 16px;

  /* layout */
  display: grid;
  align-items: center;
  justify-content: space-between;

  .btn-auth {
    grid-area: auth;
    display: none;
  }
  .logo {
    grid-area: logo;
    backdrop-filter: blur(2em);
  }
  .header__right {
    grid-area: nav-items;
    display: none;
    .nav-items .btn-blur {
      text-transform: lowercase;
    }
  }
  #menu {
    grid-area: menu;
    > button {
      border: 0;
      background: transparent;
    }
  }

  grid-template-areas:
    "logo menu";

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto auto;
    grid-template-areas: "logo nav-items auth";
    align-items: start;

    .logo {
      justify-self: flex-start;
    }
     #menu {
       display: none;
     }
    .btn-auth {
      display: flex;
    }
    .header__right {
      display: block;
    }
    .header__right {
      display: flex;
      align-items: flex-start;
      .nav-items {
        display: flex;
        align-items: flex-start;
        white-space: nowrap;
      }
    }
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-areas: "auth logo nav-items";
    .logo {
      justify-self: center;
    }
    .btn-auth {
      justify-self: flex-start;
    }
    .header__right {
      justify-self: flex-end;
    }
  }
`;
