import React, { FC, memo, useEffect, useState } from 'react';
import { CardType } from "../../store/types/game";
import { Wrapper, FrontFace, BackFace } from "./styled.index";

interface Props extends CardType {
    onClick: () => void;
    flipped: boolean;
}

const Card: FC<Props> = ({ id, name, img, show, onClick, flipped }) => {
    return (
        <Wrapper hide={show}>
            <FrontFace onClick={!flipped ? onClick : undefined} flipped={flipped}/>
            <BackFace flipped={flipped} img={img}/>
        </Wrapper>
    );
};

export default memo(Card);
