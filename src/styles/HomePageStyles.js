import styled from 'styled-components';

const HomeHeroStyles = styled.section`
  position: relative;
  height: 100vh;
  margin-bottom: 5vh;

  .background {
    z-index: 0;
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }

  .hero-wrapper {
    position: relative;
    z-index: 1;
    max-width: 1440px;
    margin: 0 auto;
    padding: var(--padMd);
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    gap: 15vh;

    > * {
      width: 460px;
      max-width: 70vw;
      margin: 0;
    }
    > div {
      display: grid;
      grid-auto-flow: row;
      justify-self: end;
    }
    p {
      text-align: center;
      justify-self: end;
      font-size: 1.7rem;
    }
    .hero-buttons {
      margin: 1rem 0;
      display: grid;
      gap: 1rem;
      width: 100%;
    }
  }

  @media (min-width: 640px) {
    .background {
      top: 50%;
    }
    .hero-wrapper > div {
      width: 460px;
      justify-self: end;
    }
    p {
      font-size: 2rem;
    }
    .hero-buttons {
      grid-auto-flow: column;
      justify-items: center;
      > .btn {
        width: 100%;
        max-width: 375px;
      }
    }
  }

  @media (min-width: 1024px) {
    .background {
      top: 55%;
    }
    .hero-wrapper {
      gap: 0;
      h1 {
        align-self: end;
      }
      > div {
        width: 580px;
      }
      p {
        font-size: 2.2rem;
      }
    }
  }
`;

const NewsletterFormStyles = styled.form`
  padding: var(--padSm);
  padding-bottom: 0;
  max-width: var(--maxWidth);
  margin: 0 auto;
  text-align: center;

  p {
    max-width: var(--maxWidthMd);
  }
  > * {
    margin-bottom: 5rem;
  }

  div:nth-child(3) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 0.5rem;

    input {
      padding: 1.2rem;
      border: 1px solid var(--lightgrey);
      border-radius: var(--br);
      font-family: 'ApfelGrotezk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    button {
      border: 2px solid var(--black);
      border-radius: var(--br);
      background: var(--black);
      color: var(--white);
      padding: 0.5rem;
      transition: var(--trans);
      &:hover {
        color: var(--black);
        background: var(--offWhite);
      }
    }
  }
  @media (min-width: 640px) {
    padding: var(--padLg);
    padding-bottom: 0;
    div:nth-child(3) {
      grid-template-columns: 1fr 1fr;
      gap: 5rem;

      button {
        grid-column: 1 / -1;
        justify-self: center;
        padding: 0.5rem 6rem;
      }
    }
  }
`;

export { HomeHeroStyles, NewsletterFormStyles };
