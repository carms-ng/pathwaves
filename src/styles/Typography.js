import { createGlobalStyle } from 'styled-components';
import ApfelGrotezkRegular from '../assets/fonts/ApfelGrotezk/ApfelGrotezk-Regular.woff2'
import ApfelGrotezkFett from '../assets/fonts/ApfelGrotezk/ApfelGrotezk-Fett.woff2'
import NunitoRegular from '../assets/fonts/Nunito/Nunito-Regular.ttf'
import NunitoLight from '../assets/fonts/Nunito/Nunito-Light.ttf'
import NunitoSemiBold from '../assets/fonts/Nunito/Nunito-SemiBold.ttf'
import NunitoExtraBold from '../assets/fonts/Nunito/Nunito-ExtraBold.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'ApfelGrotezk';
    src: url(${ApfelGrotezkRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ApfelGrotezk';
    src: url(${ApfelGrotezkFett}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoRegular});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoLight});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoSemiBold});
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoExtraBold});
    font-weight: 800;
    font-style: normal;
  }
`

export default Typography
