import React, { useState } from 'react'
import { CardConfig, ContentIButton } from '../container/app-pomodoro-styled/AppPomodoroStyled'
import moment from 'moment';
const BreakInterval = () => {
    const [breakLength, setBreakLength] = useState(300);

    const decrementBreakLengthByMinute = () => {
        const newBreakLenght = breakLength - 60;
        newBreakLenght < 0 ? setBreakLength(0) : setBreakLength(newBreakLenght)
    }
    const incrementBreakLengthByMinute = () => {
        const newBreakLenght = breakLength + 60;
        setBreakLength(newBreakLenght)
    } 
    const breakLengthMinutes = moment.duration(breakLength, 'S').minutes()

    return (
    <CardConfig>
        <h3>Break Length</h3>
        <ContentIButton>
            <i className="fas fa-arrow-down" onClick={decrementBreakLengthByMinute}></i>
            <h3>{breakLengthMinutes}</h3>
            <i className="fas fa-arrow-up" onClick={incrementBreakLengthByMinute}></i>
        </ContentIButton>
    </CardConfig>
    )
}

export default BreakInterval
