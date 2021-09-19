import styled from "styled-components";
import background from '../../assets/background.webp'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
`;
