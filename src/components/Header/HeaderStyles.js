import styled from "styled-components"

export const HeaderElm = styled.header`
    height: 100%;

    @media(min-width: 900px) {
        position: fixed;
        left: 0;
        top: 0;
        width: 30%;
        border-left: 2px solid #000;
        border-right: 2px solid #000;
    }

    @media(min-width: 1200px) {
        width: 20%;
    }

    button {
        height: 40px;
        width: 40px;
        background: none;
        border: none;
        cursor: pointer;
    }

    h1 {
        margin: 0 0 16px;
        font-size: 24px;
        font-weight: 300;
        text-transform: uppercase;
    }
`;

export const HeaderIntro = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;

    a {
        text-decoration: underline;
    }
`;

export const HeaderSection = styled.div`
    padding: 24px 20px;
    border-bottom: 2px solid #000;
`;

export const HeaderSectionTitle = styled.h2`
    margin-bottom: 20px;
    font-weight: 600;
`;

export const LinkList = styled.ul`

    li {
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 400;

        a {
            text-decoration: underline;
        }
    }
`;

export const SpotifyPlayer = styled.div`
    line-height: 1.5;
`;