const React = require('react');
const { Auth0Provider } = require('@auth0/auth0-react');

console.log(`✨Auth domain: ${process.env.AUTH0_DOMAIN}`);
module.exports = ({ element }) => (
  <Auth0Provider
    domain={process.env.AUTH0_DOMAIN}
    clientId={process.env.AUTH0_CLIENT_ID}
    redirectUri={`${window.location.origin}/account`}
  >
    {element}
  </Auth0Provider>
);
