import React, { FC } from 'react';
import { Wrapper } from "./styled.index";

interface Props {
    children: string;
    onClick: () => void;
    disabled?: boolean;
    animation?: boolean;
    leftAnimation?: boolean;
}

const Button: FC<Props> = ({ children, onClick, disabled, animation, leftAnimation }) => {
    return (
        <Wrapper onClick={onClick} disabled={disabled} animation={animation} left={leftAnimation}>
            {children}
        </Wrapper>
    );
};

export default Button;
