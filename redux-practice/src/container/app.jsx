import Task from '../component/Task'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {save,add} from '../action/index'
import Immutable from 'immutable'

const mapStateToProps = (state) => {
    return{
        Todos:state.get('Todos')
    }
}
class App extends Component{
    constructor(props){
        super(props)
        this.onSave=this.onSave.bind(this)
    }
    onSave(id,name){
        const {dispatch} =this.props
        dispatch(save(id,name))
    }
    onAdd(name){
        const {dispatch} = this.props
        dispatch(add(name))
    }
    render(){
        const {Todos} = this.props
        return(
            <div>
                {Todos.map((item) => {
                    return <Task key={item.get('id')} id={item.get('id')} name={item.get('name')} onSave={this.onSave} onAdd={::this.onAdd} value={item.get('name')}/>
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(App)
