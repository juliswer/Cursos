import React from "react";
import './App.css';

/* function Helloworld(props){
  return (
    <div id="hello">
    <h3>{props.subtitle} </h3>
    {props.mytext}  
    </div> 
  )
} */

class Helloworld extends React.Component {
  state = {
    show: true 
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }
  render(){
    if (this.state.show){
      return(
        <div id="hello">
          <h3>{this.props.subtitle} </h3>
          {this.props.mytext}  
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div> 
      )
    } else {
      return (
      <h1>There are not elements
        <button onClick={this.toggleShow}>Toggle Show</button>
      </h1>
      
      )
    }
  }
}

function App() {
  return (
    <div>This is my component: 
      <Helloworld mytext="Hello Fazt" subtitle="lorem"/>
      <Helloworld mytext="Hola pepe" subtitle="pepe"/>
      <Helloworld mytext="Hola" subtitle="hola"/>
    </div>    
  );
}

export default App;
