import styled from "styled-components"

// section styles
const LandingStyles = styled.div`
  section {
    padding: 20px;
    height: 100vh;
    text-align: center;
    > * {
      max-width: var(--maxWidth);
    }
    > p, h6 {
      max-width: var(--maxWidthText);
    }
    h6 {
      font-size: 1.25rem;
    }
    @media (min-width: 640px) {
      h6 {
        font-size: 1.5rem;
      }

    }
  }
`
const IntroStyles = styled.section`
  background: var(--linearGradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  > * {
    margin: 2vmin 0;
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
  /* .horizontal-scroll-wrapper {
    max-width: unset;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    > a {
      padding: 0 2rem;
    }
    @media (min-width: 1024px) {
      margin-top: 3rem;
      > a {
        padding: 0 3rem;
      }
    }
  } */
`
const SecondStyles = styled.section`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 40px;
`

const ThirdStyles = styled.section``
const ForthStyles = styled.section``
const FifthStyles = styled.section``
const SixthStyles = styled.section``

const AboutStyles = styled.section`
  padding-top: 4rem !important;
  height: unset !important;
  background: var(--linearGradient);
  display: grid;
  align-content: center;
  justify-items: center;
  grid-gap: 1rem;

  .cards-2b2 {
    padding: 2rem 0 4rem 0;
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
    p {
      padding: 12px 0;
    }
  }
  a {
    color: var(--darkblue);
  }
  @media (min-width: 1024px) {
    padding-top: 9rem !important;
    padding-bottom: 5rem !important;
    .cards-2b2 {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-auto-flow: column;
      grid-gap: 2rem;
    }
  }
`

// div styling
const HightlightedStyles = styled.div`
  code {
    background: ${(props) => props.colorHighlight ? props.colorHighlight : ""}
  }
`

export { LandingStyles, IntroStyles, SecondStyles, ThirdStyles, ForthStyles, FifthStyles, SixthStyles, AboutStyles, HightlightedStyles }
