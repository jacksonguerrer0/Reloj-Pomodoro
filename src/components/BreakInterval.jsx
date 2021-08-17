import React, { useEffect, useState } from 'react'
import { CardConfig, ContentIButton } from '../container/app-pomodoro-styled/AppPomodoroStyled'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { timeBreakLength } from '../redux/pomodoroDucks';

const BreakInterval = ({intervalId}) => {

    const [breakLength, setBreakLength] = useState();
    const dispatch = useDispatch()

    const {breakLengthTime} = useSelector(state => state.pomodoro)

    const decrementBreakLengthByMinute = () => {
        const newBreakLenght = breakLength - 60;
        if(intervalId === null){
            if(newBreakLenght < 0){
                setBreakLength(0) 
            }else{ 
                setBreakLength(newBreakLenght)
                dispatch(timeBreakLength(newBreakLenght) )
            }
        }else{
            alert('Resetea el reloj para poder cambiar la longitud')
        }
    }
    const incrementBreakLengthByMinute = () => {
        const newBreakLenght = breakLength + 60;
        if(intervalId === null){
            setBreakLength(newBreakLenght)
            dispatch(timeBreakLength(newBreakLenght) )
        }else{
            alert('Resetea el reloj para poder cambiar la longitud')
        }
    } 

    const breakLengthMinutes = moment.duration(breakLength, 'S').minutes()

    useEffect(() => {
        setBreakLength(breakLengthTime)
    }, [breakLengthTime])
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
