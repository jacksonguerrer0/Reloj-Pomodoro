import types from "./types/types";

// constantes
const intialState = {
    time: 1500,
    breakLengthTime: 300,
    session: 1500,
}


// reducer
const pomodoroReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.time:
            return {
                ...state, 
                time: action.payload,
                session: action.payload 
            }
        case types.break:
            return {
                ...state,
                breakLengthTime: action.payload 
            }
        case types.timeLength: 
            return {
                ...state,
                time: action.payload
            }
        case types.reset:
            return state
        default:
            return state;
    }
}
export default pomodoroReducer



// actions
export const reset = () => ({
    type: types.reset,
})


export const timeSession = (time) => ({
    type: types.time,
    payload: time
})

export const timeBreakLength = (timeBreak) => ({
    type: types.break,
    payload: timeBreak
})

export const timeLengthOne = (timeLength) => ({
    type: types.timeLength,
    payload: timeLength
})