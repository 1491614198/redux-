import {TASK_A,TASK_ADD} from '../contents/index'
// import TASK_A from '../contents/index'
export const save = (id,name) => ({
    id,
    name,
    type:TASK_ADD
})

export const add = name => ({
    name,
    type:TASK_A
})




