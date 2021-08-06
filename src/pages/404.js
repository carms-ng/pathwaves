import { useEffect } from 'react'
import { navigate } from 'gatsby'
import { getRedirectLanguage } from '../utils/helper'

const NotFoundPage = () => {
  const slug = "404-page-not-found"

  useEffect(() => {
    const urlLang = getRedirectLanguage()

    navigate(`/${urlLang}/${slug}`, { replace: true })
  }, []);

  return null;
};

export default NotFoundPage
