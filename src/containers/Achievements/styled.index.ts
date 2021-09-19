import styled from "styled-components";

export const WrapperContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    
    h1 {
      color: #000;
      font-size: 2rem;
    }
`;

export const Table = styled.div`
    width: 50vw;
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const InfoBlock = styled.div`
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2 {
      color: #fff;
    }
`;

export const GridData = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr;
    grid-template-rows: 30px;
    grid-gap: 5px;
    margin-bottom: 5px;
`;

export const ItemText = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border: 1px rgba(255, 255, 255, 0.7) solid;
`;
