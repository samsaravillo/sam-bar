import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Progress from './components/progress';
class App extends Component {
  state = {
    data: [],
    name: 0,
    selectedBar: 0
  };
  
async componentDidMount() {
  const { data } = await axios.get("http://pb-api.herokuapp.com/bars");
  this.setState({ data });
}

handleAddSubtract = (button) => {
  const { selectedBar, data } = { ...this.state};
  const { bars, limit } =  {...this.state.data};
  console.log(bars);
  let bar = bars[selectedBar];
  bar = data.bars[selectedBar] + button;
  bars[selectedBar] = bar < 0 ? 0 : bar > limit ? limit : bar; 

  this.setState({ bars });
}

handleOptionChange = (event) => {
  console.log('changed',  event.target.value )
  event.preventDefault();
  this.setState({ selectedBar : event.target.value, name : event.target.value })
}

  render() { 
    const { bars, buttons, limit } = this.state.data;
    
    return (  
    <main className="container">
      <h1>Progress Bar</h1>

      <div>
        { bars && bars.length > 0
            ? bars.map((bar,index) => <Progress key={index} selectedBar={this.state.selectedBar} name={index} value={bar} limit={limit} />)
            : "Loading..."
        }
      </div>
      <div>
        <select className="form-select mb-3" onChange={this.handleOptionChange}>
        { bars && bars.length > 0 ? 
            bars.map((option, index) => <option key={index} defaultValue value={index}>#progress {index + 1}</option> ) 
          : "Loading..."
          }  

        </select>
      </div>
      <div>
      { buttons && buttons.length > 0 
          ? buttons.map(button => 
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              key={button} 
              onClick={() => this.handleAddSubtract(button)}
            >
              {button}
            </button>)
          : "Loading..."
        }
      </div>

    </main> 
    );
  }
}
export default App;