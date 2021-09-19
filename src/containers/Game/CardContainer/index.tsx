import React, { FC, memo } from 'react';
import Card from "../../../components/Card";
import {CardType} from "../../../store/types/game";
import useCardContainer from "./hooks/useCardContainer";

interface Props {
    card: CardType
}

const CardContainer: FC<Props> = ({ card }) => {
    const { handleClickCard, flipped } = useCardContainer(card.id)

    return <Card {...card} onClick={() => handleClickCard(card)} flipped={flipped}/>
};

export default memo(CardContainer);
