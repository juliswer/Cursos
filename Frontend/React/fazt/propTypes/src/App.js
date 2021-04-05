import React, {Component} from 'react';
import { render } from 'react-dom';
import './App.css';
import tasks from './example/tasks.json';
import Tasks from './components/Tasks.js'

class App extends Component{

  state = {
    tasks: tasks
  }
  render(){
    return <div>
      <Tasks tasks={this.state.tasks}/> 
    </div> 
  };
}

function app () {
  
}

export default App;
