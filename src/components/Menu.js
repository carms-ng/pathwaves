import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import LoginButton from "./LoginButton";
import MenuAuth from "./MenuAuth";
import NavItem from "./NavItem";

export default function Menu({
  isMenuOpen,
  items,
  lang,
  slug,
  showAuthMenu,
  menuAuth,
  btnContact,
}) {
  const { isAuthenticated } = useAuth0();
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

      <a
        type="button"
        href={`mailto:${btnContact.mailTo}`}
        className="btn btn-main"
      >
        {btnContact.label}
      </a>

      {showAuthMenu &&
        (isAuthenticated ? (
          <MenuAuth
            lang={lang}
            slug={slug}
            menuAuth={menuAuth}
            ClassName="btn btn-main"
          />
        ) : (
          <LoginButton
            lang={lang}
            label={menuAuth.labelLogin}
            className="btn btn-main"
          />
        ))}

      <LanguageSwitcher lang={lang} slug={slug} />
    </MenuStyles>
  );
}

const MenuStyles = styled.div`
  z-index: 11;
  background: var(--white);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  > a {
    text-transform: lowercase;
  }

  display: grid;
  transition: var(--slow);
  justify-items: flex-start;
  transform: ${(props) => (props.isMenuOpen ? "" : "translate(0, -100%)")};
  transition: var(--trans);
  width: 100%;
  grid-gap: 1rem;
  padding: 2rem;
  .btn-blur {
    backdrop-filter: unset;
  }
`;
