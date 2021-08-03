import React from 'react'
import { CardConfig, ContainerApp, ContainerConfig, ContentIButton, ContentTime } from './app-pomodoro-styled/AppPomodoroStyled'


const AppPomodoro = () => {

    return(
        <ContainerApp>
            <ContentTime>
                <h1>Tiempoo</h1>
                <p>Session</p>
                <i className="fas fa-play"></i>
                <i className="fas fa-redo-alt"></i>
            </ContentTime>
            <ContainerConfig>
                <CardConfig>
                    <h3>Break Length</h3>
                    <ContentIButton>
                        <i className="fas fa-arrow-down"></i>
                        <h3>number</h3>
                        <i className="fas fa-arrow-up"></i>
                    </ContentIButton>
                </CardConfig>
                <CardConfig>
                    <h3>Session Length</h3>
                    <ContentIButton>
                        <i className="fas fa-arrow-down"></i>
                        <h3>number</h3>
                        <i className="fas fa-arrow-up"></i>
                    </ContentIButton>
                </CardConfig>
            </ContainerConfig>
            <a style={{color: 'cyan', margin: '100px'}} href="https://github.com/jacksonguerrer0">Jackson @jacksonguerrer0</a>
        </ContainerApp>
    )
}

export default AppPomodoro