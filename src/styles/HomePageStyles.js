import styled from 'styled-components';

const SectionOneStyles = styled.section`
  position: relative;
  height: 100vh;
  display: grid;
  align-items: center;

  .hero-content {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr)) auto;
    gap: 5rem 0;

    > * {
      position: relative;
      z-index: 1;
      padding: 1rem;
    }
    .background {
      padding: 0;
      margin: 0;
      position: relative;
      z-index: 0;
      grid-column: 1 / -1;
      grid-row: 1 / 4;
    }
    h1 {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      text-align: left;
    }
    > p {
      grid-column: 3 / -1;
      grid-row: 2 / 3;
      text-align: right;
      align-self: flex-end;
    }
    .hero-buttons {
      grid-column: 1 / -1;
      grid-row: 3 / -1;
      display: grid;
      gap: 2rem;
      align-items: flex-start;
    }

  }
  @media (min-width: 640px) {
    .hero-content {
      .hero-buttons {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  @media (min-width: 768px) {
    .hero-content {
      .hero-buttons {
        grid-column: 3 / -1;
      }
    }
  }
  @media (min-width: 1024px) {
    .hero-content {
      h1 {
        align-self: center;
        padding-left: 5vmax;
        grid-column: 1 / 3;
      }
      p {
        align-self: center;
        text-align: center;
        padding-right: 5vmax;
      }
      .hero-buttons {
        grid-template-columns: 1fr 1fr;
        padding-right: 5vmax;
        grid-row: 2 / 3;
        align-self: flex-end;
        padding-right: 5vmax;
      }
    }
  }
  @media (min-width: 1280px) {
    .hero-content {
      h1 {
        padding-left: 10vmax;
      }
      p {
        padding-right: 10vmax;
        align-self: flex-start;
      }
      .hero-buttons {
        padding-right: 10vmax;
        align-self: center;

      }
    }
  }
`;

const SectionThreeStyles = styled.section`
  position: relative;
  text-align: center;
  padding: var(--padSm);
  .text__left {
    margin: 0 auto;
    position: relative;
    display: grid;
    gap: 5rem;
    max-width: calc(var(--maxWidth) / 5 * 3);
  }
  .btn {
    justify-self: center;
    padding: 0.5rem 6rem;
  }
  .bg-image__right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.1;
    opacity: 0.1;
  }

  @media (min-width: 640px) {
    padding: var(--padLg);
  }
  @media (min-width: 1024px) {
    text-align: left;
    .text__left {
      margin-left: calc((100vw - var(--maxWidth)) / 2);
    }
    .btn {
      justify-self: start;
    }
    .bg-image__right {
      opacity: 1;
    }
  }
`;

const SectionFourStyles = styled.section`
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

export {
  SectionOneStyles, SectionThreeStyles, SectionFourStyles,
};
