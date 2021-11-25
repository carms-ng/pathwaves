import { cloneElement } from 'react';

const getRedirectLanguage = () => {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  const lang = navigator && navigator.language && navigator.language.split('-')[0];
  if (!lang) return 'en';

  switch (lang) {
    case 'fr':
      return 'fr';
    default:
      return 'en';
  }
};

const dateBreakdowner = (dateObj, lang) => {
  const locale = lang === 'en' ? 'en-us' : 'fr-ca';

  return ({
    day: dateObj.toLocaleString(locale, { weekday: 'short' }),
    date: dateObj.getDate(),
    month: dateObj.toLocaleString(locale, { month: 'short' }),
    year: dateObj.getFullYear(),
  });
};

export { getRedirectLanguage, dateBreakdowner };
