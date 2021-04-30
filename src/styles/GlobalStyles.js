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
        background: ${ props => props.theme.background };
        border: 1px solid #000;
        color: ${ props => props.theme.text };

        @media(min-width: 900px) {
            border: 2px solid #000;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        height: auto;
        width: 100%;
    }

    .toggleFill {
        fill: ${ props => props.theme.text };
    }

`;

export default GlobalStyles;