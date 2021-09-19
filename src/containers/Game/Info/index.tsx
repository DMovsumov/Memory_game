import React, { FC } from 'react';
import { WrapperContainer, Wrapper, CountBlock, LightSaber } from './styled.index'
import Title from "../../../components/Title";
import useInfo from "./hooks/useInfo";
import ProgressBar from "../../../components/ProgressBar";

const Info: FC = () => {
    const { timer, count, time } = useInfo()

    return (
        <WrapperContainer>
            <Wrapper>
                <Title level={3}>
                    {`${timer.min >= 10 ? timer.min : '0' + timer.min}` +
                        ':' +
                    `${timer.sec >= 10 ? timer.sec : '0' + timer.sec}`}
                </Title>
                <CountBlock>
                    <Title level={3}>Пар найдено:</Title>
                    {count.map((item: number, index: number) => <LightSaber key={item * index + ''} />)}
                </CountBlock>
            </Wrapper>
            <ProgressBar time={time}/>
        </WrapperContainer>
    );
};

export default Info;
