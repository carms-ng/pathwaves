import React from 'react';
import Dropdown from './Dropdown';
import LocalizedLink from './LocalizedLink';

export default function NavItem({
  linkAddress, linkText, lang, childNavItems, className, slug,
}) {
  if (linkAddress) {
    return (
      <LocalizedLink
        key={linkText}
        lang={lang}
        to={linkAddress}
        style={{ fontWeight: slug === linkAddress.substring(1) ? '700' : '400' }}
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
      slug={slug}
    />
  );
}
