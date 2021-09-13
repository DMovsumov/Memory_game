import React, { FC } from 'react';
import { Wrapper } from "./styled.index";

interface Props {
    children: string;
    onClick: () => void;
    disabled: boolean;
}

const Button: FC<Props> = ({ children, onClick, disabled }) => {
    return (
        <Wrapper onClick={onClick} disabled={disabled}>
            {children}
        </Wrapper>
    );
};

export default Button;
