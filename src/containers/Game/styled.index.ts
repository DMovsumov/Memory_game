import styled, { keyframes } from "styled-components";

const view = keyframes`
    from {
      transform: translateY(100vh);
    } to {
      transform: translateY(0vh);
    }
`;

export const WrapperContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
`;

export const CardList = styled.div`
    width: 53rem;
    height: 37.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const BlockEnd = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(0vh);
    animation: ${view} 2s ease-in-out;
    
    span {
       font-size: 2rem;
       color: aliceblue;
    }
    
    button {
        margin-top: 1rem;
    }
`;
