import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import {combineReducers} from 'redux-immutable'
import TodoReducer from '../reducer/index'


const store = createStore(TodoReducer,
       compose(
           applyMiddleware(thunk),
           window.devToolsExtension ? window.devToolsExtension() : f => f
       )
    )

export default store