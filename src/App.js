import React, { Component } from 'react';
import './App.css';

import InputBox from './components/InputBox'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: []
    }

    this.handleValue = this.handleValue.bind(this)
  }

  handleValue (v) {
    this.state.todo.push(v)
    this.setState(
      this.state
    )
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <InputBox onInput={this.handleValue}></InputBox>
          { this.state.todo.map((v, i) => <div key={i}>{v}</div>) }
        </div>
      </div>
    );
  }
}

export default App;
