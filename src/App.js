import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Progress from './components/progress';
class App extends Component {
  state = {
    data: []
  };
  
async componentDidMount() {
  const { data } = await axios.get("http://pb-api.herokuapp.com/bars");
  console.log(data);
  this.setState({data});
}

  render() { 
    return (  <main className="container">
    <h1>Progress Bar</h1>
    <Progress />
  </main> );
  }
}
export default App;