import React, {FC, memo, useMemo} from 'react';
import {WrapperProgress, ProgressDone} from "./styled.index";

interface Props {
    time: number
}

const ProgressBar: FC<Props> = ({ time }) => {
    const width = useMemo(() => {
        return 100 / (5 / time)
    }, [time])

    return (
        <WrapperProgress>
            <ProgressDone width={width}/>
            <span>{time}</span>
        </WrapperProgress>
    );
};

export default memo(ProgressBar);
