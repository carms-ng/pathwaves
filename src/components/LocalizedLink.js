import React from 'react';
import { Link } from 'gatsby';

export default function LocalizedLink({
  id, className, lang, to, text,
}) {
  const linkPath = to === '/' ? `/${lang}` : `/${lang}${to}`;

  return (
    <Link id={id} className={className} to={linkPath}>
      {text}
    </Link>
  );
}
