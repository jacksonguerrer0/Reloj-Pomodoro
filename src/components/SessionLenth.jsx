import moment from 'moment';
import React, { useState } from 'react'
import { CardConfig, ContentIButton } from '../container/app-pomodoro-styled/AppPomodoroStyled'

const SessionLenth = () => {
    const [sessionLength, setSessionLength] = useState(60 * 25);

    const decrementSessionLengthByMinute = () => {
        const newSessionLenght = sessionLength - 60;
        newSessionLenght < 0 ? setSessionLength(0) : setSessionLength(newSessionLenght)
    }
    const incrementSessionLengthByMinute = () => {
        const newSessionLenght = sessionLength + 60;
        setSessionLength(newSessionLenght)
    } 
    const sessionLengthMinutes = moment.duration(sessionLength, 'S').minutes()

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
