import React, { FC } from 'react';
import { WrapperContainer } from './styled.index'
import Title from "../../../../components/Title";

const TimerContainer: FC = () => {
    return (
        <WrapperContainer>
            <Title level={3}>10:20</Title>
        </WrapperContainer>
    );
};

export default TimerContainer;
