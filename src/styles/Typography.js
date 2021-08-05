import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'ApfelGrotezk';
    src: url('../assets/fonts/ApfelGrotezk/ApfelGrotezk-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ApfelGrotezk';
    src: url('../assets/fonts/ApfelGrotezk/ApfelGrotezk-Fett.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url('../assets/fonts/Nunito/Nunito-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url('../assets/fonts/Nunito/Nunito-Light.ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url('../assets/fonts/Nunito/Nunito-SemiBold.ttf');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url('../assets/fonts/Nunito/Nunito-ExtraBold.ttf');
    font-weight: 800;
    font-style: normal;
  }
`

export default Typography
