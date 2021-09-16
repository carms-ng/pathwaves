import { createGlobalStyle } from 'styled-components';
import ApfelGrotezkRegular from '../assets/fonts/ApfelGrotezk/ApfelGrotezk-Regular.woff2'
import ApfelGrotezkFett from '../assets/fonts/ApfelGrotezk/ApfelGrotezk-Fett.woff2'

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
`

export default Typography
