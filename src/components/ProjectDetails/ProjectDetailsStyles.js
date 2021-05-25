import styled from "styled-components"

export const ProjectDetails = styled.div`
    padding: 24px 20px;

    @media(min-width: 900px) {
        padding: 32px 40px;
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

    .project__image {
        padding: 32px 0;
        @media(min-width: 900px) {
            padding: 72px 0 0;
        }
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

export const ProjectNavigation = styled.div`
    padding: 20px 0;
    border-top: 2px solid #000;
    text-align: center;

    @media(min-width: 900px) {
        padding: 32px 20px;
        text-align: left;
    }

    a {
        font-size: 26px;
        font-weight: 300;
    }
`;