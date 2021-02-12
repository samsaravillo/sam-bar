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
  let bar = bars[selectedBar];
  bar = data.bars[selectedBar] + button;
  bars[selectedBar] = bar < 0 ? 0 : bar > limit ? limit : bar; 
  this.setState({ bars });
}

handleOptionChange = (event) => {
  event.preventDefault();
  this.setState({ selectedBar : event.target.value, name : event.target.value })
}

  render() { 
    const { bars, buttons, limit } = this.state.data;

    return (  
    <main className="container">

      <h1>Progress Bars Demo</h1>
      <div>
        { bars && bars.length > 0
            ? bars.map((bar,index) => <Progress key={index} selectedBar={this.state.selectedBar} name={index} value={bar} limit={limit} />)
            : "Loading..."
        }
      </div>

      <div className="row">
        <div className="col-md-4">
          <select className="form-select mb-3 px-3 py-1" onChange={this.handleOptionChange}>
          { bars && bars.length > 0 ? 
              bars.map((option, index) => <option key={index} defaultValue value={index}>#progress {index + 1}</option>) 
            : "Loading..."
            }  

          </select>
        </div>
        <div className="col-md-8">
          { buttons && buttons.length > 0 
            ? buttons.map((button, index) => 
              <button 
                type="button" 
                className="btn btn-secondary btn-sm mx-2 px-3" 
                key={index} 
                onClick={() => this.handleAddSubtract(button)}
              >
                {button}
              </button>)
            : "Loading..."
          }
        </div>
      </div>

    </main> 
    );
  }
}
export default App;