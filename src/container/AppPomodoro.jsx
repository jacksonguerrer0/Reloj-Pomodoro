import React from 'react'
import BreakInterval from '../components/BreakInterval';
import SessionLenth from '../components/SessionLenth';
import { ContainerApp, ContainerConfig, ContentTime } from './app-pomodoro-styled/AppPomodoroStyled'


const AppPomodoro = () => {

 
    return(
        <ContainerApp>
            <ContentTime>
                <h1>{}:{}</h1>
                <p>Session</p>
                <i  className="fas fa-play"></i>
                <i className="fas fa-pause" ></i>
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