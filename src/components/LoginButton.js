import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({ lang, label, className }) => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    // Set local storage locale
    localStorage.setItem('lang', lang);

    // redirect to auth0 login page
    loginWithRedirect({ ui_locales: (lang === 'en' ? 'en' : 'fr-CA') });
  };
  return (
    <button
      className={className}
      type="button"
      onClick={handleLogin}
    >
      {label}
    </button>
  );
};

export default LoginButton;
