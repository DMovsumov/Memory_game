import React, { FC } from 'react';
import MainLayout from "../layouts/MainLayout";
import GameContainer from "../containers/Game";

const Game: FC = () => {
    return (
        <MainLayout>
            <GameContainer />
        </MainLayout>
    );
};

export default Game;
