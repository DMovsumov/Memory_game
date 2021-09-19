import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import {CardType} from "../../../../store/types/game";
import {addOpenCards, clearOpenCards, hideOpenCards} from "../../../../store/action/game";
import {useCallback, useEffect, useMemo, useState} from "react";

const useCardContainer = (id: number) => {
    const dispatch = useDispatch();
    const { cards, openCards, time } = useTypedSelector(({game}) => game)
    const [flipped, setFlipped] = useState<boolean>(false);

    const handleClickCard = useCallback((card: CardType) => {
        if (openCards.length === 2) {
            return undefined
        }

        setFlipped(true)
        dispatch(addOpenCards(card))
    }, [openCards])

    useEffect(() => {
        if (flipped && (time === 0)) {
            setFlipped(false)
        }

        if (time === 5 && openCards.length < 1) {
            setFlipped(false)
        }
    }, [flipped, openCards, time])

    // useEffect((): any => {
    //     if (openCards.length === 2) {
    //         const result = openCards[0].id === openCards[1].id && openCards[0].id === id
    //
    //         if (result) {
    //             setTimeout(() => {
    //                 dispatch(hideOpenCards([...cards], id))
    //             }, 1000)
    //         }
    //     }
    // }, [openCards])

    return {
        flipped,
        handleClickCard
    }
}

export default useCardContainer;
