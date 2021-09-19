import {useHistory} from 'react-router-dom';

const useHome = () => {
    const router = useHistory();

    const handlePushRouter = (location: string) => {
        return router.push(location)
    }

    return {
        handlePushRouter
    }
}

export default useHome;
