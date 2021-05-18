import styled from "styled-components"
import {motion} from "framer-motion"

export const ResumeView = styled(motion.div)`
    position: absolute;
    right: 0;
    padding-bottom: 32px;
    width: 100%;

    @media(min-width: 900px) {
        width: 70%;
    }

    @media(min-width: 1200px) {
        width: 80%;
    }
`;

export const ResumeBody = styled.div`
    padding: 0 20px;

    @media(min-width: 900px) {
        padding: 0 40px;
    }
`;

export const ResumeRow = styled.div`
    margin: 0 0 20px;
    max-width: 900px;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;

    &:last-child {
        border-bottom: none;
    }

    p {
        margin-top: 0;
    }
`;

export const ResumeRowHeader = styled.h2`
    margin: 32px 0 16px;
    font-size: 30px;
    font-weight: 300;
`;

export const Job = styled.div`
    margin-bottom: 48px;
`;

export const JobTitle = styled.h2`
    font-size: 18px;
    font-weight: 300;
`;

export const JobName = styled.a`
    display: inline-block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.031em;
`;

export const JobDescription = styled.div`
    margin-top: 16px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.618;

    ul {
        padding-left: 25px;
        list-style: disc;

        li {
            margin-bottom: 8px;
        }
    }
`;

export const School = styled.div`
    margin-bottom: 40px;
`;

export const SchoolName = styled.h3`
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.031em;
`;

export const SchoolProgram = styled.p`
    font-size: 18px;
    font-weight: 300;
`;

export const SkillsBlock = styled.ul`
    li {
        display: inline-block;
        margin: 8px 16px 8px 0;
        padding: 8px 12px;
        background: #ddd;
        border-radius: 6px;
        font-size: 14px;
        /* transition: ease-in-out 0.15s; */

        @media(min-width: 900px) {
            padding: 8px 16px;
            font-size: 16px;
        }

        &:hover {
            /* transform: scale(1.3); */
        }
    }
`;

export const SkillsTag = styled(motion.li)`

`;