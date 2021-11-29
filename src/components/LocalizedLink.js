import React from 'react';
import { Link } from 'gatsby';

export default function LocalizedLink({
  id, className, lang, to, children, style,
}) {
  const linkPath = to === '/' ? `/${lang}` : `/${lang}${to}`;

  return (
    <Link id={id} className={className} to={linkPath} style={style}>
      {children}
    </Link>
  );
}
