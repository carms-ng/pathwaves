import styled from "styled-components"

const IntroStyles = styled.section`
  padding: var(--padSm);
  background: radial-gradient(127.15% 127.15% at 50% 50%, rgba(245, 206, 122, 0.75) 0%, rgba(204, 162, 195, 0.5) 8.33%, rgba(193, 211, 236, 0.554434) 22.92%, rgba(193, 211, 236, 0.5) 33.27%, rgba(193, 211, 236, 0.480769) 51.18%);  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  > * {
    margin: 2vmin 0;
    text-align: center;
  }
  h1 {
    font-weight: 400;
  }
  .btn {
    margin: 4vmin 0;
  }
  /* Logo Garden */
  #logo-garden {
    max-width: var(--maxWidth);
    max-height: 16vh;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 1rem 2rem;
    > a {
      max-height: 8vh;
      width: fit-content;
    }
  }
  @media (min-width: 640px) {
    justify-content: center;
    #logo-garden {
      max-height: unset;
      > a {
        max-height: unset;
      }
    }
  }
  @media (min-width: 768px) {
    #logo-garden {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 6rem;
    }
  }
`
const SecondStyles = styled.section`
  position: relative;
  padding: var(--padMd);

  .bg-image__left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0.1;

  }
  .text__right {
    position: relative;
    margin-left: auto;
    max-width: calc(var(--maxWidth) / 2);
    > * {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1024px) {
    padding: var(--padLg);
    .bg-image__left {
      opacity: 1;
    }
    .text__right {
      margin-left: 45vw;
    }
  }
`

const ThirdStyles = styled.section`
  background: linear-gradient(259.1deg, #C1D3EC 20.87%, rgba(237, 197, 221, 0.7) 60.06%, rgba(193, 211, 236, 0.5) 87.45%);  padding: var(--padMd);
  > * {
    max-width: var(--maxWidthText);
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    padding: var(--padLg);
    text-align: center;
  }
`
const ForthStyles = styled.section`
  position: relative;
  padding: var(--padMd);

  .bg-image__bl, .bg-image__tr {
    position: absolute;
    opacity: 0.1;
    z-index: -1;
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
    max-width: var(--maxWidth);
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    place-items: flex-start;
    .btn {
      margin-bottom: 5rem;
      width: 100%;
    }
  }
  @media (min-width: 640px) {
    padding: var(--padLg);
    .btn {
      width: fit-content;
      margin: 0 auto;
    }
  }
  @media (min-width: 768px) {
    .grid-wrapper {
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem 0;

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
      .btn {
        margin-bottom: unset;
        width: unset;
        margin: unset;
      }
    }
  }
  @media (min-width: 1024px) {
    .bg-image__bl, .bg-image__tr {
      opacity: 1;
    }
  }
`
const FifthStyles = styled.section`
  background: radial-gradient(108.19% 108.19% at 50% 50%, rgba(251, 215, 126, 0.7) 0%, rgba(220, 213, 185, 0.5) 18.23%, rgba(193, 211, 236, 0.8) 33.85%, #EDC5DD 59.38%, #C1D3EC 96.35%);  display: grid;
  position: relative;
  padding: var(--padMd);
  .text__left {
    position: relative;
    display: grid;
    grid-gap: 5rem;
    max-width: calc(var(--maxWidth) / 5 * 3);
  }
  .bg-image__right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.1;
    opacity: 0.1;
  }

  #phases {
    display: grid;
    grid-gap: 5rem;
    margin-left: 1rem;
    padding-left: 3rem;
    border-left: 2px solid var(--black);
    position: relative;
    > * {
      display: grid;
      grid-gap: 1rem;
    }
    small {
      text-transform: uppercase;
    }
  }

  @media (min-width: 1024px) {
    padding: var(--padLg);
    .text__left {
    }
    .bg-image__right {
      opacity: 1;
    }
  }
  @media (min-width: 1024px) {
    .text__left {
      margin-left: calc((100vw - var(--maxWidth)) / 2);
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
    text-align: center;
  }
`

const AboutStyles = styled.section`
  background: linear-gradient(226.88deg, #FBD77E -10.43%, #C1D3EC 33.64%, #C1D3EC 63.46%, rgba(237, 197, 221, 0.5) 107.78%);  padding: var(--padMd);
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
      text-align: center;
    }
    padding: var(--padLg);
    padding-bottom: 4rem;

    .cards-2b2 {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      grid-gap: 5rem;
    }
  }
`


export { IntroStyles, SecondStyles, ThirdStyles, ForthStyles, FifthStyles, SixthStyles, AboutStyles }
