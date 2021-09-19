
export interface CardType {
    id: number;
    name: string;
    img: string;
    show: boolean;
}

export interface GameState {
    start: boolean;
    cards: Array<CardType>;
    openCards: Array<CardType>;
    totalCount: number;
    totalClick: number;
    time: number;
    timer: string;
}

export enum GameActionsEnum {
    SET_START = 'SET_START',
    SHUFFLE_CARDS = 'SHUFFLE_CARDS',
    ADD_OPEN_CARDS = 'ADD_OPEN_CARDS',
    CLEAR_OPEN_CARDS = 'CLEAR_OPEN_CARDS',
    HIDE_OPEN_CARDS = 'HIDE_OPEN_CARDS',
    SET_TIMER = 'SET_TIMER',
    INC_TIME = 'INC_TIME',
    END_GAME = 'END_GAME'
}

interface SetStart {
    type: GameActionsEnum.SET_START;
    payload: boolean;
}

interface ShuffleCards {
    type: GameActionsEnum.SHUFFLE_CARDS;
    payload: Array<CardType>;
}

interface AddOpenCards {
    type: GameActionsEnum.ADD_OPEN_CARDS;
    payload: CardType;
}

interface ClearOpenCards {
    type: GameActionsEnum.CLEAR_OPEN_CARDS;
}

interface HideOpenCards {
    type: GameActionsEnum.HIDE_OPEN_CARDS;
    payload: Array<CardType>;
}

interface IncTime {
    type: GameActionsEnum.INC_TIME;
}

interface EndGame {
    type: GameActionsEnum.END_GAME;
}

interface SetTimer {
    type: GameActionsEnum.SET_TIMER;
    payload: string
}

export type GameAction = SetStart | ShuffleCards | AddOpenCards | ClearOpenCards | HideOpenCards | IncTime | EndGame | SetTimer
