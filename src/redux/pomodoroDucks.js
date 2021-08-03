import types from "./types/types";

// constantes





// reducer
const pomodoroReducer = (state = {}, action) => {
    switch (action.type) {
        case types.reset:
            return {}
    
        default:
            return state;
    }
}
export default pomodoroReducer



// actions
export const reset = () => ({
    type: types.reset,
})