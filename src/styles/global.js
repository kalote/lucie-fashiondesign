import { injectGlobal } from 'styled-components'
import HPImage from '../images/homepage.jpg'
import AvenirFont from '../font/Avenir.woff'
import BaskerFont from '../font/LibreBaskerville-Regular.otf'

injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    height: 100%;
  }

  .sidebar {
    float: left;
    width: 250px;
    padding-top: 38px;
    @media only screen and (max-width: 980px) {
      width: auto;
      padding-top: 0px;
    }
  }

  .siteContent {
    margin-left: 300px;

    @media only screen and (max-width: 980px) {
      margin-left: 0;
      margin-top: 55px;
    }
  }

  .siteRoot {
    padding-left: 38px;
    @media only screen and (max-width: 980px) {
      padding: 10px;
    }
  }

  .siteRoot:after {
    content: "";
    display: table;
    clear: both;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: normal;
    src: url('${AvenirFont}') format('woff');
  }

  @font-face {
    font-family: 'Baskerville';
    font-style: normal;
    font-weight: normal;
    src: url('${BaskerFont}') format('otf');
  }

  body {
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: normal;
    font-family: "Avenir";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  .siteRoot:after {
    content : "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: url(${HPImage}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100%;
    transition: opacity 1s;
    z-index: -1;

    @media only screen and (max-width: 980px) {
      background: url(${HPImage}) no-repeat right center; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  }

  .siteRoot.noFilter:after {
    opacity: 1;
  }

  .siteRoot.filter:after {
    opacity: 0.6;
  }
`
