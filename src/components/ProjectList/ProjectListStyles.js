import styled from "styled-components"
import { Link } from "gatsby"

export const ProjectListView = styled.div`
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

export const ProjectListViewToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 20px;
    border-bottom: 2px solid #000;

    @media(min-width: 900px) {
        padding: 32px 40px;
        width: calc(70% - 3px);

        // refactor with gsap or framer
        position: fixed;
        top: 3px;
        width: 100%;
        background: #FFF;
    }

    @media(min-width: 1200px) {
        width: calc(80% - 3px);
    }

    h2 {
        font-size: 32px;
        font-weight: 300;
    }
`;

export const Projects = styled.div`
    @media(min-width: 900px) {
        padding-top: 102px;
    }
`;

export const ProjectItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 20px;
    cursor: pointer;
    border-bottom: 2px solid #000;
    transition: linear 0.35s;

    @media(min-width: 900px) {
        padding: 32px 40px;
    }
`;

export const ProjectTitle = styled.h2`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 1px;
`;

export const ProjectWhere = styled.p`
    margin: 8px 0;
    font-size: 16px;
`;

export const ProjectYear = styled.p`
    margin: 0;
    font-size: 16px;
`;

export const ProjectDesc = styled.div`

`;

export const ProjectArrow = styled.div`
    width: 30px;
`;