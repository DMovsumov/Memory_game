import {AchievementAction, Achievement, AchievementsActionEnum} from "../types/achievements";

export const addAchievements = (achievement: Achievement): AchievementAction => ({
    type: AchievementsActionEnum.ADD_ACHIEVEMENTS,
    payload: achievement
})
