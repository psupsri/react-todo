import React, { Component } from 'react';
import './App.css';

import InputBox from './components/InputBox'
import Panel from './components/Panel'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: [],
      title: 'React Todo'
    }

    this.handleValue = this.handleValue.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClear = this.handleClear.bind(this)

  }

  handleValue (v) {
    this.state.todo.push({
      title: v,
      status: false
    })
    this.setState(
      this.state
    )
  }

  handleComplete (v) {
    let array = this.state.todo
    array[v].status = true
    this.setState({todo: array})
  }

  handleDelete (v) {
    let array = this.state.todo
    array.splice(v, 1)
    this.setState({todo: array})
  }

  handleClear () {
    console.log('eiei')
  }

  render() {
    return (
      <div className="App">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <InputBox
                    onInput={this.handleValue}
                    title={this.state.title}
                  ></InputBox>
                  <Panel
                    items={this.state.todo}
                    onComplete={this.handleComplete}
                    onDelete={this.handleDelete}
                    onClear={this.handleClear}
                  ></Panel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
