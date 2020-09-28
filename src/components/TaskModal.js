import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/taskActions';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core';

class TaskModal extends Component{
    state = {
        modal: false,
        content: ''
    }

    toggle = ()=>{
        this.setState({
            modal: !this.state.modal
        });
    }
    
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const newTask = {  
            content: this.state.content
        }

        this.props.addTask(newTask);
        //Close modal
        this.toggle();
    }
    render(){ 
        return(
            <div>
                <Button 
                color="secondary"
                onClick={this.toggle}
                >Add Item</Button>
                 <Modal
                    open={this.state.modal}
                    onClose={this.toggle}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div style={{position: 'absolute',
                                minWidth: '400px',
                                backgroundColor: 'white',
                                top: "100px",
                                left:"470px"
                                }}
                    >
                        <h2 id="simple-modal-title">Add to TodoTask</h2>
                        <p id="simple-modal-description">
                        <form  onSubmit={this.onSubmit}>
                            <TextField id="task" name="content" placeholder="Add a task..." onChange={this.onChange}/>
                            <Button type="submit">Add</Button>
                        </form>
                        </p>
                    </div>
                </Modal>
            </div>
        );
    };
}

const mapStateToProps = (state)=>({
    task: state.task
});

export default connect(mapStateToProps,{addTask})(TaskModal);

