import React, {FC, memo, useEffect, useState} from 'react';
import { Wrapper, FrontFace, BackFace } from "./styled.index";

const Card: FC = () => {
    const [flipped, setFlipped] = useState<boolean>(false);

    useEffect(() => {
        if (flipped) {
            setTimeout(() => {
                setFlipped(false)
            }, 5000)
        }
    }, [flipped])

    return (
        <>
            <Wrapper>
                {/*@ts-ignore*/}
                <FrontFace onClick={() => setFlipped(true)} flipped={flipped}/>
                {/*@ts-ignore*/}
                <BackFace flipped={flipped}/>
            </Wrapper>
        </>
    );
};

export default memo(Card);
