import styled from "styled-components"

export const HeaderElm = styled.header`
    height: 100%;

    @media(min-width: 900px) {
        position: fixed;
        left: 0;
        top: 0;
        width: 30%;
        border-right-style: solid;
        border-right-width: 2px;
    }

    @media(min-width: 1200px) {
        width: 20%;
    }

    button {
        height: 40px;
        width: 40px;
        cursor: pointer;
    }

    h1 {
        margin: 0 0 16px;
        font-size: 28px;
        font-weight: 300;
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
    border-bottom-width: 2px;
    border-bottom-style: solid;

    &.desktoponly {
        display: none;

        @media(min-width: 900px) {
            display: block;
        }
    }
`;

export const HeaderSectionTitle = styled.h2`
    margin-bottom: 20px;
    font-weight: 600;
`;

export const LinkList = styled.ul`
    display: flex;
    flex-wrap: wrap;

    @media(min-width: 900px) {
        display: block;
    }

    li {
        margin: 0 16px 24px 0;
        width: calc(25% - 16px);
        font-size: 16px;
        font-weight: 400;

        @media(max-width: 900px) {
            &:nth-last-child(-n+3) {
                margin-bottom: 4px;
            }
        }

        @media(min-width: 900px) {
            margin: 0 0 14px;
            width: auto;
        }

        a {
            text-decoration: underline;
        }

        img {
            height: 10px;
            margin-left: 6px;
            width: 16px;
        }
    }
`;

export const SpotifyPlayer = styled.div`
    line-height: 1.5;
`;

export const ThemeToggleButton = styled.button`
    position: absolute;
    top: 24px;
    right: 20px;
    z-index: 2;
`;