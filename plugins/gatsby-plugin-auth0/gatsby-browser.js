import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';

const onRedirectCallback = (appState) => {
  appState && appState.targetUrl && navigate(appState.targetUrl);
};

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }, pluginOptions) => {
  const lang = localStorage.getItem('lang') || 'en';

  return (
    <Auth0Provider
      domain={pluginOptions.domain}
      clientId={pluginOptions.clientId}
      redirectUri={`${window.location.origin}/${lang}/schedule`}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  );
};
