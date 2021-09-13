import { ComponentType } from 'react'
import Home from "../pages/Home";
import Game from "../pages/Game";

export interface Route {
    path: string;
    component: ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
    GAME = '/game',
}

export const routes: Array<Route> = [
    {path: RouteNames.HOME, exact: true, component: Home},
    {path: RouteNames.GAME, exact: true, component: Game},
]
