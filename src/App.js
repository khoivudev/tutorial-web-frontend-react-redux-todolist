import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {Provider} from 'react-redux';
import store from './store';
import { Container } from '@material-ui/core';
import TaskModal from './components/TaskModal';

class App extends Component{
  render(){   
    return (
      <Provider store={store}>
        <Container maxWidth="sm" className="App">
          <TaskModal />          
          <TodoList />
        </Container>
      </Provider>
      
    );
  }
}

export default App;
