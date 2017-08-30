import {save} from '../action/index'
import {TASK_ADD,TASK_A} from '../contents/index'
import {combineReducers} from 'redux-immutable'
import Immutable from 'immutable'
import {createReducer} from 'redux-create-reducer'
import _ from 'lodash'
import {routerReducer} from 'react-router-redux'

const list = Immutable.fromJS([
    {
        id:_.uniqueId(),
        name:'heheh'
    },
    {
        id:_.uniqueId(),
        name:'lalal'
    }
])
const Todos = createReducer(list,{
    [TASK_ADD](state,action) {
        const Index =state.findIndex((item)=>item.get('id')=== action.id)
        return state.setIn([Index,'name'],action.name)
    },
    [TASK_A](state,action) {
        const Index=state.size
        console.log('Index是'+Index)
        console.log(action.name)
        return state.mergeIn([Index],{
            id:_.uniqueId(),
            name:action.name
        })
    }
})

const TodoReducer = combineReducers({
    Todos,
    routing:routerReducer
})

export default TodoReducer