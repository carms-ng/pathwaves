import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({ className }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className={className}
      type="button"
      onClick={() => loginWithRedirect({ ui_locales: 'fr-CA' })}
    >
      Log In
    </button>
  );
};

export default LoginButton;
