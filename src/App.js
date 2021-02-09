import React, { Component } from 'react';
import './App.css';
import Progress from './components/progress';
class App extends Component {
  state = {
    buttons: [40, 33, -17, -30],
    bars: [69, 31, 69],
    limit: 100,
  };
  
  render() { 
    return (  <main className="container">
    <h1>Progress Bar</h1>
    <Progress />
  </main> );
  }
}

export default App;
