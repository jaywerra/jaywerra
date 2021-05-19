import styled from "styled-components"

export const ProjectDetails = styled.div`
    padding: 24px 20px;
    background: red;

    @media(min-width: 900px) {
        padding: 32px 40px;
        background: orange;
    }

    p {
        margin: 0 0 20px;
        font-size: 24px;
        font-weight: 300;
    }

    h2 {
        margin-bottom: 16px;
        font-size: 30px;
        font-weight: 300;

        @media(min-width: 900px) {
            margin-bottom: 24px;
            font-size: 36px;
        }
    }

    h3 {
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    ul {
        margin-bottom: 24px;
        padding-left: 4px;
    }

    li {
        margin-bottom: 8px;
        font-weight: 300;
    }

    .intro {
        p {
            margin: 0 0 6px;
            font-size: 16px;
            line-height: 1.5;
            @media(min-width: 900px) {
                font-size: 20px;
            }
        }
    }

    .images {
        margin: 40px 0;
        &__cols {

            @media(min-width: 900px) {
                display: flex;
                justify-content: space-between;
            }
        }

        &__elm {
            @media(min-width: 900px) {
                margin-right: 24px;
                width: calc(50% - 24px);
            }
        }
    }

`;

export const ProjectCopy = styled.div`
    margin: 8px 0;
    
    @media(min-width: 900px) {
        margin: 0 0 24px;  
    }
`;

export const ImageContainer = styled.div`
    margin: 24px 0;
    max-width: 1400px;
`;