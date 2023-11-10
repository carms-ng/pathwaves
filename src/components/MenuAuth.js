import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import LocalizedLink from "./LocalizedLink";
import LogoutButton from "./LogoutButton";

export default function MenuAuth({
  lang,
  slug,
  menuAuth: { labelMenu, labelLogout, navItemsAuth: items },
  menuBtnClassName,
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
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <DropdownStyles ref={node}>
      <button
        className={menuBtnClassName}
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          fontWeight: items.some(
            (child) => slug === child.linkAddress.substring(1)
          )
            ? "700"
            : "400",
        }}
      >
        {labelMenu}
        <Icon icon="akar-icons:chevron-up" style={{ marginLeft: "0.5rem" }} />
      </button>
      {open && (
        <ul className="dropdown-menu">
          {items.map(({ linkText, linkAddress }) => (
            <li className="dropdown-menu-item" key={linkAddress}>
              <LocalizedLink
                lang={lang}
                to={linkAddress}
                style={{
                  fontWeight: slug === linkAddress.substring(1) ? "700" : "400",
                }}
              >
                {linkText}
              </LocalizedLink>
            </li>
          ))}
          <li>
            <LogoutButton label={labelLogout} />
          </li>
        </ul>
      )}
    </DropdownStyles>
  );
}

const DropdownStyles = styled.div`
  position: relative;

  > button {
    display: flex;
    align-items: center;
    text-transform: lowercase;
  }
  ul {
    padding: 0.5rem;
  }
  li {
    list-style: none;
    padding: 0.5rem 1rem;
  }
  a {
    padding: 0.5rem;
    color: var(--black);
    & :hover {
      text-decoration: none;
    }
  }

  @media (min-width: 768px) {
    ul {
      position: absolute;
      left: 0;
      bottom: 3rem;
      background: white;
      border-radius: var(--br);
    }
  }
`;
