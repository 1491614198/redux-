import React,{Component} from 'react'
import App from './container/app'
import TaskBody from './component/TaskBody'

const Routes =[{
    path:'/', component:TaskBody,
    childRoutes:[ {
        path:'TaskBody', component:TaskBody
    }]
},

]

export default Routes