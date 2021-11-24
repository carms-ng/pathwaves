import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --black: #333333;
    --offWhite: rgba(255, 255, 255, 0.5);
    --white: #fff;
    --lightgrey: #EBEBEB;
    --lightgray: var(--lightgrey);
    --grey: #666666;
    --gray: var(--grey);
    --darkblue: #325F9A;
    --blue: #C1D3EC;
    --lightblue: #E0E9F5;
    --xlightblue: #EFF4FA;
    --maxWidth: 1024px;
    --maxWidthText: 980px;
    --maxWidthSm: 600px;
    --maxWidthMd: 768px;
    --maxWidthLg: 1280px;
    --br: 16px;
    --linearGradient: linear-gradient(127deg, var(--blue), rgb(224, 233, 245, 0) 50%),
                      linear-gradient(336deg, rgb(239, 244, 250, 0), var(--xlightblue) 50%),
                      linear-gradient(217deg, rgb(161, 189, 226, 0), var(--lightblue) 50%);
    box-sizing: border-box;
    font-size: 62.5%;
    --padSm: 5rem 1rem;
    --padMd: 8rem 3rem;
    --padLg: 12rem 3rem;
    --trans: all 0.7s ease;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body, button {
    font-family: 'ApfelGrotezk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    color: var(--black);
    background: var(--lightblue);
  }
  h1, h2, h3, h4, h5, h6, pre {
    line-height: 1.2;
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
  *:focus {
      outline: none;
  }
  .btn {
    display: block;
    text-align: center;
    border-radius: 16px;
    background: var(--offWhite);
    color: var(--black);
    padding: 0.5rem 2rem;
    border: 2px solid var(--black);
    text-transform: uppercase;
    font-weight: bold;
    white-space: nowrap;
    transition: var(--trans);
    cursor: pointer;
    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
  .link {
    color: var(--black);
    border: 0;
    background: transparent;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      color: var(--black);
      opacity: 1;
    }
  }
  h1, h2 {
    font-size: 2.6rem;
  }
  .btn {
    font-size: 1.6rem;
  }
  .font-lg {
    font-size: 1.7rem;
  }
  .btns-group {
    display: grid;
    grid-gap: 1rem;
  }
  .btn-blur {
    border: none;
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
    margin: 1rem;
    display: grid;
    place-content: center;
    text-transform: uppercase;
    color: var(--black);
    border-radius: var(--br);
    background: transparent;
    transition: var(--trans);
    backdrop-filter: blur(2em);


    &:hover {
      background: var(--black);
      color: var(--white);
      cursor: pointer;
    }
  }

  @media (min-width: 640px) {
    body {
      font-size: 1.7rem;
    }
    h1, h2, .h2 {
      font-size: 4rem;
    }
    .font-lg {
      font-size: 2rem;
    }
    .btns-group {
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }
  @media (min-width: 1024px) {
    body, button {
      font-size: 1.8rem;
      line-height: 1.6;
    }
    h1 {
      font-size: 5rem;
    }
    .font-lg {
      font-size: 2.4rem;
    }
  }
`;

export default GlobalStyles;
