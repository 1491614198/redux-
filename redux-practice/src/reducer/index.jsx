import {save} from '../action/index'
import TASK_ADD from '../contents/index'
import {combineReducers} from 'redux-immutable'
import Immutable from 'immutable'
import {createReducer} from 'redux-create-reducer'


const list = Immutable.fromJS([
    {
        name:'heheh'
    }
])
const Todos = createReducer(list,{
    [TASK_ADD](state,action) {
        return state.set('name',action.name)
    }
})

const TodoReducer = combineReducers({
    Todos
})

export default TodoReducer