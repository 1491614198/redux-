import React,{Component} from 'react'


class Task extends Component{
    constructor(props){
        super(props)
        // this.change=this.change.bind(this)

        // this.change = (e) =>{
        //     e.preventDefault()
        //         const b = e.target.value.trim();
        //         if(!!b){
        //             const {onSave} =this.props
        //             onSave(b)
        //         }
        // }
    }
    change(e){
        e.preventDefault()
        const b = e.target.value.trim();
        if(!!b){
            const {onSave,id} =this.props
            onSave(id,b)
        }
    }
    handleSubmit(){
        const c = this.refs.top.value
        if(!!c.trim()){
            const{onAdd} = this.props
            onAdd(c)
        }
    }
    render(){
        const {name,value} =this.props;
        return(
            <div>
                <input type="text" placeholder="你的我的" onChange={::this.change}/>
                {/*<input type="text" placeholder="你的我的" onChange={this.change.bind(this)}/>*/}
                {/*<input type="text" placeholder="你的我的" onChange={(e)=>{this.change(e)}}/>*/}
                {/*／／this的6种语法*/}
                {name}

                <form onSubmit={::this.handleSubmit}>
                    <input type="text" ref="top" defaultValue={value}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

Task.propTypes={
    onSave:React.PropTypes.func.isRequired
}

export default Task


