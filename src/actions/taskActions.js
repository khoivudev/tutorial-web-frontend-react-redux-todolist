import axios from 'axios';
import {GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING} from './types';

export const getTasks =() =>dispatch =>{
    dispatch(setTasksLoading);
    axios
        .get('/api/todotask')
        .then(res => 
            dispatch({
                type: GET_TASKS,
                payload: res.data
            })
        )
}

export const addTask = task => dispatch =>{
    dispatch(setTasksLoading);
    axios
        .post('/api/todotask',task)
        .then(res => 
            dispatch({
                type: ADD_TASK,
                payload: res.data
            })
        )
}

export const deleteTask = id => dispatch =>{
    axios
    .delete(`/api/todotask/${id}`).then(res => 
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    )
}


export const setTasksLoading = ()=>{
    return {
        type: TASKS_LOADING
    }
}

