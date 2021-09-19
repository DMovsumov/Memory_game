import styled from "styled-components";

export const WrapperProgress = styled.div`
    width: 100%;
    height: 20px;
    background-color: #d8d8d8;
    border-radius: 20px;
    position: relative;
    
    span {
      position: absolute;
      top: 0;
      left: 50%;
      color: #fefefe;
    }
`;

export const ProgressDone = styled.div<{width: number}>`
    background: linear-gradient(to left, #F2709C, #FF9472);
    box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: ${({ width }) => `${width}%`};
    opacity: 1;
    transition: 1s ease 0.3s;
`;
