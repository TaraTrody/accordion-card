import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 400;
    local(");
    src: url("/kumbh-sans-v6-latin-regular.woff2") format('woff2'),
        url("/kumbh-sans-v6-latin-regular.woff") format('woff'), 
  }

  @font-face {
    font-family: 'Kumbh Sans';
    font-style: normal;
    font-weight: 700  ;
    src: url("/kumbh-sans-v6-latin-700.woff2") format('woff2'),
        url("/kumbh-sans-v6-latin-700.woff") format('woff'),
  }

  *, 
  *:before, 
  *:after {
      box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
  }

  body {
      font-family: "Kumbh Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
`;

export default GlobalStyles;
