import { useEffect } from "react";
import { navigate } from "gatsby";

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  switch (lang) {
    case "fr":
      return "fr";
    default:
      return "en";
  }
};

const NotFoundPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}/404-page-not-found`);
  }, []);

  return null;
};

export default NotFoundPage;
