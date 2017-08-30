import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './container/app'

import {Router,browserHistory} from 'react-router'
import Route from '../src/route'
import syncHistoryWithStore from 'react-router-redux'
import store from './store/index'


const history =syncHistoryWithStore(browserHistory,store)
ReactDOM.render(
    <Provider store={store}>
        <Router routes={Route} history={history}/>
    </Provider>,
    document.getElementById('app')
)