import React from 'react';
import LocalizedLink from './LocalizedLink';

export default function NavAuth({
  navItems, slug, lang, page: { button },
}) {
  return (
    <div id="nav-auth" className="btn-group">
      {navItems.map(({ linkAddress, linkText }) => (
        <LocalizedLink
          className={`btn btn-auth ${slug === linkText.toLowerCase() ? 'active' : ''}`}
          to={linkAddress}
          lang={lang}
          key={`nav-auth-${linkText}`}
        >
          {linkText}
        </LocalizedLink>
      ))}
      {/* discord button */}
      <a className="btn btn-auth" href={button.url} target="_blank" rel="noreferrer">{button.linkText}</a>
    </div>
  );
}
