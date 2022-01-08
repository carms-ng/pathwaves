import styled from 'styled-components';

const SectionOneStyles = styled.section`
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

    h1, p {
      width: 460px;
      max-width: 70vw;
      margin: 0;
    }
    > div {
      display: grid;
      grid-auto-flow: row;
    }
    p {
      text-align: right;
      justify-self: end;
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
    .hero-buttons {
      justify-self: end;
      width: 460px;
      grid-template-columns: repeat(2, 1fr);
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
      p, > div {
        width: var(--maxWidthSm);
      }

    }
  }
`;

const SectionThreeStyles = styled.section`
  padding: var(--padSm);
  max-width: var(--maxWidth);
  margin: 0 auto;
  text-align: center;

  p {
    max-width: var(--maxWidthMd);
  }
  > * {
    margin-bottom: 5rem;
  }

  form {
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
    form {
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

export { SectionOneStyles, SectionThreeStyles };
