import styled from "styled-components";

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const ContentColumn = styled.div`
    position: absolute;
    right: 0;
    width: 100%;

    @media(min-width: 900px) {
        width: 70%;
    }

    @media(min-width: 1200px) {
        width: 80%;
    }  
`;