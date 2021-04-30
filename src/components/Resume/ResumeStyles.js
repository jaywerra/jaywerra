import styled from "styled-components"

export const ResumeView = styled.div`
    position: absolute;
    right: 0;
    width: 100%;
    height: 2000px;

    @media(min-width: 900px) {
        width: 70%;
    }

    @media(min-width: 1200px) {
        width: 80%;
    }
`;