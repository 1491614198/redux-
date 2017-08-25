import Task from '../component/Task'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {save} from '../action/index'
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
    onSave(name){
        const {dispatch} =this.props
        dispatch(save(name))
    }
    render(){
        const {Todos} = this.props
        return(
            <div>
                {Todos.map((item, key) => {
                    return <Task key={key} name={item.get('name')} onSave={this.onSave}/>
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(App)
