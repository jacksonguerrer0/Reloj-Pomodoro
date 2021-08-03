import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import pomodoroReducer from '../redux/pomodoroDucks';

const rootReducers = combineReducers({
    pomodoro: pomodoroReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducers,    
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store