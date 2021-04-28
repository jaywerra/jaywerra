import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderElm = styled.header`
    display: flex;  
    align-items: center;
    justify-content: flex-end;
    padding: 16px;

    @media(min-width: 1200px) {
        padding: 20px 50px;
    }
`;

export const HeaderLogo = styled(Link)`
    width: 30%;

    @media(min-width: 1200px) {
        width: auto;
    }

    img {
        display: block;
        @media(min-width: 1200px) {
            max-width: 140px;
        }
        /* max-width: 120px; */
    }
`