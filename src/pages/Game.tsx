import React, { FC } from 'react';
import MainLayout from "../layouts/MainLayout";
import GameContainer from "../containers/Game";

const Game: FC = () => (
    <MainLayout>
        <GameContainer />
    </MainLayout>
);

export default Game;
