import React, { Component } from 'react'

class Panel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: this.props.items
    }

    this.handleComplete = this.handleComplete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleClear = this.handleClear.bind(this)

  }

  handleComplete (v) {
    this.props.onComplete(v)
  }

  handleDelete (v) {
    this.props.onDelete(v)
  }

  handleClear () {
    this.props.onClear()
  }

  render() {
    const completeStyle = {
      textDecoration: 'line-through'
    }

    return (
      <div className="box">
        <nav className="level">
          <div className="level-left">
            {this.state.items.length} items
          </div>
          <div className="level-right">
            {/* <button className="button is-danger" onClick={this.handleClear}>Clear</button> */}
          </div>
        </nav>
        {
          this.state.items.map((item, i) => {
            return <nav className="level" key={i}>
              <div className="level-left">
                <div className="level-item">
                  <span style={item.status? completeStyle: null}>{item.title}</span>
                </div>
              </div>
              <div className="level-right">
                {
                  item.status === false && <p className="level-item">
                  <a className="button is-success is-outlined" onClick={() => this.handleComplete(i)}>
                    <span className="icon is-small">
                      <i className="mdi mdi-check"></i>
                    </span>
                  </a>
                </p>
                }
                <p className="level-item">
                  <a className="button is-danger is-outlined" onClick={() => this.handleDelete(i)}>
                    <span className="icon is-small">
                      <i className="mdi mdi-close"></i>
                    </span>
                  </a>
                </p>
              </div>
            </nav>
          })
        }
      </div>
    )
  }
}

export default Panel
