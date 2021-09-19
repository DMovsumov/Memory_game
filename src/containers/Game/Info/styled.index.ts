import styled from "styled-components";
import {ReactComponent as Saber} from '../../../assets/saber.svg'

export const WrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: #fefefe;
    opacity: 0.8;
    margin-bottom: 0.5rem;
`;

export const CountBlock = styled.div`
    margin-left: 1.5rem;
    width: 500px;
    display: flex;
    align-items: center;
    color: red;
    font-style: italic;
`;

export const LightSaber = styled(Saber)`
    width: 2.5rem;
    height: 2.5rem;
`;
