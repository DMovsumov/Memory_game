import React, { FC } from 'react';
import { Wrapper } from "./styled.index";

interface Props {
    children: unknown
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default MainLayout;
