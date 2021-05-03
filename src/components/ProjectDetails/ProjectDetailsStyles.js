import styled from "styled-components"
import { motion } from "framer-motion"

export const ProjectDetails = styled(motion.div)`
    padding: 24px 20px;
    height: 2000px;

    @media(min-width: 900px) {
        /* margin-top: 64px; */
        padding: 32px 40px;
    }

    p {
        margin: 0 0 20px;
        font-size: 24px;
        font-weight: 300;
    }

    h2 {
        margin-bottom: 24px;
        font-size: 36px;
        font-weight: 300;
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
            margin: 0 0 12px;
            font-size: 20px;
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