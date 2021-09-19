import styled, { keyframes } from "styled-components";

const view = keyframes`
    from {
       transform: translateY(90vh);
    } to {
        transform: translateY(0vh);
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InfoBlock = styled.div`
    width: 30rem;
    padding: 2rem;
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(0vh);
    animation: ${view} 2s;
    
    p {
      font-family: Roboto, sans-serif;
	  font-weight: 500;
	  line-height: 1.2rem;
	  font-size: 1em;
	  color: #fff;
	  text-align: center;
    }
    
    h1 {
      color: #fff;
    }
`;

export const ButtonBlock = styled.div`
    margin-top: 1rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
