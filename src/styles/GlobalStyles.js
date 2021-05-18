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

    .tl-edges {
        overflow-x: visible;
    }

    .toggleFill {
        fill: ${ props => props.theme.text };
    }

    .borderBottom,
    .borderTop {
        position: fixed;
        left: 0;
        height: 3px;
        width: 100%;
        background: #000;
        z-index: 2;
    }

    .borderTop {
        top: 0;
    }

    .borderBottom {
        bottom: 0;
    }

    .borderLeft,
    .borderRight {
        position: fixed;
        top: 0;
        height: 100%;
        width: 3px;
        background: #000;  
        z-index: 2;
    }

    .borderLeft {
        left: 0;
    }

    .borderRight {
        right: 0;
    }

    button {
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
        text-decoration: underline;
    }
`;

export default GlobalStyles;