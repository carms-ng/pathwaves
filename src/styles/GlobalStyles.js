import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    --black: #333333;
    --white: #fff;
    --lightgrey: #C2C3C0;
    --lightgray: var(--lightgrey);
    --darkblue: #325F9A;
    --blue: #C1D3EC;
    --lightblue: #E0E9F5;
    --xlightblue: #EFF4FA;
    --maxWidth: 1024px;
    --maxWidthText: 784px;
    --br: 16px;
    --linearGradient: linear-gradient(127deg, var(--blue), rgb(224, 233, 245, 0) 50%),
                      linear-gradient(336deg, rgb(239, 244, 250, 0), var(--xlightblue) 50%),
                      linear-gradient(217deg, rgb(161, 189, 226, 0), var(--lightblue) 50%);
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Nunito', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    color: var(--black);
  }
  h1, h2, h3, h4, h5, h6, pre {
    font-family: 'ApfelGrotezk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.15;
    max-width: var(--maxWidthText);
  }
  p, small, ul {
    line-height: 1.5;
    max-width: var(--maxWidthText);
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'Nunito', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *:focus {
      outline: none;
  }

  // font sizes
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h6 {
    font-size: 1.2rem;
    line-height: 1.6;
    font-weight: 400;
  }
  p, small {
    font-size: 1rem;
    white-space: pre-wrap;
  }
  small {
    font-weight: 500;
  }
  .btn {
    display: block;
    text-align: center;
    border-radius: 16px;
    width: 100%;
    background: var(--black);
    color: var(--white);
    padding: 12px 0;
    width: 100%;
  }
  .btns-group {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: var(--maxWidthText);
    .btn {
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 640px) {
    html {
      font-size: 16px;
    }
    h1, h2 {
      font-size: 2.5rem;
    }
    pre, p {
      font-size: 1.2rem;
      line-height: 1.6;
    }

    .btn, button, input {
      font-size: 1.1rem;
      padding: 12px 0;
    }
    .btns-group {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 1rem;
    }
  }
`;

export default GlobalStyles
