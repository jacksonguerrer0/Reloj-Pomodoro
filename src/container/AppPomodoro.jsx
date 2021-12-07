import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BreakInterval from '../components/BreakInterval';
import SessionLenth from '../components/SessionLenth';
import { timeBreakLength, timeSession } from '../redux/pomodoroDucks';
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
            let modo ='Session'
            const newIntervalId = setInterval(async () => {
                setTimeLeft(prevTimelef =>{ 
                    const newTimeLeft = prevTimelef - 1;
                    
                    if (newTimeLeft > 0) {
                        return newTimeLeft
                    }
                    audio.current.play();
                    if (modo === 'Break'){
                        modo ='Session'
                        setCurrentSessionType('Session')
                        return time
                    }  
                    if(modo === 'Session'){
                        modo='Break'
                        setCurrentSessionType('Break')
                        return breakLengthTime
                    }
                })
            }, 1000);
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
                    <i className={intervalId === null ? 'fas fa-play': 'fas fa-pause ' } onClick={handlePlayTimeLeft} />
                }
                <i className="fas fa-redo-alt" onClick={handleReset}></i>
            </ContentTime>
            <ContainerConfig>
                <BreakInterval intervalId={intervalId}/>
                <SessionLenth intervalId={intervalId}/>
            </ContainerConfig>
            <audio id='beep' ref={audio}>
                <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3"/>
            </audio>
            <a style={{color: 'cyan', display: 'block', textAlign: 'center'}} href="https://github.com/jacksonguerrer0">Jackson @jacksonguerrer0</a>
        </ContainerApp>
    )
}

export default AppPomodoro