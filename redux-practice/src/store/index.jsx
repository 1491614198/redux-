import {createStore,applyMiddleware,compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import TodoReducer from '../reducer/index'
import browserHistory from 'react-router'

const middleware = routerMiddleware(browserHistory)
const store = createStore(TodoReducer,
       compose(
           applyMiddleware(thunk,middleware),
           window.devToolsExtension ? window.devToolsExtension() : f => f
       )
    )

export default store