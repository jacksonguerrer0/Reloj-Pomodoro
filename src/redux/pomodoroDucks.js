import types from "./types/types";

// constantes
const intialState = {
    time: 1500,
    break: 300,
    session: 1500,
}


// reducer
const pomodoroReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.time:
            return state
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
