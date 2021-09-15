import React, {FC, memo, useState} from 'react';
import { Wrapper, FrontFace, BackFace } from "./styled.index";

const Card: FC = () => {
    const [flipped, setFlipped] = useState<boolean>(false);

    return (
        <>
            <Wrapper>
                {/*@ts-ignore*/}
                <FrontFace onClick={() => setFlipped(true)} flipped={flipped}/>
                {/*@ts-ignore*/}
                <BackFace onClick={() => setFlipped(false)} flipped={flipped}/>
            </Wrapper>
        </>
    );
};

export default memo(Card);
