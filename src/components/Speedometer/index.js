// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  OnIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  OnDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-bg">
        <h1 className="main-heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image-card"
        />
        <h3> Speed is {count}mph </h3>
        <p className="desc">Min limit is 0 mph,Max limit is 200 mph </p>
        <div>
          <button className="button-1" type="button" onClick={this.OnIncrement}>
            Accelarate
          </button>
          <button className="button-2" type="button" onClick={this.OnDecrement}>
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
