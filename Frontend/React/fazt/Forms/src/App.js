import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Tasks from "./components/Tasks.js"
import tasks from './example/tasks.json';
import TaskForm from "./components/TaskFrom";
import Posts from './components/Post'

class App extends Component{
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: 4
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id){
        task.donde = !task.done
      }
      return task
    });
    this.setState({tasks: newTasks})
  }
  
  render(){
    return(
      <div>
        <Router>
          <Link to="/">Home</Link><br></br>
          <Link to="/posts">Posts</Link><br></br>
          <Route exact path="/" render={() => {
            return <div>
              <TaskForm addTask={this.addTask}/> 
              <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
            </div>
          }}> 
          </Route>
          <Route path="/posts" component={Posts}>

          </Route>
        </Router>        
        
        
      </div>
    )
  }
}

export default App