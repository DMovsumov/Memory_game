import { ComponentType } from 'react'
import Home from "../pages/Home";
import Game from "../pages/Game";
import Achievements from "../pages/Achievements";

export interface Route {
    path: string;
    component: ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    HOME = '/',
    GAME = '/game',
    ACHIEVEMENTS = '/achievements',
}

export const routes: Array<Route> = [
    {path: RouteNames.HOME, exact: true, component: Home},
    {path: RouteNames.GAME, exact: true, component: Game},
    {path: RouteNames.ACHIEVEMENTS, exact: true, component: Achievements},
]
