import React, { FC } from 'react';
import Card from "../../components/Card";
import { WrapperContainer, BlockInfo, CardList } from "./styled.index";
import TimerContainer from "./components/Timer";

const GameContainer: FC = () => {
    return (
        <WrapperContainer>
            <BlockInfo>
                <TimerContainer />
            </BlockInfo>
            <CardList>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardList>
        </WrapperContainer>
    );
};

export default GameContainer;
