import styled, { css } from "styled-components";
import shield from '../../assets/heroes/shield.webp'

const CardSide = css`
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: 2s ease-in-out;
`;

export const Wrapper = styled.div`
    width: 8rem;
    height: 12rem;
    position: relative;
    border-radius: 10px;
    transform-style: preserve-3d;
    cursor: pointer;
`;

export const FrontFace = styled.div`
    ${CardSide};
    background-image: url(${shield});
    
     ${({ flipped }: any) => flipped && css`
        transform: perspective(12rem) rotateY(180deg);
    `}
`;

export const BackFace = styled.div`
    ${CardSide};
    background-color: orange;
    transform: perspective(12rem) rotateY(180deg);
    
    ${({ flipped }: any) => flipped && css`
        transform: perspective(12rem) rotateY(360deg);
    `}
`;
