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

export const ResumeHeader = styled.div`
    padding: 40px 40px 0;

    h2 {
        font-size: 36px;
        font-weight: 300;
    }

    p {
        max-width: 800px;
        padding-left: 20px;
        font-size: 20px;
        line-height: 1.618;
    }
`;

export const ResumeBody = styled.div`

`;

export const ResumeRow = styled.div`
    margin: 0 40px 20px;
    max-width: 900px;
    padding: 20px 0 20px 20px;
    border-bottom: 1px solid #ddd;
    
    h3 {
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: 500;
    }

    h4 {
        margin-bottom: 24px;
        font-size: 18px;
        font-weight: 400;
    }

    p {
        margin: 0 0 20px;
        max-width: 900px;
        font-size: 18px;
        line-height: 1.618;
    }

    a {
        border-bottom: 2px solid #001AAF;
    }
`;

export const ResumeRowHeader = styled.h2`
    margin: 32px 0 16px;
    padding: 0 40px;
    font-size: 30px;
    font-weight: 300;
`;