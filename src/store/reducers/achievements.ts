import { AchievementsState, AchievementAction, AchievementsActionEnum } from "../types/achievements";

const initialState: AchievementsState = {
    data: []
}

const achievements = (state = initialState, action: AchievementAction) => {
    switch (action.type) {
        case AchievementsActionEnum.ADD_ACHIEVEMENTS:
            return {
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}

export default achievements;
