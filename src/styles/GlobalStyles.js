import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    --black: #333333;
    --offWhite: rgba(255, 255, 255, 0.5);
    --white: #fff;
    --lightgrey: #C2C3C0;
    --lightgray: var(--lightgrey);
    --darkblue: #325F9A;
    --blue: #C1D3EC;
    --lightblue: #E0E9F5;
    --xlightblue: #EFF4FA;
    --maxWidth: 1280px;
    --maxWidthText: 980px;
    --br: 16px;
    --linearGradient: linear-gradient(127deg, var(--blue), rgb(224, 233, 245, 0) 50%),
                      linear-gradient(336deg, rgb(239, 244, 250, 0), var(--xlightblue) 50%),
                      linear-gradient(217deg, rgb(161, 189, 226, 0), var(--lightblue) 50%);
    box-sizing: border-box;
    font-size: 62.5%;
    --padSm: 20px;
    --padMd: 8rem 20px;
    --padLg: 16rem 40px;
    --trans: all 0.7s ease;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Nunito', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    color: var(--black);
  }
  h1, h2, h3, h4, h5, h6, pre {
    font-family: 'ApfelGrotezk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  h2, h3, h4, h5, h6 {
    max-width: var(--maxWidthText);
  }
  p {
    max-width: var(--maxWidthText);
    margin: 0 auto;
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
  }
  button {
    font-family: 'Nunito', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *:focus {
      outline: none;
  }
  .btn {
    display: block;
    text-align: center;
    border-radius: 16px;
    background: var(--offWhite);
    color: var(--black);
    padding: 0.5rem 6rem;
    border: 2px solid var(--black);
    text-transform: uppercase;
    font-weight: bold;
    white-space: nowrap;
    transition: var(--trans);
    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }

  h1, h2 {
    font-size: 3rem;
  }
  .font-lg {
    font-size: 20px;
  }

  @media (min-width: 640px) {
    body {
      font-size: 2rem;
      line-height: 1.8;
    }
    h1, h2 {
      font-size: 4rem;
    }
    .font-lg {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 1024px) {
    body {
      font-size: 2.4rem;
      line-height: 2;
    }
    h1, h2 {
      font-size: 5rem;
    }
    .font-lg {
      font-size: 3rem;
    }
  }
`;

export default GlobalStyles
