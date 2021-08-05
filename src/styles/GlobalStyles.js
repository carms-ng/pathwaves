import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    --black: #333333;
    --white: #fff;
    --lightgrey: #C2C3C0;
    --lightgray: var(--lightgrey);
    --blue: #C1D3EC;
    --lightblue: #E0E9F5;
    --xlightblue: #E0E9F5;
    --maxWidth: 1024px;
    --maxWidthText: 784px;
    --br: 16px;
    --linearGradient: linear-gradient(217deg, var(--blue), rgba(255,0,0,0) 70.71%),
                      linear-gradient(127deg, var(--lightblue), rgba(0,255,0,0) 70.71%),
                      linear-gradient(336deg, var(--xlightblue), rgba(0,0,255,0) 70.71%);
  }
    /* --bs: 0 12px 24px 0 rgba(0,0,0,0.09); */
    box-sizing: border-box;
    font-size: 18px;
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
    font-size: 1rem;
    color: var(--black);
  }
  h1, h2, h3, h4, h5, h6, pre {
    font-family: 'ApfelGrotezk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.15;
  }
  p {
    line-height: 1.6;
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
    font-size: 2.25rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  p, small {
    font-size: 1rem;
    white-space: pre-wrap;
    max-width: var(---maxWidthText);
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
  @media (min-width: 640px) {
    html {
      font-size: 16px;
    }
    h2 {
      font-size: 2.5rem;
    }
    p {
      line-height: 2;
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1024px) {
    html {
      font-size: 18px;
    }
  }
`

export default GlobalStyles
