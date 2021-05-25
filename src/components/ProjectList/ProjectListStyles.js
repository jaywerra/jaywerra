import styled from "styled-components"
import { Link } from "gatsby"
export const ProjectListView = styled.div`

`;

export const ProjectListViewToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 20px;
    border-bottom-style: solid;
    border-bottom-width: 3px;

    @media(min-width: 900px) {
        padding: 24px 40px;
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
        font-weight: 400;
    }
`;

export const Projects = styled.div`

`;

export const ProjectItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 20px;
    cursor: pointer;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    transition: background linear 0.3s;

    @media(min-width: 900px) {
        padding: 32px 40px;
    }

    @media(hover: hover) and (pointer: fine) {
        &:hover {
            background: #f2f2f2;
        }
    }
`;

export const ProjectTitle = styled.h2`
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 1px;

    @media(min-width: 900px) {
        font-size: 28px;
    }
`;

export const ProjectWhere = styled.p`
    margin: 8px 0;
    font-size: 14px;

    @media(min-width: 900px) {
        font-size: 16px;
    }
`;

export const ProjectYear = styled.p`
    margin: 0;
    font-size: 14px;

    @media(min-width: 900px) {
        font-size: 16px;
    }
`;

export const ProjectDesc = styled.div`

`;

export const ProjectArrow = styled.div`
    font-size: 30px;
    font-weight: 300;
`;
