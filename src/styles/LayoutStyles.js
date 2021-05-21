import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const ContentColumn = styled(motion.div)`
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

const noise = keyframes`
    0%{transform:translate3d(0,9rem,0)};
    20%{transform:translate3d(-8rem,2rem,0)};
    40%{transform:translate3d(-2rem,7rem,0)};
    60%{transform:translate3d(2rem,6rem,0)};
    80%{transform:translate3d(-9rem,1rem,0)};
    to{transform:translate3d(-7rem,0,0)}};
`;

export const FourOhFour = styled.section`
    padding: 40px;

    h2 {
        margin-bottom: 24px;
        font-size: 24px;
        font-weight: 300;
    }

    a {
        display: inline-block;
        padding-bottom: 2px;
        border-bottom: 1px solid #000;
        font-size: 20px;
        font-weight: 300;
    }
`;

export const GifWrap = styled.div`
    margin: 24px 0;
    max-width: 1000px;
`;