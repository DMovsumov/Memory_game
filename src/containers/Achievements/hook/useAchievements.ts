import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../../../routes";

const useAchievements = () => {
    const router = useHistory();
    const { data } = useTypedSelector(({ achievements }) => achievements)

    const handleGoGame = () => {
        return router.push(RouteNames.GAME)
    }

    return {
        data,
        handleGoGame
    }
}

export default useAchievements;
