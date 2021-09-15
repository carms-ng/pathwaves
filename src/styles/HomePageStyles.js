import styled from "styled-components"

// section styles
const LandingStyles = styled.div``
const IntroStyles = styled.section`
  padding: var(--padSm);
  background: radial-gradient(94.49% 94.49% at 50% 50%, #C1D3EC 26.31%, rgba(237, 197, 221, 0.8) 52.6%, #FBD77E 96.35%, rgba(193, 211, 236, 0.5) 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  > * {
    margin: 2vmin 0;
    text-align: center;
  }
  /* Logo Garden */
  #logo-garden {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
  }
  @media (min-width: 640px) {
    justify-content: center;
  }
  @media (min-width: 1024px) {
    #logo-garden {
      margin-top: 4rem;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2rem;
    }
  }
`
const SecondStyles = styled.section`
  position: relative;
  display: grid;
  align-items: center;

  .bg-image__left {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    opacity: 0.2;
    z-index: 1;
    max-height: 100vh;
  }
  .text__right {
    padding: var(--padMd);
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index: 2;

    > * {
      padding: 1.5rem 0;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 3fr;
    .bg-image__left {
      grid-column: auto;
      opacity: 1;
      max-height: 120vh;
    }
    .text__right {
      padding: var(--padLg);
      grid-column: auto;
      max-width: calc(var(--maxWidth) / 5 * 3 );
    }

  }

`

const ThirdStyles = styled.section`
  background: linear-gradient(259.1deg, #C1D3EC 20.87%, rgba(237, 197, 221, 0.7) 60.06%, rgba(193, 211, 236, 0.5) 87.45%);
  padding: var(--padMd);
  > * {
    max-width: var(--maxWidthText);
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    padding: var(--padLg);
    font-size: var(--fontLg);
  }
`
const ForthStyles = styled.section`
  position: relative;

  .bg-image__bl, .bg-image__tr {
    position: absolute;
    opacity: 0.2;
    max-height: 100vh;
  }
  .bg-image__bl {
    bottom: 0;
    left: 0;
  }
  .bg-image__tr {
    top: 0;
    right: 0;
  }

  .grid-wrapper {
    position: relative;
    padding: var(--padMd);
    max-width: var(--maxWidth);
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    place-items: flex-start;
    .btn {
      margin-bottom: 2rem;
      width: 100%;
    }
    @media (min-width: 640px) {
      .btn {
        width: fit-content;
        margin: 0 auto;
      }
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem 0;

      .btn {
        margin-bottom: unset;
        width: unset;
        margin: unset;
      }
      > *:first-child {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      > *:nth-child(2) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      > *:nth-child(3) {
        grid-column: 2 / -1;
        grid-row: 2 / 3
      }
      > *:nth-child(4) {
        grid-column: 2 / -1;
        grid-row: 3 / 4;
      }
    }
    @media (min-width: 1024px) {
      padding: var(--padLg);
    }
  }
`
const FifthStyles = styled.section`
  background: radial-gradient(108.19% 108.19% at 50% 50%, rgba(251, 215, 126, 0.7) 0%, rgba(220, 213, 185, 0.5) 18.23%, rgba(193, 211, 236, 0.8) 33.85%, #EDC5DD 59.38%, #C1D3EC 96.35%);
  display: grid;
  justify-items: flex-end;
  align-items: center;

  .text__left {
    padding: var(--padMd);
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    justify-self: center;
    align-self: center;

    display: grid;
    grid-gap: 5rem;
  }
  .bg-image__right {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    opacity: 0.2;
    max-height: 100vh;
  }

  #phases {
    display: grid;
    grid-gap: 5rem;
    margin-left: 1rem;
    padding-left: 3rem;
    border-left: 2px solid var(--black);

    > * {
      display: grid;
      grid-gap: 1rem;
    }
    small {
      text-transform: uppercase;
    }
  }


  @media (min-width: 1024px) {
    grid-template-columns: 3fr 2fr;
    .text__left {
      padding: var(--padLg);
      grid-column: unset;
      margin-left: calc((100vw - var(--maxWidth)) / 2);
    }
    .bg-image__right {
      grid-column: unset;
      opacity: 1;
      max-height: 120vh;
    }
    #phases {
      margin-left: 5rem;
      padding-left: 5rem;
    }
  }
`
const SixthStyles = styled.section`
  padding: var(--padMd);

  .btn {
    margin-top: 2rem;
  }
  > * {
    max-width: var(--maxWidthText);
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    .btn {
      width: fit-content;
    }
  }
  @media (min-width: 1024px) {
    padding: var(--padLg);
    p {
      font-size: var(--fontLg);
    }
  }
`

const AboutStyles = styled.section`
  background: linear-gradient(226.88deg, #FBD77E -10.43%, #C1D3EC 58.4%, rgba(13, 203, 148, 0.5) 107.78%, rgba(13, 203, 148, 0) 108.91%);
  padding: var(--padMd);
  height: unset !important;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 1rem;

  .cards-2b2 {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem 0 8rem 0;
    display: grid;
    grid-gap: 1rem;
    text-align: left;
    > div {
      display: grid;
      grid-template-rows: 120px 1fr;
      > a {
        align-self: center;
      }
    }
  }
  a {
    color: var(--darkblue);
  }
  @media (min-width: 1024px) {
    > p {
      font-size: var(--fontLg);
      text-align: center;
    }
    padding: var(--padLg);

    .cards-2b2 {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      grid-gap: 5rem;
    }
  }
`


export { LandingStyles, IntroStyles, SecondStyles, ThirdStyles, ForthStyles, FifthStyles, SixthStyles, AboutStyles }
