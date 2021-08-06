import { useEffect } from 'react'
import { navigate } from 'gatsby'
import { getRedirectLanguage } from '../utils/helper'

const NotFoundPage = () => {
  const slug = "404-page-not-found"

  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}/${slug}`);
  }, []);

  return null;
};

export default NotFoundPage;
