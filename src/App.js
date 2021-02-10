import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Progress from './components/progress';
class App extends Component {
  state = {
    data: []
  };

  //{"buttons":[7,46,-32,-10],"bars":[86,36],"limit":160}
  
async componentDidMount() {
  const { data } = await axios.get("http://pb-api.herokuapp.com/bars");
  console.log(data);
  this.setState({ data });
}

  render() { 
    const { bars, buttons, limit } = this.state.data;

    return (  
    <main className="container">
      <h1>Progress Bar</h1>
      <Progress bars={bars} />
    </main> 
    );
  }
}
export default App;