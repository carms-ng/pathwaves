import React from 'react';
import LocalizedLink from './LocalizedLink';

export default function LanguageSwitcher({ slug, lang }) {
  // Language Switcher
  const toLang = lang === 'en' ? 'fr' : 'en';
  const to = slug === 'home' ? '/' : `/${slug}`;

  return (
    <LocalizedLink className="btn-blur" lang={toLang} to={to} style={{ textTransform: 'uppercase' }}>
      {toLang}
    </LocalizedLink>
  );
}
