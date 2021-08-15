import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CardConfig, ContentIButton } from '../container/app-pomodoro-styled/AppPomodoroStyled'
import {  timeSession } from '../redux/pomodoroDucks';

const SessionLenth = () => {
    const {time} = useSelector(state => state.pomodoro)

    const [sessionLength, setSessionLength] = useState(time);
    const dispatch = useDispatch()

    const decrementSessionLengthByMinute = () => {
        const newSessionLenght = sessionLength - 60;
        if(newSessionLenght < 0 ){
        setSessionLength(0)
        }else{
            setSessionLength(newSessionLenght)
            dispatch(timeSession(newSessionLenght))
        }
    }
    const incrementSessionLengthByMinute = () => {
        const newSessionLenght = sessionLength + 60;
        setSessionLength(newSessionLenght)
        dispatch(timeSession(newSessionLenght))

    } 
    const sessionLengthMinutes = moment.duration(sessionLength, 'S').minutes()

    useEffect(() => {
        setSessionLength(time)
    }, [time])
    
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
