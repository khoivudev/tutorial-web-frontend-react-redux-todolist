import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from 'react-redux';
import {getTasks, deleteTask } from '../actions/taskActions';
import PropTypes from 'prop-types';

class TodoList extends Component{
    componentDidMount(){
        this.props.getTasks();
    }

    onDeteleClick = (id)=>{
        this.props.deleteTask(id);
    }

    render(){
        const {tasks} = this.props.task;
        return(
            <div className="todolist-container">
                    <List component="nav" aria-label="secondary mailbox folders" style={{minWidth: '400px', minHeight: '400px'}}>
                        {tasks.map(({_id, content}) =>(
                        <ListItem>
                            <Button
                            variant="contained" 
                            color="secondary"
                            onClick={this.onDeteleClick.bind(this, _id)}
                            >&times;</Button>
                            <ListItemText primary={content} />

                        </ListItem>
                        ))}
                    </List>
            </div>
        );
    }
}

TodoList.protoTypes = {
    getTasks: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
    task: state.task
});

export default connect(mapStateToProps,{ getTasks, deleteTask })(TodoList);
