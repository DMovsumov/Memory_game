import styled, { css, keyframes } from "styled-components";

const view = (left: boolean) => keyframes`
    from {
        transform: translateX(${left ? '-90vw' : '90vw'});
    }
    
    to {
        transform: translateX(0vw);
    }
`;

interface ButtonProps {
  animation?: boolean,
  left?: boolean
}

export const Wrapper = styled.button<ButtonProps>`
  outline: none;
  border: none;
  background-color: orange;
  padding: 0.625rem 1rem;
  border-radius: 0.625rem;
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
  
  ${({ animation }) => animation && css`
    transform: translateX(0vw);
    animation: ${({left}: any) => view(left)} 3s ease;
  `}
`;
