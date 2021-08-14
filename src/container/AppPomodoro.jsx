import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BreakInterval from '../components/BreakInterval';
import SessionLenth from '../components/SessionLenth';
import { timeLengthOne } from '../redux/pomodoroDucks';
import { ContainerApp, ContainerConfig, ContentTime } from './app-pomodoro-styled/AppPomodoroStyled'

momentDurationFormatSetup(moment)

const AppPomodoro = () => {
    const [intervalId, setIntervalId] = useState(null)
    const [currentSessionType, setCurrentSessionType] = useState('Session')
    const [timeLeft, setTimeLeft] = useState()

    const dispatch = useDispatch()

    const {time} = useSelector(state => state.pomodoro)
    const {breakLength} = useSelector(state => state.pomodoro)
    const formatTimeLeft = moment.duration(timeLeft, 'S').format('mm:ss', {trim: false})
console.log()
    const IsStarted = intervalId !== null
    const handlePlayTimeLeft = ( ) => {
        if (IsStarted) {
            clearInterval(intervalId)
            setIntervalId(null)
        }else{
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimelef =>{ 
                    const newTimeLeft = prevTimelef - 1;
                    if (newTimeLeft >= 0) {
                        return prevTimelef - 1
                    }
                    if(currentSessionType === 'Session'){
                        setCurrentSessionType('Break')
                        setTimeLeft(breakLength)
                    }
                    else if (currentSessionType === 'Break'){
                        setCurrentSessionType('Session')
                        setTimeLeft(time)
                    }  
                })
            }, 1000);
            setIntervalId(newIntervalId)
        }
    }
    console.log(timeLeft)



    useEffect(() => {
        setTimeLeft(time)
    }, [time])
    return(
        <ContainerApp>
            <ContentTime>
                <h1>{formatTimeLeft}</h1>
                <p>Session</p>
                {
                    IsStarted ?<i className="fas fa-pause" onClick={handlePlayTimeLeft} ></i>
                    : <i className="fas fa-play" onClick={handlePlayTimeLeft}></i>
                }
                <i className="fas fa-redo-alt" ></i>
            </ContentTime>
            <ContainerConfig>
                <BreakInterval />
                <SessionLenth />
            </ContainerConfig>
            <a style={{color: 'cyan', margin: '100px'}} href="https://github.com/jacksonguerrer0">Jackson @jacksonguerrer0</a>
        </ContainerApp>
    )
}

export default AppPomodoro