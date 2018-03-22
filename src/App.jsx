import React, { Component } from 'react';
import Box from './Box';
import './App.css';

const colors = ['red', 'green', 'blue'];

class App extends Component {
  state = {
    color: 'white'
  };

  render() {
    return (
      <div className="app-container">
        <div style={{ backgroundColor: this.state.color }} className="main-display">
          Main Display
        </div>
        <div className="box-container">
          {colors.map(color => (
            <Box color={color} onClick={() => this.setState({ color })}>
              Click me to turn display {color}
            </Box>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
