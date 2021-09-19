import React, { FC } from 'react';
import { WrapperContainer, CardList, BlockEnd } from "./styled.index";
import Info from "./Info";
import useGame from "./hooks/useGame";
import Button from "../../components/Button";
import CardContainer from "./CardContainer";
import { useHistory } from "react-router-dom";
import {RouteNames} from "../../routes";

const GameContainer: FC = () => {
    const router = useHistory()
    const { start, cards, totalCount, totalClick, timer, handleRehreshGame } = useGame();

    return (
        <WrapperContainer>
            <Info />
            <CardList>
                {cards.map((card, index) => <CardContainer key={card.img + index} card={card}/>)}
            </CardList>
            {!start && <BlockEnd>
                <span>Время: {timer}</span>
                <span>Найдено пар: {totalCount}</span>
                <span>Сделано ходов: {totalClick}</span>
                <Button onClick={handleRehreshGame} disabled={false}>
                    Начать заново
                </Button>
                <Button onClick={() => router.push(RouteNames.ACHIEVEMENTS)} disabled={false}>
                    Таблица результатов
                </Button>
            </BlockEnd>}
        </WrapperContainer>
    );
};

export default GameContainer;
