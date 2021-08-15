import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BreakInterval from '../components/BreakInterval';
import SessionLenth from '../components/SessionLenth';
import { timeBreakLength, timeLengthOne, timeSession } from '../redux/pomodoroDucks';
import { ContainerApp, ContainerConfig, ContentTime } from './app-pomodoro-styled/AppPomodoroStyled'

momentDurationFormatSetup(moment)

const AppPomodoro = () => {
    const [intervalId, setIntervalId] = useState(null)
    const [currentSessionType, setCurrentSessionType] = useState('Session')
    const [timeLeft, setTimeLeft] = useState()
    const {time} = useSelector(state => state.pomodoro)
    const audio = useRef(null)
    const dispatch = useDispatch()


    const {breakLengthTime} = useSelector(state => state.pomodoro)
    // console.log(time,breakLengthTime, timeLeft)
    
    const isStarted = intervalId !== null;

    const handlePlayTimeLeft = () => {
        if (isStarted) {
            clearInterval(intervalId);
            setIntervalId(null);
        }else{
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimelef =>{ 
                    const newTimeLeft = prevTimelef - 1;
                    console.log('timeleft',newTimeLeft)
                    console.log('prevTimeleft',prevTimelef)
                    
                    if (newTimeLeft >= 0) {
                        return newTimeLeft
                    }
                    audio.current.play();
                    if (currentSessionType === 'Break'){
                        setCurrentSessionType('Session')
                        setTimeLeft(time)
                    }  
                    if(currentSessionType === 'Session'){
                        setCurrentSessionType('Break')
                        setTimeLeft(breakLengthTime)
                    }
                })
            }, 10);
            setIntervalId(newIntervalId)
        }
    }

    const handleReset = () => {
        audio.current.load();
        clearInterval(intervalId)
        setIntervalId(null)
        setCurrentSessionType('Session')
        dispatch(timeSession(60 * 25))
        dispatch(timeBreakLength(60 * 5))
        setTimeLeft(60 * 25)
    }
    useEffect(() => {
        setTimeLeft(time)
    }, [time])

    const formatTimeLeft = moment.duration(timeLeft, 'S').format('mm:ss', {trim: false})
    return(
        <ContainerApp >
            <ContentTime>
                <h1>{formatTimeLeft}</h1>
                <p>{currentSessionType === 'Session' ? 'Session': 'Break'}</p>
                {
                    isStarted ?<i className="fas fa-pause" onClick={handlePlayTimeLeft} ></i>
                    : <i className="fas fa-play" onClick={handlePlayTimeLeft}></i>
                }
                <i className="fas fa-redo-alt" onClick={handleReset}></i>
            </ContentTime>
            <ContainerConfig>
                <BreakInterval />
                <SessionLenth />
            </ContainerConfig>
            <audio id='beep' ref={audio}>
                <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3"/>
            </audio>
            <a style={{color: 'cyan', margin: '100px'}} href="https://github.com/jacksonguerrer0">Jackson @jacksonguerrer0</a>
        </ContainerApp>
    )
}

export default AppPomodoro