import styled from "styled-components"
import { motion } from "framer-motion"

export const ProjectDetails = styled(motion.div)`
    padding: 24px 20px;
    height: 2000px;

    @media(min-width: 900px) {
        margin-top: 64px;
        padding: 64px 40px;
    }

    p {
        margin: 0 0 20px;
        font-size: 24px;
        font-weight: 300;
    }
`;

export const ProjectCopy = styled.div`
    margin: 8px 0;
    @media(min-width: 900px) {
        margin: 40px 0;  
    }
`;