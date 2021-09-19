import styled, { css } from "styled-components";
import starwars from '../../assets/starwars.webp'

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
    transition: 1s ease-in-out;
`;

export const Wrapper = styled.div<{hide: boolean}>`
    width: 8rem;
    height: 12rem;
    position: relative;
    border-radius: 10px;
    transform-style: preserve-3d;
    cursor: pointer;
    visibility: ${({hide}) => hide ? 'visible': 'hidden'};
`;

export const FrontFace = styled.div<{flipped: boolean}>`
    ${CardSide};
    background-image: url(${starwars});
    
     ${({ flipped }: any) => flipped && css`
        transform: perspective(12rem) rotateY(180deg);
    `}
`;

export const BackFace = styled.div<{flipped: boolean, img: string}>`
    ${CardSide};
    background-image: ${({ img }: any) => `url(${img})`};
    transform: perspective(12rem) rotateY(180deg);
    
    ${({ flipped }: any) => flipped && css`
        transform: perspective(12rem) rotateY(360deg);
    `}
`;
