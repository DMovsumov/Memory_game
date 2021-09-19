
export interface Achievement {
    time: string;
    count: number;
    clickCount: number;
}

export interface AchievementsState {
    data: Array<Achievement>
}

export enum AchievementsActionEnum {
    ADD_ACHIEVEMENTS = 'ADD_ACHIEVEMENTS'
}

interface AddAchievements {
    type: AchievementsActionEnum.ADD_ACHIEVEMENTS,
    payload: Achievement
}

export type AchievementAction = AddAchievements
