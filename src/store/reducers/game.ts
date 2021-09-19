import { GameAction, GameState, GameActionsEnum } from "../types/game";

const initialState: GameState = {
    start: true,
    cards: [],
    openCards: [],
    totalCount: 0,
    totalClick: 0,
    time: 5,
    timer: '00:00'
}

const game = (state = initialState, action: GameAction): GameState => {
    switch (action.type) {
        case GameActionsEnum.SET_START:
            return {
                ...state,
                start: action.payload
            }
        case GameActionsEnum.END_GAME:
            return {
                start: false,
                cards: [],
                openCards: [],
                totalCount: 0,
                totalClick: 0,
                time: 5,
                timer: '00:00'
            }
        case GameActionsEnum.SET_TIMER:
            return {
                ...state,
                timer: action.payload
            }
        case GameActionsEnum.SHUFFLE_CARDS:
            return {
                ...state,
                start: true,
                cards: action.payload
            }
        case GameActionsEnum.ADD_OPEN_CARDS:
            return {
                ...state,
                totalClick: state.totalClick + 1,
                openCards: [...state.openCards, action.payload]
            }
        case GameActionsEnum.CLEAR_OPEN_CARDS:
            return {
                ...state,
                openCards: [],
                time: 5
            }
        case GameActionsEnum.INC_TIME:
            return {
                ...state,
                time: state.time - 1
            }
        case GameActionsEnum.HIDE_OPEN_CARDS:
            return {
                ...state,
                cards: action.payload,
                totalCount: state.totalCount + 1,
                openCards: [],
                time: 5
            }
        default:
            return state
    }
}

export default game;
