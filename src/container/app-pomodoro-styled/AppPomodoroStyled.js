import styled from 'styled-components'

export const ContainerApp = styled.div`
    padding: 2rem;
    width: 400px;
    margin: 100px auto;
    div{
        text-align: center;
        padding: 0.3rem 0 1rem 0;
    }
    h1{
        margin: 20px 0;
        color: cyan;
    }
    p{
        border-bottom: 2px solid cyan;
    }
    i{
        font-size: 30px;
        margin: 10px 5px;
        text-align: center;
        cursor: pointer;
        :hover{
            color: cyan;
        }
    }
` 
export const ContentTime = styled.div`
    border: 5px solid cyan;
    width: 70%;
    height: 150px;
    margin: auto;
    border-radius: 20px;
    padding: 2rem 0;
`

export const ContainerConfig = styled.div`
    display: flex;
    margin-top: 1.5rem;
`
export const CardConfig = styled.div`
    width: 50%;
    padding-top: 0;
`

export const ContentIButton = styled.div`
    display: flex;
    justify-content: center;
    h3{
        color: cyan;
    }
`