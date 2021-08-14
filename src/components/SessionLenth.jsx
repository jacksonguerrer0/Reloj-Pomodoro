import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { CardConfig, ContentIButton } from '../container/app-pomodoro-styled/AppPomodoroStyled'
import { time } from '../redux/pomodoroDucks';

const SessionLenth = () => {
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const dispatch = useDispatch()

    const decrementSessionLengthByMinute = () => {
        const newSessionLenght = sessionLength - 60;
        newSessionLenght < 0 ? setSessionLength(0) : setSessionLength(newSessionLenght)
    }
    const incrementSessionLengthByMinute = () => {
        const newSessionLenght = sessionLength + 60;
        setSessionLength(newSessionLenght)
    } 
    const sessionLengthMinutes = moment.duration(sessionLength, 'S').minutes()

    useEffect(() => {
        dispatch(time(sessionLength))
    }, [dispatch, sessionLength])
    return (
    <CardConfig>
        <h3>Session Length</h3>
        <ContentIButton>
            <i className="fas fa-arrow-down" onClick={decrementSessionLengthByMinute}></i>
            <h3>{sessionLengthMinutes}</h3>
            <i className="fas fa-arrow-up" onClick={incrementSessionLengthByMinute}></i>
        </ContentIButton>
    </CardConfig>
    )
}

export default SessionLenth
