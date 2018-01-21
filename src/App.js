import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    name: 'TurboRooster'
  }

  nameChangedHandler = (event) => {
    this.setState(
      {name: event.target.value}
    )
  }

  render() {
    const style = {
      backgroundColor: '#ccc',
      font: 'inherit',
      color: 'white',
      border: '2px solid black',
      padding: '8px'
    };

    return (
      <div className="App">
        <UserOutput 
          name={this.state.name} 
          style={style} />
        <UserOutput 
          name={this.state.name}/>
        <UserInput
          style={style}
          name={this.state.name}
          changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
