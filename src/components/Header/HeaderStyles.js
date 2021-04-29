import styled from "styled-components"

export const HeaderElm = styled.header`
    display: flex;  
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    @media(min-width: 1200px) {
        padding: 20px 50px;
    }

    button {
        height: 40px;
        width: 40px;
        background: none;
        border: none;
        cursor: pointer;
    }
`;