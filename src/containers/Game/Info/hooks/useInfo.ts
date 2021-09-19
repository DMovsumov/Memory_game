import {useEffect, useMemo, useRef, useState} from "react";
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {clearOpenCards, incTime, setTimer} from "../../../../store/action/game";
import {addAchievements} from "../../../../store/action/achivements";

const useInfo = () => {
    const dispatch = useDispatch();
    const { start, totalCount, totalClick, openCards, time } = useTypedSelector(({game}) => game)
    const interval = useRef<any>(null);
    const incTimer = useRef<any>(null);
    const [timer, setTimers]= useState<{min: number, sec: number}>({
        min: 0,
        sec: 0
    })

    const runningTime = () => {
        setTimers((prevState): {min: number, sec: number} => {
            const newState = {...prevState}
            if (newState.sec === 59) {
                newState.min++
                newState.sec = 0
            }
            newState.sec++
            return newState
        })
    }

    useEffect((): any => {
        if (start) {
            setTimers({
                min: 0,
                sec: 0
            })
            const intervalId = setInterval(runningTime, 1000)

            interval.current = intervalId
        } else {
            const times = `${timer.min >= 10 ? timer.min : '0' + timer.min}:${timer.sec >= 10 ? timer.sec : '0' + timer.sec}`
            dispatch(setTimer(times))
            dispatch(addAchievements({time: times, count: totalCount, clickCount: totalClick}))

            return clearInterval(interval.current)
        }
    }, [start])

    useEffect(() => {
        if (openCards.length === 1) {
            const interval = setInterval(() => {
                dispatch(incTime())
            }, 1000)

            incTimer.current = interval
        }
    }, [openCards])

    useEffect(() => {
        if (time === 0 || openCards.length === 0) {
            if (incTimer.current) {
                clearInterval(incTimer.current)
                dispatch(clearOpenCards())
            }
        }
    }, [time])

    const count = useMemo(() => {
        const arr = []
        for(let i = 0; i < totalCount; i++) {
            arr.push(i)
        }
        return arr
    }, [totalCount])

    return {
        timer,
        count,
        time
    }
}

export default useInfo;
