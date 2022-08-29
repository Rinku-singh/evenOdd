import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + Math.ceil(Math.random() * 100)})
  }

  getCountText = () => {
    const {count} = this.state

    if (count % 2 === 0) {
      return 'Count is Even'
    }
    return 'Count is Odd'
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">{this.getCountText()}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="sm-para">*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
