import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    clearOpenCards, hideOpenCards,
    setEndGame,
    setStart,
    shuffleCards
} from "../../../store/action/game";
import { addAchievements } from "../../../store/action/achivements";

const useGame = () => {
    const dispatch = useDispatch();
    const { start, cards, openCards, totalCount, totalClick, timer } = useTypedSelector(({game}) => game)

    useEffect((): () => void => {
        dispatch(shuffleCards())

        return () => {
            return dispatch(setEndGame())
        }
    }, [])

    useEffect(() => {
        if (totalCount !== 0 && totalCount === cards.length / 2) {
            dispatch(setStart(false))
        }
    }, [cards, totalCount, timer])

    useEffect(() => {
        if (openCards.length === 2) {
            const result = openCards[0].id === openCards[1].id

            if (result) {
                setTimeout(() => {
                    dispatch(hideOpenCards([...cards], openCards[0].id))
                }, 1000)
            } else {
                setTimeout(() => {
                    dispatch(clearOpenCards())
                }, 1000)
            }
        }
    }, [openCards])

    const handleRehreshGame = () => {
        dispatch(setEndGame())
        return dispatch(shuffleCards())
    }

    return {
        start,
        cards,
        timer,
        totalCount,
        totalClick,
        handleRehreshGame
    }
}

export default useGame;
