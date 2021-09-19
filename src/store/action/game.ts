import {CardType, GameAction, GameActionsEnum} from "../types/game";
import {AppDispatch} from "../index";
import cards from "../../variables/cards";

export const setStart = (isStart: boolean): GameAction => ({
    type: GameActionsEnum.SET_START,
    payload: isStart
})

export const setEndGame = (): GameAction => ({
    type: GameActionsEnum.END_GAME,
})

export const setTimer = (timer: string): GameAction => ({
    type: GameActionsEnum.SET_TIMER,
    payload: timer
})

export const shuffleCards = () => (dispatch: AppDispatch) => {
    const items = JSON.parse(JSON.stringify([...cards, ...cards]))
    items.sort(() => Math.random() - 0.5);

    dispatch({
        type: GameActionsEnum.SHUFFLE_CARDS,
        payload: items
    })
}

export const addOpenCards = (card: CardType): GameAction => ({
    type: GameActionsEnum.ADD_OPEN_CARDS,
    payload: card
})

export const clearOpenCards = (): GameAction => ({
    type: GameActionsEnum.CLEAR_OPEN_CARDS,
})

export const incTime = (): GameAction => ({
    type: GameActionsEnum.INC_TIME
})

export const hideOpenCards = (cards: Array<CardType>, id: number) => (dispatch: AppDispatch) => {
    cards.forEach((card: CardType) => {
        if (card.id === id) {
            card.show = false
        }

        return card
    })

    dispatch({
        type: GameActionsEnum.HIDE_OPEN_CARDS,
        payload: cards
    })
}
