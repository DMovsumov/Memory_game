import styled from "styled-components";

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
    height: 15rem;
    padding: 2rem;
    border-radius: 50px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p {
      font-family: Roboto, sans-serif;
	  font-weight: 500;
	  line-height: 1.2rem;
	  font-size: 1em;
	  color: #5a5a5a;
    }
`;

export const ButtonBlock = styled.div`
    margin-top: 1rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
