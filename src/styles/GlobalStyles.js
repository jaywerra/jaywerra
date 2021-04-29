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
        color: ${ props => props.theme.text };
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