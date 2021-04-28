import styled from "styled-components"
import { Link } from "gatsby"

export const FooterElm = styled.footer`
    display: none;
    
    @media(min-width: 1200px) {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 50px;
        width: 100%;
    }
`;

export const FooterIcon = styled(Link)`
    display: inline-block;
    width: 42px;
`;

export const WavyIcon = styled.div`
    margin-right: 16px;
    width: 50px;
    overflow: hidden;

    svg {
        width: 60px;
        overflow: hidden;
    }
`;

export const FooterSpotify = styled.div`
    display: flex;

    .iconwrap {
        /* position: relative;
        height: 50px;
        width: 50px; */
    }
`;