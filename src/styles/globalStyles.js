import { createGlobalStyle } from "styled-components";
import KumbhBoldWoff from "public/fonts/kumbh-sans-v6-latin-700.woff";
import KumbhBoldWoff2 from "public/fonts/kumbh-sans-v6-latin-700.woff2";
import KumbhRegWoff from "public/fonts/kumbh-sans-v6-latin-regular.woff";
import KumbhRegWoff2 from "public/fonts/kumbh-sans-v6-latin-regular.woff2";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  src: url(${KumbhRegWoff2}) format('woff2'),
       url(${KumbhRegWoff}) format('woff'), 
}

@font-face {
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 700;
  src: url(${KumbhBoldWoff2}) format('woff2'),
       url(${KumbhBoldWoff}) format('woff'),
}

* {
  box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Kumbh Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
`;

export default GlobalStyles;
