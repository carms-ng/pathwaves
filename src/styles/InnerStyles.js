import styled from 'styled-components';

const AuthHeroStyles = styled.section`
  min-height: 100vh;
  display: grid;
  max-width: var(--maxWidthSm);
  padding: var(--padSm);
  padding-top: 8rem;
  margin: 0 auto;

  .wrapper-auth {
    display: grid;
    grid-template-rows: auto 1fr;
    padding: 2rem;
    background-color: var(--offWhite);
    background-image: radial-gradient(127.15% 127.15% at 50% 50%, rgba(245, 206, 122, 0.75) 0%, rgba(204, 162, 195, 0.5) 8.33%, rgba(193, 211, 236, 0.554434) 22.92%, rgba(193, 211, 236, 0.5) 33.27%, rgba(193, 211, 236, 0.480769) 51.18%);
    border-radius: var(--br);
    position: relative;

    > * {
      position: relative;
      z-index: 1;
    }

    &::after {
      z-index: 0;
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.6);
      border-radius: var(--br);
    }
  }

  @media(min-width: 1024px) {
    max-width: var(--maxWidthLg);
    padding: var(--padLg);

    .wrapper-auth {
      padding: 5rem;
    }
  }
`;

export default AuthHeroStyles;
