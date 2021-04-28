import { createGlobalStyle } from "styled-components"
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
    ${normalize}
    
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        height: auto;
        width: 100%;
    }

`;

export default GlobalStyles;