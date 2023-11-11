import styled from "styled-components";

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
      max-width: unset;
    }
    .hero-buttons {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      > .btn {
        white-space: break-spaces;
      }
    }
  }

  @media (min-width: 640px) {
    .background {
      top: 50%;
    }
    .hero-wrapper {
      > div {
        width: 460px;
        justify-self: end;
      }
      p {
        font-size: 2rem;
      }
      .hero-buttons {
        justify-items: center;
        > .btn {
          width: 100%;
        }
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

const HomeContactUsStyles = styled.div`
  padding: var(--padSm);
  padding-bottom: 0;
  max-width: var(--maxWidth);
  margin: 0 auto;
  text-align: center;

  a {
    color: var(--black);
    text-decoration: underline;
  }
  p {
    max-width: var(--maxWidthMd);
  }
  > * {
    margin-bottom: 5rem;
  }

  @media (min-width: 640px) {
    padding: var(--padLg);
    padding-bottom: 0;
  }
`;

export { HomeHeroStyles, HomeContactUsStyles };
