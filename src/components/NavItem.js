import React from 'react';
// import styled from 'styled-components';
import Dropdown from './Dropdown';
import LocalizedLink from './LocalizedLink';

export default function NavItem({
  linkAddress, linkText, lang, childNavItems, className,
}) {
  if (linkAddress) {
    return (
      <LocalizedLink
        key={linkText}
        lang={lang}
        to={linkAddress}
        className={className}
      >
        {linkText}
      </LocalizedLink>
    );
  }
  return (
    <Dropdown
      key={linkText}
      lang={lang}
      text={linkText}
      items={childNavItems}
      className={className}
    />
  );
}

// const NavItemStyles = styled.div``;
