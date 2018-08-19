import React, { Component } from 'react'

class InputBox extends Component {
  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)

  }

  handleInput (e) {
    if (e.keyCode !== 13) return
    e.preventDefault()
    this.props.onInput(e.target.value)
    e.target.value = ''
  }

  render() {
    return (
      <div className="field">
        <p className="control has-icons-right">
          <input className="input" type="text"
            placeholder="Write something" onKeyDown={this.handleInput}/>
          <span className="icon is-small is-right">
            <i className="mdi mdi-keyboard"></i>
          </span>
        </p>
      </div>
    )
  }
}

export default InputBox
