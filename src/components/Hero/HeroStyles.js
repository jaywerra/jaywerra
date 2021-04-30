import styled from "styled-components"

export const HeroElm = styled.div`
    display: flex;
    align-items: center;
    height: 80vh;

`;

export const HeroCopy = styled.div`
    padding: 0 16px;

    @media(min-width: 1200px) {
        padding: 0 50px;
    }

    h1 {
        margin-bottom: 0;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.618;

        @media(min-width: 700px) {
            max-width: 90%;
            font-size: 36px;
        }

        @media(min-width: 1000px) {
            max-width: 80%;
            font-size: 40px;
        }

        @media(min-width: 1400px) {
            max-width: 70%;
            font-size: 48px;
        }
    }

    p {
        font-size: 16px;
        font-weight: 400;

        @media(min-width: 1200px) {
            font-size: 20px;
        }
    }
`;