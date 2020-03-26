import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  render() {
    return (
      <div>
        <h1>Date</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);
