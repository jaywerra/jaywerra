import styled from "styled-components"

export const PageNavElm = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 20px;
    border-bottom: 2px solid #000;

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
        font-weight: 300;
    }
`;