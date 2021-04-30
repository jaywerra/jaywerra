import { createGlobalStyle } from "styled-components"

const Typography = createGlobalStyle`

    html, body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
               Roboto, Oxygen-Sans, Ubuntu, Cantarell,
               "Helvetica Neue", sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default Typography;