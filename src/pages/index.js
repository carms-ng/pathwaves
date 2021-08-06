import { useEffect } from 'react'
import { navigate } from 'gatsby'
import { getRedirectLanguage } from '../utils/helper'

const IndexPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}`);
  }, []);

  return null;
};

export default IndexPage;
